import React from 'react'
import { Score } from './../../../Components/Score'
import {Link} from 'react-router-dom'
export const Housing = ({_id, score, users, description, image, place}) => (
    <Link to={ `/detail/${_id}` }>
        <section className="housing">
                <img src={ image } />
                <div>
                    <h3>{ description }</h3>
                    <h6>{ place }</h6>
                    <Score score={score} users={users} id={_id}/>
                </div>   
            </section>
    </Link> 
)