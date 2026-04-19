import { lazy } from 'react';
import { Layout, CheckCircle, Calculator, Info, Table } from 'lucide-react';

export interface Task {
    id: string;
    name: string;
    description: string;
    icon: typeof Layout;
    component: React.LazyExoticComponent<() => React.JSX.Element>;
}

export const tasks: Task[] = [
    {
        id: 'intro',
        name: 'Introduction',
        description: 'Welcome to your multi-task dashboard.',
        icon: Info,
        component: lazy(() => import('./intro/Intro')),
    },
    {
        id: 'counter',
        name: 'Counter Task',
        description: 'A simple counter demonstration.',
        icon: Calculator,
        component: lazy(() => import('./counter/CounterTask')),
    },
    {
        id: 'todo',
        name: 'Todo List',
        description: 'A basic task management app.',
        icon: CheckCircle,
        component: lazy(() => import('./todo/TodoTask')),
    },
    {
        id: 'carousel',
        name: 'Carousel Task',
        description: 'A basic task management app.',
        icon: CheckCircle,
        component: lazy(() => import('./carousel')),
    },
    {
        id: 'compoundComponent',
        name: 'Compound Component Task',
        description: 'A basic task management app.',
        icon: CheckCircle,
        component: lazy(() => import('./CompoundComponentArch')),
    },
    {
        id: 'infiniteScroll',
        name: 'Infinite Scroll Task',
        description: 'A basic task management app.',
        icon: Table,
        component: lazy(() => import('./infiniteScroll')),
    },
];
