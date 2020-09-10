import React from 'react';

import {Title} from './../../Components/Title'
import { CardDetail } from './components/CardDetail';
import { Button } from '../../Components/Button';
import { FramePage } from '../FramePage';

const buttonStyle = {
    background: '#FC642D',
    borderColor: '#fe530c'
}

export const DetailPage = () =>(
    <FramePage>
         <Title label='Parapente San Felix'/>
         <CardDetail/>
         <Button label="¡Reserva Ahora!" style={ buttonStyle}/>
    </FramePage>
   
)