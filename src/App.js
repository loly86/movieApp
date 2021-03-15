
import React from "react";

function Food({name, picture}){
  return <div>
  <h3>I love {name}</h3>
  <img src={picture} width="500" alt="food" />
  </div>
}

const foodILike = [
  {
    name:"Kimchi",
    image:"https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg",
  },
  {
    name:"Samgyeopsal",
    image:"https://i.pinimg.com/originals/e6/27/15/e62715963dae36f4fb7cefae316e3d0e.jpg",
  },
  {
    name:"Bibimbap",
    image:"https://i.imgur.com/Ne6vRwwb.jpg",
  },
  {
    name:"Doncasu",
    image:"https://i.imgur.com/P40iarcb.jpg",
  },
  {
    name:"Kimbab",
    image:"https://i.imgur.com/AiY8reg.jpg",
  },
]

function App() {
  return (
  <div>
    {
    foodILike.map(dish => <Food name={dish.name}
    picture = {dish.image} />)}
  </div>
  );
  
}



export default App;
