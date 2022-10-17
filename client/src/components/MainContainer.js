import React from 'react'

import { makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        
    }
}))

const MainContainer = ({children, ...props}) => {
    const styles = useStyles()
    return (
        <Container className={styles.root} maxWidth='sm' component="main" {...props}>
            {children}
        </Container >
    )
}

export default MainContainer