import React from 'react';
import './Gif.css';

 function Gif(props) {

    return (
        <div>
                               <li key={props.gif.id}>
<img src={props.gif.images.downsized_large.url} />
                <h3>Title: {props.gif.title}</h3>
                <h5>Type: {props.gif.type}</h5>
                <p>{props.gif.trending_datetime}</p>
                    </li>
        </div>
    )
}


export default Gif;
