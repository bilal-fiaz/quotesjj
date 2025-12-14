import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://dummyjson.com/quotes")
    let data = await a.json()
    setCards(data.quotes) // ✅ only the quotes array
    console.log(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
    <Navbar />
      <div className="container">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <p>{card.quote}</p>
            <h1>{card.author}</h1>
          </div>
        ))}
      </div>
      <div className='foota'>
       <Footer />
       </div>
    </>
  )
}

export default App
