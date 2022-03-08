import image from './image-jeremy.png';
import React, { useState } from 'react';

function UserCard(props) {
    const[initState,setState]=useState({activeIndex:1})

    function handlerFunction(e){
        e.preventDefault()
        console.log(e)
        props.onStatChange(e.target.text)
        setState({activeIndex:e.target.dataset.id})
        console.log(initState)

    }
    return <div className="col-sm-12 col-lg-3">
        <div class="card mt-4">
            <div class="card-body">
                <div className="card_header head">
                    <img alt="aman" className="img-fluid" src={image}></img>
                    <div className="card_content mx-3">
                        <p style={{ margin: "0" }}>{props.data.content} </p>
                        <h2>{props.data.goodName}</h2>
                    </div>
                </div>
                <div className="status">
                    {props.data.stats.map((stat,i,arr)=>( 
                        <a key={i} href="aman.com" data-id={i} className= {`${i === +initState.activeIndex ? "active" : "inactive"}`} onClick={handlerFunction} >{stat}</a>
                    ))}

                </div>
            </div>
        </div>
    </div>

}

export default UserCard