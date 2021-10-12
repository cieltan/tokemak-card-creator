import React from "react"
import { Card } from '../components/Card.jsx'
import { Header } from '../components/Header.jsx'
import "../styles/main.scss"
import "../styles/pages/_home.scss"

export default function Home() {
  return <div className="homeContainer">
    <Header />
    <div className="mainContentContainer">
      <Card />
    </div>
  </div>
}
