import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App(){
  return <div className="container"> 
      <Header/>
  <Menupizza/>
  <Footer/>

</div>  
}
function Header(){ return <header  className="header"><h1>Fast React Pizza Co.</h1></header>}

function Menupizza(){
  const pizzas=pizzaData;
  const numpizza=pizzas.length;
  return <main className="menu">
    <h2>Menu</h2>
    {numpizza>0 ?(<ul className="pizzas">
      {pizzaData.map((pizza)=>{
        return <Pizza pizzaObj={pizza} key={pizza.name}/>

      })}   
    </ul>):(<p>we're working now come later please</p>)} 
    

  </main>
}



function Footer(){ 
  const hour =new Date().getHours();
  const openhour=12;
  const closehour=18;
  const IsOpen=hour>=openhour &&hour<=closehour;
  console.log(IsOpen);
  return <footer className="footer"> 
  { IsOpen? <Order closehour={closehour}/> :(<p>we're happy to caming between {openhour}:00 and {closehour}:00 </p>)}
  </footer>
}
  const root =ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  function Pizza({pizzaObj}){
    return (
      <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price }</span>
      </li>
    )
  }
  function Order({closehour}){
    return <div className="order">
  <p>we're open until {closehour}:00. come visit Us</p>
  
  <button className="btn">Order Now</button></div>
  }