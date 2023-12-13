import React, { useEffect, useState } from 'react';
import './App.css';
import "./styles/styles.css"
import anon from "./images/anon.png"


async function populate()
{
    const response = await fetch("http://localhost:8080/allusers-sorted");
    const userFeed = await response.json();
    return (userFeed)
}



function Leader() {
    const [leadData, setLeadData] = React.useState(null);
    const [reRender, setRerender] = React.useState(false);

    const getData = () => {
        console.log('getting leaderboard data')
        populate()
        .then(async (data) => 
        {setLeadData(data.map((obj) => 
            {
            const dt = new Date(obj.date);
            let id = obj._id;
            let curFavor = obj.favor;
            return (
            <div key={id} id="post-container">
            <div id="topRow">
                <img width="50em" src={anon}></img>
                <h4>{dt.toLocaleDateString("en-US")}</h4>
            </div>
            <div id="post-content">
                <p>{obj.content}</p>
            </div>
            <div id="favor-wrapper">
                <div id="favor" style={{float:"right"}}>
                    <p style={{margin:"auto"}}>{curFavor}</p>
                </div>
            </div>
            </div>
            )
            }
            ))
        })
    }


    React.useEffect(() => {
        getData();
    },[reRender])

    return (
        <div>
            <button onClick={() => setRerender((prev) => !prev)}>Refresh</button>
            <div id="lead">
            {leadData}
            </div>
        </div>
        
    )
}


export default Leader;