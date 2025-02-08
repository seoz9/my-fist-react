import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [isVisible, setVisible] = useState(true)
  const [btn, setBtn] = useState('hidden')
  const [events, setEvents] = useState([
    { title: "Olimjonning ish kuni ", id: 1 },
    { title: "Barkamolning ish kuni ", id: 2 },
    { title: "Muhammadyusufning ish kuni ", id: 3 },
  ])

  const handleDelete = (id) => {
    setEvents((prev) => {
      return prev.filter((event) => {
        return event.id !== id
      })
    })

  }

  const closeModal = () => {
    setShowModal(false)
  }
  const handleVisible = () => {
    setVisible((prev) => { prev ? setBtn('show') : setBtn('hidden'); return !prev })
  }

  return (
    <div className="App">
      <Title title="Akhor's Kingdom Events" subtitle="  All events will be here" />
      <button onClick={handleVisible}>{btn}</button>
      {isVisible && events.map((event) => {
        return (
          <div key={event.id}><h2>{event.title}</h2>
            <button onClick={() => { handleDelete(event.id) }}>delete</button>
          </div>
        )
      })}
      {showModal && <Modal closeModal={closeModal}>
        <h1>Mening birinchi modalim</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit aliquid, dolor possimus obcaecati aliquam asperiores. Quas temporibus ab rem. Nam eum, placeat voluptas accusantium aspernatur nulla optio doloribus deserunt officia ab architecto modi voluptatum harum! Facere consequatur illum praesentium laudantium. Praesentium aperiam dolorum perspiciatis hic neque veniam magnam nostrum quas.</p>
      </Modal>
      }
      <br />
      <br />
      <button onClick={()=>{setShowModal(true)}}>Show Modal</button>
    </div>
  );
}

export default App;
