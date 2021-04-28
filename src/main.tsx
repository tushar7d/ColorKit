import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useForm } from "react-hook-form";
import { useState } from 'react'
import Color from 'color'
import './bulma.min.css'


let App = () => {
  const [tab, Toggle] = useState(true);


  // Form setup
  const { register, formState: { errors }, handleSubmit } = useForm();

  // on submit
  const onSubmit = data => generate(data);

  // on close
  let close = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  }


  // send data to cod.ts
  let generate = (data) => {
    console.log(data)
    const count = data.count
    const color = Color(data.color).rgb().object()
    const textboxRatio = data.ratio
    const ratio = parseFloat(textboxRatio);
    parent.postMessage({ pluginMessage: { type: 'darken', count, color, ratio } }, '*')
  }


  //Presentation layer
  return (
    <div>

      <div className="tabs">
        <ul id="tabs" >
          <li className={tab ? "tab is-active" : "tab"} onClick={() => Toggle(!tab)}><a>Dark Shades</a></li>
          <li className={tab ? "tab" : "tab is-active"} onClick={() => Toggle(!tab)}><a>Light Shades</a></li>
        </ul>
      </div>


      <div className=" m-1" >

        {(errors.color || errors.count || errors.ratio) ? <article className="message is-danger is-small"><div className="message-body is-small">Error</div></article> : null }

        {tab ? <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <div className="label">Enter Base Color (#color-code)</div>

            <input type="input" className={errors.color ? "input is-danger" : "input "} defaultValue="#0054A3" {...register("color", { required: true })} id="color" />
          </div>
          <div className="field">
            <div className="label">Number of shades required</div>
            <input type="input" className={errors.count ? "input is-danger" : "input "} defaultValue="5" {...register("count", { required: true })} id="count" />
          </div>
          <div className="field">
            <div className="label">Darken by (0.1~0.9)</div>
            <input type="input" className={errors.ratio ? "input is-danger" : "input "} defaultValue="0.1" {...register("ratio", { required: true })} id="ratio" />
          </div>


          <div className="field is-grouped">

            <div className="control">
              <input type="submit" className="button is-link" id="create" />
            </div>
            <div className="control">
              <button className="button is-link is-light" onClick={close} id="cancel">Cancel</button>
            </div>
          </div>
        </form> : null}

        
        {!tab ? <div >
          <div className="field">
            <div className="label">Enter Base Color (#color-code)</div>
            <input type="input " className="input " value="#0054A3" id="colorl" />
          </div>
          <div className="field">
            <div className="label">Number of shades required</div>
            <input type="input " className="input " value="5" id="countl" />
          </div>
          <div className="field">
            <div className="label">Lighten by (0.1~0.9)</div>
            <input type="input" className="input  " value="0.1" id="ratiol" />
          </div>


          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" id="createl">Generate</button>
            </div>
            <div className="control">
              <button className="button is-link is-light" id="cancell">Cancel</button>
            </div>
          </div>
        </div> : null}
      </div>

    </div>)

}


ReactDOM.render(<App />, document.getElementById('react-page'))