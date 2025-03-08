import React, { useState } from 'react'
import '../styles/ListItem.css'

function ListItem({item, onDelete, onToggle, onEdit}) {

  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(item.name);

  return (
    <div className={`ListItem ${item.hasBought ? 'bought' : ''}`}>
        {
          !isEditing &&
          <span 
            className='item-name'
            onClick={
              ()=> {onToggle(item.id)}
            }>
              {item.name}
          </span>
        }
        {
          isEditing &&
            <>
              <input
                className='edit-input'
                value={newName}
                onChange={(e) => {
                  setNewName(e.target.value);
                }}
              />

              <button
                 className='save-btn'
                 onClick={() => {
                  onEdit(item.id, newName);
                  setIsEditing(false);
                 }}
                 >Save</button>
            </>
        }

        {
          !isEditing && 
          <button 
            className='edit-btn'
            onClick={() => {
              setIsEditing(true);
            }}>
              Edit
            </button>

        }

        
        <button onClick={() => {
          onDelete(item.id)
        }}>Delete</button>

    </div>
  )
}

export default ListItem