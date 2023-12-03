import { useState } from "react";

const Themecard = (props) => {
    const { text, isSelected, onThemeChange } = props;
    const handleThemeClick = () => {
        if (!isSelected && onThemeChange) {
            onThemeChange();
        }
    };
    return (
        <div onClick={handleThemeClick}>
            <div className={`w-20 p-2 mt-2 border-2 rounded-lg cursor-pointer ${isSelected ? 'border-4 border-blue-500' : 'border-black'
                }`}>
                <h5 className="text-sm font-bold">Title</h5>
                <div className="w-16 h-2 bg-gray-300 rounded-lg"></div>
                <div className="w-5 h-2 mt-2 bg-gray-300 rounded-lg"></div>
            </div>
            <h3 className="mx-4 my-2 text-xs font-semibold">{text}</h3>
        </div>
    )
}

export default Themecard