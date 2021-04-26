import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './bulma.min.css'


let App = () => {
  return <div >
    <div className="tabs">
      <ul id="tabs" data-tabs>
        <li className="tab is-active" ><a>Dark Shades</a></li>
        <li className="tab"><a>Light Shades</a></li>

      </ul>
    </div>
  </div>
}


ReactDOM.render(<App />, document.getElementById('react-page'))