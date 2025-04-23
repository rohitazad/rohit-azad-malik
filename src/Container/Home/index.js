import React from 'react';
import HomeComponent from '../../Components/Home';
const HomePage = ()=>{

    return(
        <>
            <audio autoPlay loop muted>
                <source src="/mp3/rohitcoiding.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <HomeComponent />
        </>
    )
}

export default HomePage;