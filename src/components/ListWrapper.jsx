import React from 'react'
import {useState} from 'react'
import ListItem from './ListItem'
import { v4 as uuidv4 } from "uuid"; // Importing uuid library
import "../styles/ListWrapper.css"; // Importing CSS file for styling
import AddItem from './AddItem';

export const ListWrapper = () => {
    const [items, setItems] = useState([]);

    // function to add new list
    const addNewItem = (newItem) => {
        setItems(
            [
                ...items,
                { id: uuidv4(), name: newItem, hasBought: false }
            ]
            // items.push({ id: uuidv4(), name: newItem })
        )

    }

    // delete items
    const deleteItems = (id) => {
        setItems(items.filter((item) => item.id !== id)); // Filtering out the items with the specified id
    }

    // mark if the item has been bought
    const toggleItem = (id) => {
        console.log("Toggled")
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, hasBought: !item.hasBought } : item // Toggling completed status of the item wi
            )
        )

    }

    const onEdit = (id, newValue) => {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, name: newValue } : item // Toggling completed status of the item wi
            )
        )
    }
    return(
        <div className = "ListWrapper">
        <AddItem addNewItem = {addNewItem} />
        {items && items.map((item) => (
            <ListItem
                item={item}
                key={item.id}
                onDelete={deleteItems}
                onToggle={toggleItem}
                onEdit={onEdit}
                // toggleComplete = {toggleComplete}
            />

        ))}

        </div>
    )




}



