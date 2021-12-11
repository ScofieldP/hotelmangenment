import React, {useState} from 'react'
import EmployeeForm from './EmployeeForm'
import { Paper } from '@mui/material'
import { makeStyles } from '@material-ui/styles';
import useTable from '../../components/useTable';
import { TableBody, TableCell, TableRow } from '@material-ui/core';
import * as employeeService from '../../services/employeeService';

const useStyles = makeStyles(theme => ({
    pageContent: {
        marginTop: '10px',
        padding: '35px',
        
    }
  
}))

const headCells = [
    {id:'fullName', label:'Employee Name'},
    {id:'email', label:'Email'},
    {id:'mobile', label:'Mobile'},
    {id:'department', label:'Department'},

]
export default function employees() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const classes = useStyles();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [records, setRecords] = useState(employeeService.getAllEmployees)
    
    const{
        TblContainer,
        TblHead,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    }=useTable(records, headCells);

    return (
        <>
         <Paper className = {classes.pageContent}>
        { <EmployeeForm/>} 
        <TblContainer>
            <TblHead/>
            <TableBody>{
                 records.map(item => 
                    (<TableRow key ={item.id}>
                         <TableCell>{item.fullName}</TableCell>
                         <TableCell>{item.email}</TableCell>
                         <TableCell>{item.mobile}</TableCell>
                         <TableCell>{item.department}</TableCell>  
                    </TableRow>))
                
                
                
                }
               
            </TableBody>
        </TblContainer>
        </Paper>
        </>
       
      


    )
}
