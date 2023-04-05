import React, { createContext, useContext, useState } from 'react';
import { Alert, AlertTitle, Snackbar } from '@mui/material';

export interface NotificationMessage {
    severity: 'info' | 'warning' | 'error' | 'success'
    title: string;
    message: string;
    duration: number;
}

const NotificationContext = createContext(null);

const useNotification = () => {

    const [setOpen, setNotification] = useContext(NotificationContext);
    const showNotification = (notification) => {
        setNotification(notification)
        setOpen(true)
    }
    return { showNotification }

}

const NotificationProvider = ({ children }) => {

    const [open, setOpen] = React.useState(false);

    const [notification, setNotification] = useState<NotificationMessage>({
        severity: 'success',
        title: 'Success',
        message: 'Success message!',
        duration: 5000
    })

    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <NotificationContext.Provider value={[setOpen, setNotification]}>
            {children}
            <Snackbar
                open={open}
                onClose={handleClose}
                autoHideDuration={notification.duration}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }} >
                <Alert severity={notification.severity}>
                    <AlertTitle>{notification.title}</AlertTitle>
                    {notification.message} {/** <strong>check it out!</strong>*/}
                </Alert>
            </Snackbar>
        </NotificationContext.Provider>
    );
};

export {
    NotificationProvider,
    useNotification
}