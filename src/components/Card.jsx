import React from "react"
import "../styles/components/_card.scss"
import { navigate } from "gatsby-link"

export const Card = (type) => {
  return <div className="cardContainer" onClick={() => {
    console.log('hit')
    navigate('/uploader')
  }}>
    <div className="cardTitle" >Tokemak Pilot License</div>
    <div>License issuance has now begun.</div>
  </div>
}
