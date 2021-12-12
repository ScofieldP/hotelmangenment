import React, {useState, useEffect} from 'react'
import {Grid  } from '@material-ui/core';
import {useForm, Form} from '../../components/useForm';
import Controls from '../../components/control/Controls';
import * as employeesService from '../../services/employeeService';



const genderItems = [
    { id: 'male', title: 'Nam' },
    { id: 'female', title: 'Nữ' },
    { id: 'other', title: 'Khác' },
]


const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: ''
    
}




export default function EmployeeForm(props) {
    const {addOrEdit, recordForEdit} = props
    
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);
    

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            addOrEdit(values, resetForm);
        }
    }
useEffect(() => {
    if (recordForEdit != null)
        setValues({
            ...recordForEdit
        })
}, [recordForEdit])

    return (
            <Form onSubmit={handleSubmit}>

            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name ="fullName"
                        label="Họ tên"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />    
                    
                    <Controls.Input
                        name ="email"
                        label="Email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />    
                    <Controls.Input
                  
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender" 
                        value = {values.gender}
                        onChange={handleInputChange}
                        items = {genderItems}
                    />
                    <Controls.Select
                        name="departmentId"
                        label="Bộ phận"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options ={employeesService.getDepartmentCollection()}
                        error ={errors.departmentId}
                   />
                    <div className='btnMargin'>
                        <Controls.Button
                            className="btn1"
                             type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            onClick={resetForm}
                            />
                    </div>
                   
                </Grid>
            </Grid>
            </Form>
        
    )
}
