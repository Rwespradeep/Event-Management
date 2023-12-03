import React, { useState } from 'react';

const TimePicker = () => {
    const [selectedTime, setSelectedTime] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 || 12;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    };

    const handleTimeSelect = (time) => {
        setSelectedTime(time);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const renderTimeDropdown = () => {
        if (!isDropdownOpen) {
            return null;
        }

        const times = ['12:00 AM', '1:00 AM',
            '2:00AM', '3:00AM', '4:00AM', '5:00AM', '6:00AM', '7:00AM', '8:00AM', '9:00AM', '10:00AM', '11:00AM',
            '1:00PM', '2:00 PM', '3:00 PM', '4:00PM', '5:00 PM', '6:00 PM', '7:00PM', '8:00 PM', '9:00 PM', '10:00PM', '11:00 PM', '12:00 PM'];

        return (
            <div className="time-dropdown">
                {times.map((time) => (
                    <div key={time} onClick={() => handleTimeSelect(time)}>
                        {time}
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className="time-picker">
            {/* Display the selected time or the current time as a placeholder */}
            <div className="time-display" onClick={toggleDropdown} suppressHydrationWarning>
                {selectedTime || getCurrentTime()}
            </div>

            {/* Render the time dropdown */}
            {renderTimeDropdown()}
        </div>
    );
};

export default TimePicker;
