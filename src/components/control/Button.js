import React from 'react'
import { Button as MuiButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
    root: {
       marginRight:'20px'
        
    },
    label: {
        textTransform: 'none'
    }
}))

export default function Button(props) {

    const { text, size, color, variant, onClick, ...other } = props
    const classes = useStyles();

    return (
        <MuiButton
            variant={variant || "contained"}
            size={size || "medium"}
            color={color || "primary"}
            onClick={onClick}
            {...other}
            classes={{ root: classes.root, label: classes.label }}>
            {text}
        </MuiButton>
    )
}
