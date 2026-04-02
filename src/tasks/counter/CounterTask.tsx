import { useState } from 'react';

export default function CounterTask() {
    const [count, setCount] = useState(0);

    return (
        <div className="card glass">
            <h2>Counter Task</h2>
            <p>This task is located in <code>src/tasks/counter/</code></p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginTop: '2rem' }}>
                <h1 style={{ margin: 0, fontSize: '4rem' }}>{count}</h1>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <button onClick={() => setCount(c => c + 1)}>Increment</button>
                    <button onClick={() => setCount(c => c - 1)}>Decrement</button>
                    <button onClick={() => setCount(0)} style={{ opacity: 0.6 }}>Reset</button>
                </div>
            </div>
        </div>
    );
}
