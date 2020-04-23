import React from 'react';
import Facebook from 'react-sharingbuttons/dist/buttons/Facebook';
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter';
import 'react-sharingbuttons/dist/main.css';

const Sharing = (props) => {

    const url = `http://localhost:3000/gif/${props.id}`
    const shareText = 'Share this!'
  
    return (
      <div>
        <Facebook url={url} />
        <Twitter url={url} shareText={shareText} />      
      </div>
    )
  }

export default Sharing