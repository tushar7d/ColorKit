import Color from 'color'
 
  export const darkenClr = (fill,val) =>{
    return Color(fill,"rgb").darken(val).rgb().object()
  }
  
  export const lightenClr = (fill,val) =>{

    let out = Color(fill,"rgb").lighten(val).rgb().object()

    if(out.b>1){

      return {r: out.r, g:out.g, b:1}
    }
    
    else
    return out
  }

  



  