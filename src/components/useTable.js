import { Table, TableHead, TableCell, TableRow} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'


const useStyles = makeStyles(theme => ({
    table: {
        marginTop: '50px',
        '& thead th': {
            fontWeight: '600',
        
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        },
    },
}))
export default function useTable(records, headCells, filterFn) {
    const classes = useStyles();

    const TblContainer = props => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    )

    const TblHead = props =>{
         return (<TableHead>
            <TableRow>
                {
                    headCells.map(headCell =>(<TableCell key ={headCell.id}>
                        
                            {headCell.label}
                         
                    </TableCell>))
                }
            </TableRow>
        </TableHead>)
    }

    const recordsAfterPagingAndSorting = () => {
        return filterFn.fn(records);
    }
    return {
        TblContainer,
        TblHead,
        recordsAfterPagingAndSorting

    }
}
