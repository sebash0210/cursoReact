import React from 'react';
import { Link } from 'react-router-dom';


export const Button = ({isLink= false , linkTo = '/',label = "Botón",type = "button" , style={}}) => (
      isLink 
      ? <Link className = "button" style={style}  to={linkTo}>{label}</Link>
      : <button className = "button" style={style} type={type}>{label}</button>
)