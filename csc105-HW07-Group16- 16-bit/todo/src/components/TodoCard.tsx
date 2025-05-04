import { FC, useState } from 'react';
import { Todo } from '../types/todo';
 
type TodoCardProps = {
    todo: Todo;
    handleEdit: (id: number, newName: string) => void;
    handleComplete: (id: number) => void;
    handleDelete: (id: number) => void;
};
 
const TodoCard: FC<TodoCardProps> = ({ todo, handleDelete, handleEdit, handleComplete }) => {
    const [editNewName, setEditNewName] = useState('');
    const [isEditing, setIsEditing] = useState(false);

    const handleSaveEdit = () => {
        if (editNewName.trim() === '') return;
        handleEdit(todo.id, editNewName);
        setEditNewName('');
        setIsEditing(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSaveEdit();
        } else if (e.key === 'Escape') {
            setIsEditing(false);
            setEditNewName('');
        }
    };

    return (
        <div className={`rounded-2xl p-4 mb-4 transition-all duration-300 ${
            todo.complete 
                ? 'bg-green-50 border-l-4 border-green-300' 
                : 'bg-pink-50 border-l-4 border-pink-300'
            } hover:shadow-md`}
        >
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3 flex-grow">
                    <div 
                        onClick={() => handleComplete(todo.id)} 
                        className={`h-6 w-6 rounded-full flex items-center justify-center cursor-pointer transition-colors ${
                            todo.complete 
                                ? 'bg-green-400 text-white' 
                                : 'border-2 border-pink-300 bg-white'
                        }`}
                    >
                        {todo.complete && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        )}
                    </div>
                    <span className={`flex-grow text-lg ${todo.complete ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                        {todo.name}
                    </span>
                    <span className="text-xs bg-purple-100 text-purple-600 py-1 px-2 rounded-full">
                        #{todo.id}
                    </span>
                </div>
                <div className="flex gap-1">
                    <button 
                        onClick={() => setIsEditing(!isEditing)}
                        className="text-yellow-500 p-1 rounded-lg hover:bg-yellow-100 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </button>
                    <button 
                        onClick={() => handleDelete(todo.id)}
                        className="text-red-500 p-1 rounded-lg hover:bg-red-100 transition-colors"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Edit form - conditionally displayed */}
            {isEditing && (
                <div className="mt-3 flex gap-2">
                    <input
                        placeholder='New task name'
                        value={editNewName}
                        onChange={(e) => setEditNewName(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-grow p-2 bg-white border border-purple-200 rounded-lg focus:outline-none focus:border-purple-300"
                        autoFocus
                    />
                    <button
                        onClick={handleSaveEdit}
                        className="bg-green-400 text-white px-3 rounded-lg hover:bg-green-500 transition-colors"
                    >
                        Save
                    </button>
                    <button
                        onClick={() => {
                            setIsEditing(false);
                            setEditNewName('');
                        }}
                        className="bg-gray-300 text-white px-3 rounded-lg hover:bg-gray-400 transition-colors"
                    >
                        Cancel
                    </button>
                </div>
            )}
        </div>
    );
};
 
export { TodoCard };