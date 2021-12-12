import React, {useState} from 'react'
import EmployeeForm from './EmployeeForm'
import { Paper } from '@mui/material'
import { makeStyles } from '@material-ui/styles';
import useTable from '../../components/useTable';
import { TableBody, TableCell, TableRow, Toolbar, InputAdornment } from '@material-ui/core';
import * as employeeService from '../../services/employeeService';
import Controls from '../../components/control/Controls';
import {EditOutlined, Search} from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import Popup from '../../components/Popup';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseIcon from '@material-ui/icons/Close';



const useStyles = makeStyles(theme => ({
    pageContent: {
        marginTop: '10px',
        padding: '35px',
        
    },
    searchInput:{
        marginLeft:'350px',
        width: '75%'
    },
    newButton: {
        position: 'absolute',
        right: '10px'
    }
  
}))

const headCells = [
    {id:'fullName', label:'Employee Name'},
    {id:'email', label:'Email'},
    {id:'mobile', label:'Mobile'},
    {id:'department', label:'Department'},
    {id:'actions', label:'Actions'},

]
export default function employees() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [records, setRecords] = useState(employeeService.getAllEmployees())
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [openPopup,setOpenPopup] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [recordForEdit, setRecordForEdit] = useState(null);
    const{
        TblContainer,
        TblHead,
        recordsAfterPagingAndSorting,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    }= useTable (records, headCells,filterFn);
  
    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter(x => x.fullName.toLowerCase().includes(target.value))
            }
        })
    }

    
    const addOrEdit = (employee, resetForm) => {
        if (employee.id == 0)
            employeeService.insertEmployee(employee)
        else
            employeeService.updateEmployee(employee)
        resetForm()
        setRecordForEdit(null)
        setOpenPopup(false)
        setRecords(employeeService.getAllEmployees())
    }

    const openInPopup = item => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }

    return (
        <>
         <Paper className = {classes.pageContent}>
      
        <Toolbar className = {classes.searchInput}>
        <Controls.Input
                        label="Search Employees"
                        className={classes.searchInput}
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                        onChange={handleSearch}

                    />
           <Controls.Button
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                        onClick={() => { setOpenPopup(true); setRecordForEdit(null); }}
                    />
        </Toolbar>
        <TblContainer>
            <TblHead/>
            <TableBody>{
                  recordsAfterPagingAndSorting().map(item => 
                    (<TableRow key ={item.id}>
                         <TableCell>{item.fullName}</TableCell>
                         <TableCell>{item.email}</TableCell>
                         <TableCell>{item.mobile}</TableCell>
                         <TableCell>{item.department}</TableCell>  
                        <TableCell>
                            <Controls.Button
                                color="primary"
                                onClick={()=> {openInPopup(item)}}>
                                    <EditOutlinedIcon fontSize="small"
                                    />  
                            </Controls.Button>
                            <Controls.Button
                                color="primary">
                                    <CloseIcon fontSize="small"/>  
                            </Controls.Button>
                        </TableCell>
                    </TableRow>))
                
                
                
                }
               
            </TableBody>
        </TblContainer>
        </Paper>
        <Popup
            title="Thêm nhân viên"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
        >
               <EmployeeForm
                    recordForEdit={recordForEdit}
                    addOrEdit={addOrEdit} />
        </Popup>
        </>
       
      


    )
}
