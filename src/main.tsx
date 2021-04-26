import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useState } from 'react'
import './bulma.min.css'


let App = () => {
  const [tab, Toggle] = useState(true);

  return <div >
    <div className="tabs">
      <ul id="tabs" >
        <li className={tab ? "tab is-active" : "tab"} onClick={() => Toggle(!tab)}><a>Dark Shades</a></li>
        <li className={tab ? "tab" : "tab is-active"} onClick={() => Toggle(!tab)}><a>Light Shades</a></li>
      </ul>
    </div>
    
  </div>
}


ReactDOM.render(<App />, document.getElementById('react-page'))