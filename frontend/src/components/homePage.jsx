import React,{ useState, useRef, useEffect } from 'react';
import './homePage.css'; // Import your CSS file here
import bg from './bg.jpg';
import bgText from './bgText.png';
import { useSelector } from 'react-redux';
import axios from 'axios';

const HomePage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState('');
    const dropdownRef = useRef(null); // Create a ref for the dropdown menu
    const suggestionsRef = useRef(null); // Create a ref for the suggestions container
    const[userList,setUserList] = useState([])

    function RenderList({user}){
            return(
                <div className='flex justify-center'>
                <div className='bg-gray-300 flex p-4 text-lg rounded-md'>
                    <p className='mx-4' key={user._id}>{user.name}</p>
                    <p className='mx-4' key={user._id}>{user.dob.slice(0,10)}</p>
                    <p key={user._id}>{user.email}</p>
                </div>
                </div>
                        
            )
    }
    const user = useSelector(state => state.counter.user)

    const handleSearch = (event) => {
        event.preventDefault();

        axios.post('/api/user/search', {username : searchTerm}).then((response) => {
            console.log("Successfully searched");
            console.log(response.data);
            setUserList(response.data.data.data)
        })
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const handleLogoutClick = () => {
        // Handle "Log Out" click
        console.log('Log Out clicked');
        setMenuOpen(false); // Close the menu after selection
    };

    // Handle clicks outside of the dropdown menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
                setMenuOpen(false);
                setSuggestions([]);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="home-page h-screen flex flex-col bg-gray-100">
            <header className="header flex items-center justify-between w-full p-4 bg-white shadow-md">
                <img src={bg} alt="Background" className='w-[4em] rounded-full mx-5' />
                <img src={bgText} alt="Background Text" className='w-[9em] rounded-full mx-5' />
                <div className="relative" ref={dropdownRef}>
                    <img src="#" alt="profile" className='logo w-16 mx-4 curdor-pointer' onClick={toggleMenu} />
                    {menuOpen && (
                        <div className="dropdown-menu absolute top-full right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                            <ul className="list-none p-2">
                                <li
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => console.log('View Profile clicked')}
                                >
                                    View Profile
                                </li>
                                <li
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={handleLogoutClick}
                                >
                                    Log Out
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </header>

            {/* Text below the navbar and above the search bar */}
            <h1 className="welcome-text animated-text">Hello {user.name}</h1>

            <main className="flex-grow flex justify-center p-6">
                <form onSubmit={handleSearch} className="relative flex flex-col items-center w-full max-w-md max-h-40 bg-white p-6 rounded-lg shadow-lg">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={event => setSearchTerm(event.target.value)}
                        placeholder="Search for users"
                        style={{ textAlign: 'center' }}
                        className="search-bar px-4 py-2 w-full mb-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button type="submit" className="search-button px-6 py-2 w-full bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Search
                    </button>

                </form>
            </main>

            <p className='text-3xl mb-16'>NAME LIST</p>
            {
                userList.map((user) => {
                    return (
                    <>
                    {/* <p key={user._id}>{user.name}</p>
                    <p key={user._id}>{user.username}</p>
                    <p key={user._id}>{user.dob.slice(0,10)}</p>
                    <p key={user._id}>{user.email}</p> */}
                    <RenderList user = {user} />
                    </>
                    )
                })
            }
        </div>
    );
};

export default HomePage;
