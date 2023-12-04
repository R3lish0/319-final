import React, { useEffect, useState } from 'react';
import './App.css';
import "./styles/styles.css"
import data from "./data.json"
import bacon from "./images/bacon.jpg"
import anon from "./images/anon.png"




async function populate()
{
    const response = await fetch("https://final-server-ktxj.onrender.com/allusers");
    const userFeed = await response.json();
    return (userFeed)
}

async function updateFavor(id, favor){
    const requestOptions = {
    method: 'PUT',
    body: JSON.stringify({ id: id, favor: favor})
    };

    fetch('https://final-server-ktxj.onrender.com/favor', requestOptions)

}




//img user date
//content
//favor



function Feed() {
    const [feedData, setFeedData] = React.useState(null);

    const getData = () => {
        console.log('getting feed data')
        populate()
        .then(async (userFeed) => 
        {setFeedData(userFeed.map((obj) => 
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
                    <button onClick={() => {updateFavor(id,1)}}>Like</button>
                    <p style={{margin:"auto"}}>{obj.favor}</p>
                    <button onClick={() => updateFavor(id,-1)}>Dislike</button>
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
    },[])

    return (
        <div>
            <div id="feed">
            {feedData}
            </div>
        </div>
        
    )
}


export default Feed;