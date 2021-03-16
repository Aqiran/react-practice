import { useState } from 'react'
import Bloglist from './Bloglist';
const Home = () => {                                                //use sfc to create func comp
   
    /*const customStyle={                                       //INLINE STYLE
        margin: "20px 0",
        color: "#f1356d",
        borderStyle:"outset"   
    }*/
    

    const [blogs, setBlogs] = useState([                              //for using hooks must import from react
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }  //create destructured array that contains item to change and setItemname
    ])
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
            <div className="listing" >
                {
                    /*blogs.map((items) => (
                        <div className="preview" style={customStyle} key={items.id}>
                            <h2>{items.title}</h2>
                            <p>Written by {items.author}</p>
                        </div>
                    ))*/
                        <div>                  
                    <Bloglist blogs={blogs} title="ALL BLOGS" />
                    <br/>
                    <Bloglist blogs={blogs.filter((items)=>items.author==='mario')} title="Mario's BLOGS" />
                        </div>
                }
            </div>
            <button onClick={clickme}>CLICK HERE</button>
        </div>               //short cut -> div.classname
    );
}

export default Home;