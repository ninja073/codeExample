import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

export default function TodoTask() {
    const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { id: Date.now(), text: input.trim() }]);
            setInput('');
        }
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter(t => t.id !== id));
    };

    return (
        <div className="card glass">
            <h2>Todo List</h2>
            <p>This task is located in <code>src/tasks/todo/</code></p>

            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem' }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="New task..."
                    className="glass"
                    style={{
                        flex: 1,
                        padding: '0.75rem',
                        borderRadius: '0.5rem',
                        border: '1px solid rgba(255,255,255,0.1)',
                        color: '#fff',
                        outline: 'none'
                    }}
                    onKeyDown={(e) => e.key === 'Enter' && addTodo()}
                />
                <button onClick={addTodo} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <Plus size={18} /> Add
                </button>
            </div>

            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {todos.map(todo => (
                    <div key={todo.id} className="glass" style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.75rem'
                    }}>
                        <span>{todo.text}</span>
                        <button
                            onClick={() => removeTodo(todo.id)}
                            style={{ background: 'none', border: 'none', color: '#ff4444', padding: 0, cursor: 'pointer' }}
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                ))}
                {todos.length === 0 && <p style={{ opacity: 0.5, textAlign: 'center' }}>No tasks added yet.</p>}
            </div>
        </div>
    );
}
