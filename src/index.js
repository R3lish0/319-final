import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';



//fetch('./leaderboard.json')
//.then(function (response) {
//return response.json();
//})
//.then(function (data) {
//getLeaders(data);
//})
//.catch(function (err) {
//console.log('error:' + err);
//})

function getLeaders(data) {
    let mainContainer = document.getElementById("leaderBoard")
    for (let post of data)
    {
        let postDiv = document.createElement("div")
        postDiv.classList.add("lPost")

        let userDiv = document.createElement("div")
        userDiv.classList.add("user")

        let userImg = document.createElement("img")
        userImg.classList.add("userImg")
        userImg.src = post.userImg
        userDiv.appendChild(userImg)

        let username = document.createElement("h4")
        username.classList.add("Luser")
        username.innerHTML= post.user
        userDiv.appendChild(username)



        let postContentDiv = document.createElement("h4")
        postContentDiv.classList.add("numPosts")
        postContentDiv.innerHTML = "Number of Posts: " + post.numPosts
        

        postDiv.appendChild(userDiv)
        postDiv.appendChild(postContentDiv)

        mainContainer.appendChild(postDiv)
    }

}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
