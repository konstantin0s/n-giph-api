import React from 'react';
import { Link } from "react-router-dom";
import './css/Gif.css';

 const Gif = (props) => {

    return (
        <div className="child-gif">
                 <li key={props.gif.id}>
                <img alt="gifff" src={props.gif.images.downsized_large.url} />
                <h3>{props.gif.title}</h3>
                <h5> {props.gif.username}</h5>
                <p>{props.gif.import_datetime}</p>
                    </li>
                    <Link className="linkz" id={props.gif.id} to={`/gif/${props.gif.id}`}>
                   Red More..
            </Link>
        </div>
    )
}


export default Gif;
