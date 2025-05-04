import { useState , useEffect} from 'react';
import { TodoCard } from './components/TodoCard';
import { Todo } from './types/todo';
import { getTodoAPI } from './api/getTodo';

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodoName, setNewTodoName] = useState<string>('');

    function handleAdd() {
        if (newTodoName.trim() === '') return;
        
        const newTodo: Todo = {
            id: todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1,
            name: newTodoName,
            complete: false,
        };
        
        setTodos((previous) => {
            return [...previous, newTodo];
        });
        
        setNewTodoName('');
    }

    function handleEditName(id: number, newName: string) {
        setTodos((prev) => 
            prev.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        name: newName,
                    };
                } else return todo;
            })
        );
    }

    function handleComplete(id: number) {
        setTodos((prev) =>
            prev.map((todo) => {
                if (todo.id === id)
                    return {
                        ...todo,
                        complete: !todo.complete, // Toggle complete status
                    };
                else return todo;
            })
        )
    }

    function handleDelete(id: number) {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }

    // Handle Enter key press
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    };

    async function handleFetchTodoData() {
        const resp = await getTodoAPI();
        if (resp.complete && resp.data !== null){
            setTodos(resp.data);
        }
      }
     
    useEffect(() => {
       handleFetchTodoData();
    }, []);
     

    return (
        <div className="min-h-screen bg-gradient-to-r from-sky-200 to-blue-300 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md border border-pink-200">
                <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold text-pink-500 mb-2">My Tasks</h1>
                    <p className="text-gray-400 text-sm">Manage your daily tasks with ease</p>
                </div>
                
                {/* Create Todo Form */}
                <div className="flex mb-8">
                    <input
                        type="text"
                        placeholder="Add a new task..."
                        value={newTodoName}
                        onChange={(e) => setNewTodoName(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-grow p-3 bg-purple-50 border-2 border-purple-100 rounded-l-xl focus:outline-none focus:border-purple-300 transition-colors duration-300 placeholder-purple-300"
                    />
                    <button 
                        onClick={handleAdd}
                        className="bg-purple-400 hover:bg-purple-500 text-white p-3 rounded-r-xl transition-colors duration-300 font-medium"
                    >
                        Add
                    </button>
                </div>
                
                {/* Todo List */}
                <div className="space-y-4">
                    {todos.length === 0 ? (
                        <div className="text-center py-8">
                            <p className="text-gray-400">Your task list is empty</p>
                            <p className="text-gray-300 text-sm">Add some tasks to get started!</p>
                        </div>
                    ) : (
                        todos.map((todo) => (
                            <TodoCard
                                key={todo.id}
                                todo={todo}
                                handleDelete={handleDelete}
                                handleEdit={handleEditName}
                                handleComplete={handleComplete}
                            />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;