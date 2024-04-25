import React from "react";
import Navigation from "../navigation";
import Footer from "../footer";

export default function Layout ({ children }) {
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