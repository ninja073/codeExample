import { NavLink } from 'react-router-dom';
import { tasks } from '../tasks';
import { Layout as LayoutIcon } from 'lucide-react';

export default function Sidebar() {
    return (
        <div className="sidebar glass">
            <div style={{ padding: '0 1.5rem 2rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                    background: 'linear-gradient(135deg, #6366f1, #a855f7)',
                    padding: '0.5rem',
                    borderRadius: '0.75rem',
                    display: 'flex'
                }}>
                    <LayoutIcon color="#fff" size={24} />
                </div>
                <h2 style={{ margin: 0, fontSize: '1.25rem', background: 'white', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    Tasks
                </h2>
            </div>

            <nav style={{ flex: 1 }}>
                {tasks.map((task) => (
                    <NavLink
                        key={task.id}
                        to={`/task/${task.id}`}
                        className={({ isActive }) => `sidebar-item ${isActive ? 'active' : ''}`}
                    >
                        <task.icon size={20} />
                        <span>{task.name}</span>
                    </NavLink>
                ))}
            </nav>

            <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', margin: 0 }}>
                    v1.0.0-alpha
                </p>
            </div>
        </div>
    );
}
