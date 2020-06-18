import axios from 'axios';

export const gify = newGif => {
    return axios.post(`/add`, {
      title: newGif.title,
      description: newGif.description,
      image: newGif.image
    })
    .then(res => {

      console.log('gif added!');
      // console.log(newMovie);
    });
  };
  
  
  export const handleUpload = theFile => {
  
    return  axios.post(`/add`, theFile)
        .then(res => res.data)
        .catch(err => {
          console.log(err);
        });
  };
