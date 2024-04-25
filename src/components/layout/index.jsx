import React from "react";
import Navigation from "../navigation";
import Footer from "../footer";

export const Layout = ({ children }) => {
  return (
    <div className="App">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}