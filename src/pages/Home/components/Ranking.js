import React , {useEffect, useState } from 'react'
import  {requestHttp } from '../../../config/HttpRequest' 
import { Card } from './Card'


export const Ranking = () =>{
    const [topexperiences,setTopExperiences] = useState([]) 

    useEffect(()=>{
        getTop5()
    },[])
    const getTop5= async() =>{
        try {
            const response = await requestHttp('get', '/experiences/getTop5')
            setTopExperiences(response.data.top5)
        } catch (error) {
            console.error(error)
        }
    }
 return (  <section className="ranking">
       { topexperiences.map(el => <Card key={el._id} { ...el} /> )
                         }      
    </section>
)}