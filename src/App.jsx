import { NavLink, Outlet } from 'react-router';
import './App.css';

function App() {
    const navLinkClassName = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`;

    return (
        <div className='app-shell'>
            <nav className='top-nav'>
                <div className='brand'>Shintaro Miyata</div>
                <div className='nav-links'>
                    <NavLink to='/' end className={navLinkClassName}>
                        Chat
                    </NavLink>
                    <NavLink to='/summary' className={navLinkClassName}>
                        Summary
                    </NavLink>
                </div>
            </nav>
            <main className='route-container'>
                <div className='route-content'>
                    <Outlet />
                </div>
            </main>
        </div>
    );
}

export default App;
