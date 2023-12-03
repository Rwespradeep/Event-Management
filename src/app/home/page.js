import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExploreIcon from '@mui/icons-material/Explore';
import MainCard from './MainCard';
import { EventProvider } from '../../EventContext/EventContext';

const HeaderItems = (props) => {
    return (
        <div className='flex gap-2 m-2 text-gray-500'>
            {props.icon}
            <p>{props.text}</p>
        </div>
    )
}


const Header = () => {
    return (
        <div className='flex gap-4 mt-10 ml-8'>
            <HeaderItems icon={<ConfirmationNumberIcon />} text="Events" />
            <HeaderItems icon={<CalendarMonthIcon />} text="Calendar" />
            <HeaderItems icon={<ExploreIcon />} text="Explore" />
        </div>
    )
}



const home = () => {
    return (
        <div>
            <EventProvider>
                <Header />
                <MainCard />
            </EventProvider>
        </div >
    )
}

export default home