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
    {tab? <div >
    <div className="field">
			<div className="label">Enter Base Color (#color-code)</div>
			<input type="input " className="input " value="#0054A3" id="color" />
		</div>
		<div className="field">
			<div className="label">Number of shades required</div>
			<input type="input " className="input " value="5" id="count" />
		</div>
		<div className="field">
			<div className="label">Darken by (0.1~0.9)</div>
			<input type="input" className="input  " value="0.1" id="ratio" />
		</div>


		<div className="field is-grouped">
			<div className="control">
				<button className="button is-link" id="create">Generate</button>
			</div>
			<div className="control">
				<button className="button is-link is-light" id="cancel">Cancel</button>
			</div>
		</div>
    </div> : null}


  </div>
  
}


ReactDOM.render(<App />, document.getElementById('react-page'))