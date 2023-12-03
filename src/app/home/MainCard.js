'use client'
import Avatar from '@mui/material/Avatar';
import Dateicon from './Dateicon';
import { Picker } from './Picker';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ConfirmationNumberOutlinedIcon from '@mui/icons-material/ConfirmationNumberOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import ReduceCapacityOutlinedIcon from '@mui/icons-material/ReduceCapacityOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Themecard from './Themecard';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import { useEventContext } from '@/EventContext/EventContext';

const EventStartEnd = (props) => {
    return (
        <div className='flex mt-1'>
            <div className='w-10 ml-2 mr-3'>
                <p className='mt-1 -ml-2 text-xs font-medium text-gray-600 mr-9'>{props.text}</p>
            </div>
            <Picker />
        </div>
    )
}

const EventOptions = (props) => {
    return (
        <div className='flex justify-between p-2 ml-2 text-center w-80'>
            <div className='flex gap-2 ml-2'>
                {props.icon}
                <p className='text-xs text-center'>{props.eventName}</p>
            </div>
            <p className='text-xs text-center'>{props.type}</p>
        </div>
    )
}

const EventInputs = (props) => {
    return (
        <div>
            <input type="text" placeholder={props.placeholder} className='mr-2 bg-transparent outline-none w-14' />
        </div>
    )
}

const LeftCard = () => {
    const { state, dispatch } = useEventContext();
    const startDate = state.dateTime.startDate;
    console.log(startDate);
    return (
        <div className="flex-1">
            {/* Left card */}
            <div className='flex m-4'>
                <Avatar className='bg-orange-500'>P</Avatar>
                <div className='ml-2'>
                    <p className='text-xs font-semibold text-gray-500'>Create under</p>
                    <h4 className='font-semibold text-black text-md'>Personal calendar</h4>
                </div>
            </div>
            <div className='my-8 ml-5 text-2xl font-bold'>
                <input placeholder='Event Name' className='outline-none' />
            </div>
            <div className='flex gap-5'>
                <div className='ml-6 -mt-4'>
                    <Dateicon />
                </div>
                <div className='relative flex flex-col items-center w-64 h-[90px] p-2 text-black bg-gray-200 rounded-lg -top-6'>
                    <EventStartEnd text='Start' />
                    <EventStartEnd text='End' />
                </div>
            </div>
            <div className='flex gap-5'>
                <div className='w-12 h-12 ml-6 text-center text-gray-400 border-2 rounded-md cursor-pointer'>
                    <LocationOnOutlinedIcon className='mt-2' />
                </div>
                <div className='w-64 p-2 -mt-1 bg-gray-200 rounded-lg'>
                    <h4 className='text-sm font-semibold'>Add Event Location</h4>
                    {/* <p className='text-xs'>Offline location or Virtual link</p> */}
                    <input type="text" placeholder='Offline location or Virtual link' className='w-48 text-xs bg-transparent outline-none' />
                </div>
            </div>
            <h5 className='mt-4 ml-6 text-xs font-semibold text-gray-500'>Event Options</h5>
            <div className='mt-2 ml-5 py-2 bg-gray-300 rounded-md w-[330px]'>
                <EventOptions icon={<ConfirmationNumberOutlinedIcon fontSize='small' />} eventName='Tickets' type={<EventInputs placeholder='Free' />} />
                <EventOptions icon={<PersonAddOutlinedIcon fontSize='small' />} eventName='Require approval' type={<Switch defaultChecked size='small' className='mr-8' />} />
                <EventOptions icon={<ReduceCapacityOutlinedIcon fontSize='small' />} eventName='Capacity' type={<EventInputs placeholder='Unlimited' />} />
                <EventOptions icon={<LanguageOutlinedIcon fontSize='small' />} eventName='Visibility' type={<EventInputs placeholder='Public' />} />
            </div>
            <div className='flex justify-center mt-4'>
                <button className='w-[330px] p-2 text-white bg-black rounded-md font-semibold'>
                    Create Event
                </button>
            </div>
        </div>
    )
}

const CardStyle = (props) => {
    return (
        <div className='flex justify-between p-2 text-sm'>
            <div>
                {props.type}
            </div>
            <div>
                {props.color}
            </div>
        </div>
    )
}

const RightCard = () => {
    const [greetText, setgreetText] = useState('YOU ARE INVITED');
    const [theme, setTheme] = useState('from-orange-500 via-pink-500 to-yellow-300');
    const [selectedTheme, setSelectedTheme] = useState(null);


    const handleThemeChange = (newTheme) => {
        setTheme(newTheme);
        setSelectedTheme(newTheme);
    };

    return (
        <div className="flex-1">
            <div className={`m-4 text-center text-white rounded-md h-80 bg-gradient-to-r ${theme}`}>
                <input type="text" placeholder={greetText} id='greet-text' className='relative h-40 text-2xl font-bold text-center text-white bg-transparent outline-none w-66 top-20' />
            </div>
            <h5 className='mt-2 ml-4 text-xs font-semibold text-gray-500'>Theme</h5>
            <div className='flex gap-2 ml-4'>
                <Themecard text="Minimal" isSelected={selectedTheme === 'from-blue-500 via-cyan-500 to-teal-300'} onThemeChange={() => handleThemeChange('from-blue-500 via-cyan-500 to-teal-300')} />
                <Themecard text="Holiday" isSelected={selectedTheme === 'from-red-500 via-pink-500 to-yellow-300'} onThemeChange={() => handleThemeChange('from-red-500 via-pink-500 to-yellow-300')} />
                <Themecard text="Abstract" isSelected={selectedTheme === 'from-purple-500 via-indigo-500 to-blue-300'} onThemeChange={() => handleThemeChange('from-purple-500 via-indigo-500 to-blue-300')} />
                <Themecard text="Quantum" isSelected={selectedTheme === 'from-green-500 via-lime-500 to-yellow-300'} onThemeChange={() => handleThemeChange('from-green-500 via-lime-500 to-yellow-300')} />
            </div>
            <div className='w-[350px] bg-gray-300 ml-3 rounded-md mt-5'>
                <CardStyle type='color' color='gray' />
                <CardStyle type='typeface' color='Inter' />
            </div>
        </div >
    )
}




const MainCard = () => {
    return (
        <div className="flex w-[750px] bg-white mx-10 mt-8 h-[600px] rounded-lg">
            <LeftCard />
            <RightCard />
        </div>
    )
}

export default MainCard