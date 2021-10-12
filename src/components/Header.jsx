import React from "react"
import TokemakLogo from "../../static/assets/images/tokemak_desktop_logo.png"
import "../styles/components/_header.scss"


export const Header = () => {
  return <div className="headerContainer">
    <img src={TokemakLogo} alt="Tokemak Logo" className="tokemakDesktopLogo" />
  </div>
}
