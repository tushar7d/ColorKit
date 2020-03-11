import './figma-plugin-ds.min.css'
import './figma-plugin-ds.min.js'
import Tabby from 'tabbyjs'
import Color from 'color'

let tabs = new Tabby('[data-tabs]');
tabs.setup();
document.getElementById('create').onclick = () => {
  
  const textbox = document.getElementById('count') as HTMLInputElement
  const count = parseInt(textbox.value, 10)
  const textbox2 = document.getElementById('color') as HTMLInputElement
  
  const color = Color(textbox2.value).rgb().object()
  const textboxRatio = document.getElementById('ratio') as HTMLInputElement
  const ratio = parseFloat(textboxRatio.value);
  parent.postMessage({ pluginMessage: { type: 'darken', count,color,ratio } }, '*')

 
}
document.getElementById('createl').onclick = () => {
  
  const textbox = document.getElementById('countl') as HTMLInputElement
  const count = parseInt(textbox.value, 10)
  const textbox2 = document.getElementById('colorl') as HTMLInputElement
  
  const color = Color(textbox2.value).rgb().object()
  const textboxRatio = document.getElementById('ratiol') as HTMLInputElement
  const ratio = parseFloat(textboxRatio.value);
  parent.postMessage({ pluginMessage: { type: 'lighten', count , color,ratio } }, '*')

 
}

document.getElementById('cancel').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}
document.getElementById('cancell').onclick = () => {
  parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
}