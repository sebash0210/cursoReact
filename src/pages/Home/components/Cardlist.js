import React from 'react'
import {Link} from 'react-router-dom'

export const Cardlist = (props) => (
    <Link to={ `/detail/${props.id}` }>
       <section>
         <article style={{ backgroundImage: `url(${props.image})` }} ></article>
         <div>
            <h2>{ props.description }</h2>
            <h4>{ props.place }</h4>
            <h6><b>Calificacion: </b>{ props.score }</h6>
         </div> 
        </section> 
    </Link> 
    
 )