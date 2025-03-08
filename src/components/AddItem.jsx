import React, { useState } from 'react';
import "../styles/AddItem.css"; // Importing CSS file for styling

const AddItem = ({ addNewItem }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddItem = () => {
        if (inputValue.trim()) {
            addNewItem(inputValue);
            setInputValue('');
        }
    };

    return (
        <div className="AddItem">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Add a new item"
            />
            <button onClick={handleAddItem}>Add</button>
        </div>
    );
};

export default AddItem;