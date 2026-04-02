import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import { tasks } from './tasks';

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
            <div className="glass" style={{ padding: '2rem', borderRadius: '1rem' }}>
              <h2 style={{ margin: 0 }}>Loading Task...</h2>
            </div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Navigate to={`/task/${tasks[0].id}`} replace />} />
            {tasks.map((task) => (
              <Route
                key={task.id}
                path={`/task/${task.id}`}
                element={<task.component />}
              />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
