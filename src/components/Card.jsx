import React from "react"
import { navigate } from "gatsby-link"

import SkullRadio from "../../static/assets/svg/SkullRadio.svg"
import "../styles/components/_card.scss"

export const Card = (type) => {
  return <div className="cardContainer" onClick={() => {
    navigate('/uploader')
  }}>
    <div className="cardTitle" >Tokemak Pilot License</div>
    <SkullRadio/>
    <div>License issuance has now begun.</div>
  </div>
}
