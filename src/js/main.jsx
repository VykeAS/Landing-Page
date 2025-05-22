import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"
import '../styles/index.css'
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron'
import Card from './components/Card'
import Footer from './components/Footer'

const cards = [
  {
    title: "Strixhaven",
    description: "Discover legendary spells and ancient secrets.",
    image: "https://m.media-amazon.com/images/S/aplus-media/vc/0d77b944-8dc2-4840-95d5-a768c99dd2b6.__CR0,0,970,600_PT0_SX970_V1___.jpg",
    rarity: "Rare"
  },
  {
    title: "Dark Ascension",
    description: "The shadows rise, empowering the undead.",
    image: "https://m.media-amazon.com/images/I/6151MpVuuyL.jpg",
    rarity: "Mythic"
  },
  {
    title: "Zendikar Rising",
    description: "Explore the wild and unleash adventure.",
    image: "https://i0.wp.com/mtgazone.com/wp-content/uploads/2020/09/Zendikar-Rising-Key-Art.jpg",
    rarity: "Uncommon"
  },
  {
    title: "Theros Beyond",
    description: "Face the gods and underworld creatures.",
    image: "https://i0.wp.com/mtgazone.com/wp-content/uploads/2019/10/thb_1080p_en.jpg",
    rarity: "Rare"
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <div className="main-content">
      <Jumbotron />
      <div className="container py-5">
        <div className="row g-4">
          {cards.map((card, index) => (
            <div key={index} className="col-md-6 col-lg-4 col-xl-3">
              <Card 
                title={card.title}
                description={card.description}
                image={card.image}
                rarity={card.rarity}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </React.StrictMode>
)
