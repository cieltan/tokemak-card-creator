import React from "react"
import { navigate } from "gatsby-link"
import TokemakLogo from "../../static/assets/images/tokemak_desktop_logo.png"
import "../styles/components/_header.scss"
import 'react-h5-audio-player/lib/styles.css'
import AudioPlayer from 'react-h5-audio-player'


export const Header = () => {
  return <header className="headerContainer" >
    <img src={TokemakLogo} alt="Tokemak Logo" className={"tokemakDesktopLogo"} onClick={() => {
    navigate('/')
  }}/>
    <AudioPlayer className={"audioPlayer"} src="https://vgmsite.com/soundtracks/starcraft/ujczarmd/01.%20Starcraft%20Main%20Title.mp3" autoPlay={true} loop={true} volume={.1}/>
  </header>
}
