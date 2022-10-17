import React, { forwardRef } from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'



const Input = forwardRef((props, ref) => {
   
    return (
        <TextField 
        
        
         margin='normal'
         inputRef={ref}
         fullWidth
         {...props}>
           
          </TextField>
    )
})

export default Input