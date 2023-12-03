'use client'
import React, { createContext, useReducer, useContext } from 'react';

// Define your initial state
const initialState = {
    dateTime: {
        startDate: '02-12-2023',
        endDate: '03-12-2023',
        startTime: '23:37',
        endTime: '11:38',
    },
    location: 'Hyderabad',
    otherOptions: {
        tickets: 'Free',
        requireApproval: true,
        capacity: 'Unlimited',
        visibility: 'public',
    },
    theme: {
        theme: 'gradient',
        selectedTheme: null,
    },
    color: 'gray',
    typeface: 'inter',
};

// Create the context
const EventContext = createContext();

// Create a reducer function to handle state updates
const eventReducer = (state, action) => {
    switch (action.type) {
        // Add more cases as needed
        case 'UPDATE_DATE_TIME':
            return {
                ...state,
                dateTime: { ...state.dateTime, ...action.payload },
            };
        case 'UPDATE_LOCATION':
            return {
                ...state,
                location: action.payload,
            };
        // Add more cases as needed
        default:
            return state;
    }
};

// Create the EventProvider component
export const EventProvider = ({ children }) => {
    const [state, dispatch] = useReducer(eventReducer, initialState);

    return (
        <EventContext.Provider value={{ state, dispatch }}>
            {children}
        </EventContext.Provider>
    );
};

// Create a custom hook to use the context
export const useEventContext = () => {
    const context = useContext(EventContext);
    if (!context) {
        throw new Error('useEventContext must be used within an EventProvider');
    }
    return context;
};
