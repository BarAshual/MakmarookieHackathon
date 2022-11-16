import { Avatar, Box, Typography } from '@mui/material';
import moment from 'moment';

export default function Info({soldier}) {
    return (
    <Box
    sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start'
    }}>
        <Box 
        sx={{
            margin: '0px 8px',
            alignSelf: 'center'
        }}>
            <Avatar alt= {soldier.name} src= {soldier.image}
            sx={{
                width: '60px',
                height: '60px' 
            }}/>
        </Box>
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start'
            }}>
                <Typography>
                    שם חייל: {soldier.name}
                </Typography>
                <Typography>מספר אישי: {soldier.id}</Typography>
                <Typography>תאריך גיוס: {moment(soldier.recruitDate).format('DD-mm-YY')}</Typography>
                <Typography>תאריך קליטה: {moment(soldier.arrivalDate).format('DD-mm-YY')}</Typography>
                <Typography>קורס: {soldier.course}</Typography>
            </Box>
    </Box>)
}