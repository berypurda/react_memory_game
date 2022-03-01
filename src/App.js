import './App.css'
import React, { useState } from 'react'
import Title from './components/Title'
import Model from './components/Model'
import EventList from './components/EventList'
import NewEventForm from './components/NewEventForm'

function App() {
  const [showModel, setShowModel] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModel(false)
  }

  const handleClick = (id) => {
    setEvents(prevEvents => {
      return prevEvents.filter(event => id !== event.id)
    })
  }

  const handleOpen = () => {
    setShowModel(true)
  }


  const subtitle = "All the latest events in Marioland"

  return (
    <div className="App">
      <Title title="Marioland Events" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide Events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick} />}

      {showModel && (
        <Model isSalesModel={true}>
          <NewEventForm addEvent={addEvent} />
        </Model>
      )}

      <button onClick={handleOpen}>Add New Event</button>


    </div>
  );
}

export default App;