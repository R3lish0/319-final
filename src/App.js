import React, { useEffect, useState } from 'react';
import './App.css';
import backgroundVideo from './images/bg-vid.mp4'
import "./styles/styles.css"
import Feed from "./feed"
import Lead from "./leaderboard"






function App() {

    const [showLanding, setLanding] = React.useState(true)
    const [showMain, setMain] = React.useState(false)
    const [showCredits, setCredits] = React.useState(false)

    const enter = () => {
        setLanding(false)
        setMain(true)
    }

    const navCredits = () =>
    {
        setMain(false)
        setCredits(true)
    }

    const navHome = () =>
    {
        setMain(true)
        setCredits(false)
    }

    const Main = () => { return (
    <div className='main' style={{backgroundColor:"#13505B"}}>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"></link>
    <title>Home - ICK</title>
    <script src="index.js"></script> 

    <div id="titleCard"></div>
    <div id="titleHeader">
        <h1 id="title">ICK-IO</h1>
        <nav className="nav navbar-expand-lg justify-content-center">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <button className="nav-link active mx-3" onClick={navHome} style={{fontSize: "18px"}}>Home</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link mx-3" onClick={navCredits} style={{fontSize: "18px"}}>Credits</button>
                </li>
            </ul>
        </nav>
        
    </div>
    <div id="mondoContainer">
    <div id="contentContainer">
        <div id="postCreation" style={{width:"100%",height:"auto"}}>
            <form style={{display:"flex", flexDirection: "column", width:"85%", margin:"auto", padding:"2em", paddingTop:"0"}}>
            <label style={{textAlign: "center"}} id="fname"><h2>Post An Ick</h2></label><br></br>
            <textarea rows="0" cols="0" style={{height:"10em",width:"90%",margin:"auto"}}></textarea>
            </form>        
        </div>
        <div id="feed">
            <h2>Read Some Posts</h2>
            <Feed />
        </div>
    </div>
    <div id="leaderBoard">
        <h2>LoserBoard</h2>
        <Lead />
    </div>

</div>


<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>

    </div>
    )}

const Credits = () => {return (
<div style={{backgroundColor:"#13505B"}}>
<header id="titleCard">
    <div id="titleHeader">
        <h1 id="title">ICK-IO</h1>
        <nav className="nav navbar-expand-lg justify-content-center">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <button className="nav-link active mx-3" onClick={navHome} style={{fontSize: "18px"}}>Home</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link mx-3" onClick={navCredits} style={{fontSize: "18px"}}>Credits</button>
                </li>
            </ul>
        </nav>
        
    </div>
    
</header>

<div id="mondoContainer" className="d-flex justify-content-center align-items-center">
    <div id="contentContainer">
        <div id="feed">
            <h2>Credits</h2>
            <p>
                10/21/2023 
                <br/>
                <br/>
                Connor Persels <br/>
                cpersels@iastate.edu <br/>

                <br/>
                
                Eli Newlin <br/>
                newlin18@iastate.edu
            </p>
        </div>
    </div>

</div>
</div>
)}



const Landing = () => {return (
<div className="landing">
    <title>Landing - ICK-IO</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"></link>
    <div className="video-container">
        <video autoPlay muted loop>
            <source src={backgroundVideo} type="video/mp4"></source>
        </video>

        <div className="content">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
                    <div className="text-center">
                        <button type="button" onClick={enter} className="btn btn-primary btn-lg">ENTER</button>
                        <p className="font-weight-bold display-1">ICK-IO</p>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous"></script>
    </div>
)}

console.log(showLanding)

return (
    <div className="App">
    {showLanding ? <Landing /> : null}
    {showMain ? <Main /> : null}
    {showCredits ? <Credits /> : null}
    </div>
);
}

export default App;
