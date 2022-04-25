import React from 'react';
import cardData from "./cardData.js";
import Card from "./Card";
import "./App.css";


function App() {
  return (
    <>
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            {
              cardData.map((obj) => {
                return <Card card={obj}/>
              }) // store data in myPrices map to card
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
