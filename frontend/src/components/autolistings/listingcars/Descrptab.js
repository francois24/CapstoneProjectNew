import { useState } from "react";
import './descrptab.css';
import Vehicledesc from './Vehicledesc';
import Equipment from './Equipment';
import Specifications from './Specifications';
import Reviewslist from './Reviewslist'

const Descrptab = () => {
  
    const [toggleState, setToggleState] = useState(1);
  
    const toggleTab = (index) => {
      setToggleState(index);
    };

  return (
    <div className="containerautol">
      <div className="bloc-tabsautol">
        <button
          className={toggleState === 1 ? "tabsautol active-tabsautol" : "tabsautol"}
          onClick={() => toggleTab(1)}
        >
          <h6>Vehicle Description</h6>
        </button>
        <button
          className={toggleState === 2 ? "tabsautol active-tabsautol" : "tabsautol"}
          onClick={() => toggleTab(2)}
        >
          <h6>Equipment</h6>
        </button>
        <button
          className={toggleState === 3 ? "tabsautol active-tabsautol" : "tabsautol"}
          onClick={() => toggleTab(3)}
        >
          <h6>Specifications</h6>
        </button>
        <button
          className={toggleState === 4 ? "tabsautol active-tabsautol" : "tabsautol"}
          onClick={() => toggleTab(4)}
        >
          <h6>Reviews</h6>
        </button>
      </div>

      <div className="content-tabsautol">
        <div
          className={toggleState === 1 ? "contentautol  active-contentautol" : "contentautol"}
        >
          <Vehicledesc/>
        </div>

        <div
          className={toggleState === 2 ? "contentautol  active-contentautol" : "contentautol"}
        >
          <Equipment/>
        </div>

        <div
          className={toggleState === 3 ? "contentautol  active-contentautol" : "contentautol"}
        >
          <Specifications/>
        </div>
        <div
          className={toggleState === 4 ? "contentautol  active-contentautol" : "contentautol"}
        >
          <Reviewslist/>
        </div>
      </div>
    </div>
  )
}

export default Descrptab
