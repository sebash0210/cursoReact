import React , {useEffect, useState } from 'react'
import  {requestHttp } from './../../config/HttpRequest'

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

  const [experience,setExperience] = useState({}) 
  let {id} = useParams()
  useEffect(()=>{
      getDetailExperience()
  },[])

  const getDetailExperience= async() =>{
      try {
          const response = await requestHttp('get', `/experiences/getDetail/${id}`)
          setExperience(response.data.experience)
      } catch (error) {
          console.error(error)
      }
  }

  return ( 
    <FramePage>
         <Title label={experience.title}/>
         <CardDetail {...experience}/>
         <Button isLink={true} linkTo = {`/booking/${id}`} label="¡Reserva Ahora!" style={ buttonStyle}/>
    </FramePage>
   )
}