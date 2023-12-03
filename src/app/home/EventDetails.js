import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from './TimePicker';

export const EventDetails = () => {
    // const months = [
    //     'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    //     'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    // ];

    // const days = [
    //     'Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'
    // ];

    const [startDate, setStartDate] = useState(new Date());
    // const [selectedTime, setSelectedTime] = useState('12:00');


    // const currentDate = new Date();
    // const date = currentDate.getDate();
    // const day = days[currentDate.getDay()];
    // const currentMonth = months[currentDate.getMonth()];
    return (
        <div className='flex p-2 -mt-3 text-sm'>
            <div className='w-20'>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>
            <TimePicker />
        </div>
    )
}