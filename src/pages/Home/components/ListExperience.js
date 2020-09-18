import React , {useEffect, useState } from 'react'
import  {requestHttp } from '../../../config/HttpRequest' 
import { Housing } from './Housing'


   
export const ListExperience = () => {
    const [experiences,setExperiences] = useState([]) 

    useEffect(()=>{
        getAllExperiences()
    },[])
    const getAllExperiences= async() =>{
        try {
            const response = await requestHttp('get', '/experiences')
            setExperiences(response.data.experiences)
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <section className="experences">
        {
           experiences.map((el, key )=> < Housing {...el} key={key}/>)
        }
    </section>
  )
}


