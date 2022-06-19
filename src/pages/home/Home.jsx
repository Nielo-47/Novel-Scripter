import React from 'react'
import Feed from './components/feed/feed';
import "./home.css"

function Home() {
    return (
        <div className='home'>
            <div className='homeContainer'>
                <Feed />
            </div>
        </div>
    )
}

export default Home;