import React from "react";

const Header = () => {
    return (
        <header>
        <span className="logo-header">
          <img className="logo" src="https://cdn-icons-png.flaticon.com/512/497/497348.png" alt="logo"></img>
          <h1>Reezy Recipe's</h1>
        </span>

        <nav className="nav-tags">
          <a href="/">Home</a>
          <a href="/signup">Sign Up</a>
          <a href="/recipes">Recipes</a>
        </nav>
      </header>
    )
}

export default Header