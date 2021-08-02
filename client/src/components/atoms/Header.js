import React from 'react'

const Header = ({children}) => {
  return(
    <header style={{height: "50px", padding: "0 4px", display: "flex",}}>
      <span style={{margin: "0px 4px", textAlign: "center"}}>
        DIVING LOG
      </span>
      {children}
    </header>
  )
}

export default Header