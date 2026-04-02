export default function Intro() {
    return (
        <div className="card glass">
            <h1>Welcome to Multi-Task Dashboard</h1>
            <p>Select a task from the sidebar to get started.</p>
            <div style={{ marginTop: '2rem', display: 'grid', gap: '1rem', color: 'rgba(255,255,255,0.7)' }}>
                <div className="glass" style={{ padding: '1rem', borderRadius: '1rem' }}>
                    <h3>🚀 High Performance</h3>
                    <p>Built with Vite and React for ultra-fast loading.</p>
                </div>
                <div className="glass" style={{ padding: '1rem', borderRadius: '1rem' }}>
                    <h3>🎨 Premium Design</h3>
                    <p>Modern Glassmorphism aesthetics with smooth transitions.</p>
                </div>
                <div className="glass" style={{ padding: '1rem', borderRadius: '1rem' }}>
                    <h3>📂 Modular Architecture</h3>
                    <p>Tasks are organized in separate folders for clean code.</p>
                </div>
            </div>
        </div>
    );
}
