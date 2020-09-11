import React from 'react'
import { Score } from './../../../Components/Score'
import {Link} from 'react-router-dom'
export const Housing = ({id, score, users, description, image, place}) => (
    <Link to={ `/detail/${id}` }>
        <section className="housing">
                <img src={ image } />
                <div>
                    <h3>{ description }</h3>
                    <h6>{ place }</h6>
                    <Score score={score} users={users} id={id}/>
                </div>   
            </section>
    </Link> 
)