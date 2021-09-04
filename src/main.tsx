import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { useForm } from "react-hook-form";
import { useState } from 'react'
import { HexColorPicker, HexColorInput } from "react-colorful";

import 'rc-slider/assets/index.css';
import Color from 'color'
import './bulma.min.css'


let App = () => {
  const [tab, Toggle] = useState(true);


  // Form setup
  const { register, formState: { errors }, handleSubmit } = useForm();

  // on submit
  const onSubmit = data => generate(data);
  const onSubmitl = data => generatel(data);

  // on close
  let close = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  }

  const [colorx, setColor] = useState("#00458a");

  // send data to cod.ts
  let generate = (data) => {
    
    console.log(data)
    const count = data.count
    const color = Color(colorx).rgb().object()
    const textboxRatio = data.ratio
    const ratio = parseFloat(textboxRatio);
    parent.postMessage({ pluginMessage: { type: 'darken', count, color, ratio } }, '*')
  }
  let generatel = (data) => {
    console.log(data)
    const count = data.count
    const color = Color(colorx).rgb().object()
    const textboxRatio = data.ratio
    const ratio = parseFloat(textboxRatio);
    parent.postMessage({ pluginMessage: { type: 'lighten', count, color, ratio } }, '*')
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
     

       
    

      <div className=" m-2" >
      <HexColorPicker color={colorx} onChange={setColor} />
      <div className="field mt-2 " >
      <div className="label">Color Code</div>
      <HexColorInput className="input" color={colorx} onChange={setColor} />
      </div>
       
        {(errors.color || errors.count || errors.ratio) ? <article className="message is-danger is-small"><div className="message-body is-small">Error </div></article> : null }
        {tab ? <form onSubmit={handleSubmit(onSubmit)}>
         
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
              <button type="button" className="button is-link is-light" onClick={close} id="cancel">Cancel</button>
            </div>
          </div>
        </form> : null}
        {!tab ? <form onSubmit={handleSubmit(onSubmitl)}>
          
          <div className="field">
            <div className="label">Number of shades required</div>
            <input type="input" className={errors.count ? "input is-danger" : "input "} defaultValue="5" {...register("count", { required: true })} id="count" />
          </div>
          <div className="field">
            <div className="label">Lighten by (0.1~0.9)</div>
            <input type="input" className={errors.ratio ? "input is-danger" : "input "} defaultValue="0.1" {...register("ratio", { required: true })} id="ratio" />
          </div>
          <div className="field is-grouped">
            <div className="control">
              <input type="submit" className="button is-link" id="create" />
            </div>
            <div className="control">
              <button type="button" className="button is-link is-light" onClick={close} id="cancel">Cancel</button>
            </div>
          </div>
        </form> : null}
      </div>
    </div>)

}


ReactDOM.render(<App />, document.getElementById('react-page'))