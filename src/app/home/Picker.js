'use client'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { EventDetails } from './EventDetails';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const Picker = () => {
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <EventDetails />
            </LocalizationProvider>
        </div>
    )
}