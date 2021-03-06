
import { useEffect } from 'react';
import Header from '../components/header';
import Timeline from '../components/timeline';
import Sidebar from '../components/sidebar';

export default function Dashboard() {
    useEffect(() => {
        document.title = 'Finstagram';
    }, []);

    return (
        <div className="bg-gray-background">
            <Header />
            <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg">
                <Timeline />
                <Sidebar />
            </div>
        </div>
    );
}

// some grid shit? idk
// 1024
// 2/3 <-> 1/3
// 66% | 33%