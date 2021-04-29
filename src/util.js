import Color from 'color'
 
  export const darkenClr = (fill,val) =>{
    return Color(fill).darken(val).rgb().object()
  }
  
  export const lightenClr = (fill,val) =>{
    return Color(fill).lighten(val).rgb().object()
  }

  



  