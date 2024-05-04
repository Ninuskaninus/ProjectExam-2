import React from "react";
import { useState, useEffect } from "react";
import getVenues from "../../js/venues/get.js";

export default function Card() {
  getVenues();

  return (
    <div>
      <h1>Card</h1>
    </div>
  );
}
