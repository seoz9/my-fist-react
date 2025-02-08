import './App.css';
import { useState } from 'react';
import Title from './components/Title';

function App() {
  const [arr, setArray] = useState(['Olimjon', 'Barkamol', 'Muhammadyusuf'])
  const [isVisible, setVisible] = useState(true)
  const [btn, setBtn] = useState('hidden')
  const [events, setEvents] = useState([
    { title: "Olimjonning ish kuni ", id: 1 },
    { title: "Barkamolning ish kuni ", id: 2 },
    { title: "Muhammadyusufning ish kuni ", id: 3 },
  ])

  const hadleClick = () => {
    setArray(['Komiljon', 'Qobiljon', 'Muhammadsodiq'])
  }

  const handleDelete = (id) => {

    setEvents((prev) => {
      return prev.filter((event) => {
        return event.id !== id
      })
    })

  }

  const handleVisible = () => {
    setVisible((prev) => { prev ? setBtn('show') : setBtn('hidden'); return !prev })
  }

  return (
    <div className="App">
      <Title title="Akhor's Kingdom Events" subtitle = "All events will be here"/>
      <button onClick={handleVisible}>{btn}</button>
      {isVisible && events.map((event) => {
        return (
          <div key={event.id}><h2>{event.title}</h2>
            <button onClick={() => { handleDelete(event.id) }}>delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
