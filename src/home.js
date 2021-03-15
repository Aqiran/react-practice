import { useState } from 'react'

const Home = () => {                                                //use sfc to create func comp
    const fname = "Aquila";
    const lname = "peeran"
    const date = new Date();
    const currentTime = date.getHours();
    const clickme = (e) => {
        document.getElementById("time").style.color = "magenta";
        console.log(e);
    }
    return (
        <div className="home">
            <h2> this is the home page</h2>
            <p>Directly using Const Vars {fname} {lname}</p>
            <div>
                <h1 id="time">Current time is {currentTime}</h1>
                <img className="food" src="https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x375.jpg" alt="paneer" />
                <img className="food" src="https://www.thespruceeats.com/thmb/yezSFar-QMa4KiuMWlvMXkxY71A=/1155x1732/filters:fill(auto,1)/Stocksy_txpd01bb382eKo100_Medium_1165149-5a61026f9e942700363a9578.jpg" alt="SHake" />
            </div>
            <div className="listing">

            </div>
            <button onClick={clickme}>CLICK HERE</button>
        </div>               //short cut -> div.classname
    );
}

export default Home;