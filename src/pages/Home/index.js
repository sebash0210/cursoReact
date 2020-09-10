import React from 'react'
import {Title} from './../../Components/Title'
import { Ranking } from './components/Ranking'
import { FramePage } from '../FramePage'
import { ListExperence } from './components/ListExperence'
export const HomePage = () => {
   return( 
    <FramePage>
       <Title label='Top 5'/>
       <Ranking/>
       <Title label='Lista'/>
       <ListExperence/>
    </FramePage>)
}

