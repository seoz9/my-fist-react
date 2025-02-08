import './App.css';

function App() {
  let name = 'Olimjon'

  const hadleClick = ()=>{
    name ='Doniyor'
    console.log(name)
  }

  return (
    <div className="App">
      <h1>
        Mening ismim {name}
      </h1>
      <button onClick={hadleClick}>Ism o'zgartirish</button>
    </div>
  );
}

export default App;
