import React from 'react';
import './Gif.css';

 function Gif(props) {

    return (
        <div className="child-gif">
                 <li key={props.gif.id}>
                <img src={props.gif.images.downsized_large.url} />
                <h3>{props.gif.title}</h3>
                <h5>Type: {props.gif.type}</h5>
                <p>{props.gif.import_datetime}</p>
                    </li>
        </div>
    )
}


export default Gif;
