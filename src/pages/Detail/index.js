import React from 'react';

import {Title} from './../../Components/Title'
import { CardDetail } from './components/CardDetail';
import { Button } from '../../Components/Button';
import { FramePage } from '../FramePage';
import { useParams } from 'react-router-dom';

const buttonStyle = {
    background: '#FC642D',
    borderColor: '#fe530c'
}



export const DetailPage = () =>{
  // hook
  let {id} = useParams()
  return ( <FramePage>
         <Title label='Parapente San Felix'/>
         <CardDetail/>
         <Button isLink={true} linkTo = {`/booking/${id}`} label="¡Reserva Ahora!" style={ buttonStyle}/>
    </FramePage>
   )
}