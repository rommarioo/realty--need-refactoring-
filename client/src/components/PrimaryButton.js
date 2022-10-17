import { Button } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles((theme)=> ({
    root: {
        margin: theme.spacing(3,0,2),
        backgroundColor: '#198754',
        color: 'white'
    }
}))



const PrimaryButton = ({children, props}) => {
    const styles = useStyles()


    return (
        <Button  type='submit'
        className={styles.root}
        fullWidth
        variant='contained'
        
        {...props}
        >
            {children}
        </Button>
    )
}

export default PrimaryButton