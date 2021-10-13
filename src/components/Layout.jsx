import React from "react"
import {Header} from './Header'
import "../styles/main.scss"


export const Layout = ({children}) => {
  return <main className="mainContainer">
    <Header />
    {children}
  </main>
}
