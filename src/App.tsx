import { useState } from 'react'
import mateoPhoto from './assets/mateo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Sección de Perfil */}
      <div className="profile-card">
        <img src={mateoPhoto} className="profile-photo" alt="Foto de Mateo" />
        <h1 className="profile-name">Mateo Sotomayor</h1>
        <p className="profile-role">Junior Developer</p>
      </div>
    </>
  )
}

export default App
