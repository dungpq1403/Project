
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

export function Header() {
  const style = {color:'red', fontSize: '48px', textTransform: 'uppercase'}
  return <h1 style={style}>Fast React Pizza Co.</h1>
}

export function Menu() {
  return <h2>Our Menu</h2>
}

export function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closedHour = 22;

  const isOpened = (hour >= openHour && hour < closedHour) ? "We're currently open!" : "We're currently closed!";
  return <footer>{new Date().toLocaleTimeString()}. {isOpened}</footer>
}

export function Pizza() {
  return (
    <div>
       <img src={pizzaData[0].photoName} alt={pizzaData[0].name} />
      <h1>Pizza</h1>
    </div>
  );
}
