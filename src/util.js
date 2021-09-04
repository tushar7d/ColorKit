import Color from 'color'
 
  export const darkenClr = (fill,val) =>{
    return Color(fill,"rgb").darken(val).rgb().object()
  }
  
  export const lightenClr = (fill,val) =>{

    let out = Color(fill,"rgb").lighten(val).rgb().object()

    
    
    
    return {r: out.r >1? 1 : out.r, g: out.g >1? 1 : out.g, b: out.b >1? 1 : out.b,}
  }

  



  