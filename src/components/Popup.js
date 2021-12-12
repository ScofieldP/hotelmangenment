
import { Dialog, DialogTitle, DialogContent, Typography } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Controls from './control/Controls';
const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        
        position: 'absolute',

    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))

export default function Popup(props) {

    const {title, children, openPopup, setOpenPopup} = props;
    const classes = useStyles();
    return (
        <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
           <DialogTitle className={classes.dialogTitle}>
            <div style={{ display: 'flex' }}>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                    </Typography>
                    <Controls.Button     
                    color="secondary"
                    onClick={()=>{setOpenPopup(false)}}
                    text ="X">

                    </Controls.Button>
                </div>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}
