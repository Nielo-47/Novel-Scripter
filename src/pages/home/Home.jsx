import React from 'react'
import Feed from './components/feed/feed';
import Timeline from './components/timeline/timeline';
import "./home.css"

function Home() {
    return (
        <div className='home'>
            <div className='homeContainer'>
                <Feed />
                <Timeline />
            </div>

        </div>
    )
}

export default Home;