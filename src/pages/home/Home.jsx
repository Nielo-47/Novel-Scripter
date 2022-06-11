import React from 'react'
import Banner from '../../components/banner/Banner';
import Feed from '../../components/feed/feed';
import Navbar from '../../components/navbar/Navbar';
import "./home.css"

function Home() {
    return (
        <div className='home'>
            <div className='homeContainer'>
                <Banner />
                <Navbar />
                <Feed />
            </div>
        </div>
    )
}

export default Home;