
const Dateicon = () => {
    const months = [

        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const currentDate = new Date();
    const date = currentDate.getDate();
    const currentMonth = months[currentDate.getMonth()];

    return (
        <div className="w-12 h-12 text-center border-2 rounded-md cursor-pointer">
            <div className="text-xs bg-gray-300 rounded-sm">
                {currentMonth}
            </div>
            <div className="font-semibold">
                {date}
            </div>
            <div>
            </div>
        </div>
    )
}

export default Dateicon