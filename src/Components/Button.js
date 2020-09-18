import React from 'react';
import { Link } from 'react-router-dom';


export const Button = ({disabled = false ,isLink= false , linkTo = '/',label = "Botón",type = "button" , style={}}) => (
      isLink 
      ? <Link to={linkTo}>
      <button className="button" disabled={disabled} style={ style } type="button">{ label }</button>
      </Link>
      : <button className = "button" disabled={disabled} style={style} type={type}>{label}</button>
)