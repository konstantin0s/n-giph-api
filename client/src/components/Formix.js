import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import SaveIcon from '@material-ui/icons/Save';
import TextField from 'material-ui/TextField';
import { TextareaAutosize } from '@material-ui/core';
import './css/formix.css';
import { movies } from './HelperFunctions';
import { handleUpload } from './HelperFunctions';
import axios from 'axios';

// const customFormMsg = Object.assign(messageMap, {
//     isEmail: 'Please enter a valid email address',
//     isLength:'Must be 2-50 characters',
//   })

class Formix extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      body: '',
      image: '',
      redirect: false,
      helpertext: '',
      error: false,
    };

    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    if (e.target.value.length <= 2) {
      this.setState({
        helpertext: 'Try Harder',
        error: true,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
        helpertext: '',
        error: false,
      });
    }
  }

  // this method handles just the file upload
  handleFileUpload(e) {
    console.log('The file to be uploaded is: ', e.target.files[0]);

    const uploadData = new FormData();
    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append('image', e.target.files[0]);

    this.setState({ image:  e.target.files[0] });
    // handleUpload(uploadData)
    //   .then((response) => {
    //     // console.log('response is: ', response);
    //     // after the console.log we can see that response carries 'secure_url' which we can use to update the state
    //     this.setState({ image: response.secure_url });
    //   })
    //   .catch((err) => {
    //     console.log('Error while uploading the file: ', err);
    //   });
  }

  validate = () => {
    if (this.state.error === true) {
      return false;
    }
    return true;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const isValid = this.validate();

    const gif = {
      title: this.state.title,
      description: this.state.description,
      image: this.state.image
    };
    console.log(gif);
    if (isValid) {
        axios.post(`/add`, {
            title: this.state.title,
            description: this.state.description,
            image: this.state.image
          })
          .then(res => {
              console.log(res);
            this.props.history.push(`/added`)
            console.log('gif added!');
            // console.log(newMovie);
          });
    //   gify(movie).then((res) => this.props.history.push(`/`));
    }
  };

  render() {
    return (
            
      <React.Fragment>
        <MuiThemeProvider>
          <Paper elevation={3}>
            <form className="containerX" onSubmit={this.handleSubmit}>
              <div>
                <TextField
                  helpertext={this.state.helpertext}
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={this.onChange}
                  error={this.state.error.toString()}
                  required
                  id="outlined-required"
                />
                <div className="error" style={{ fontSize: 12, color: 'red' }}>
                  {this.state.helpertext}
                </div>
                <br />
              </div>
              <div className="upload-container">
                <Button
                  variant="contained"
                  color="default"
                  className="upload-button"
                  startIcon={<CloudUploadIcon />}
                >
                  {' '}
                  Upload Gif
                  <input
                    type="file"
                    name="image"
                    className="btn btn-warning addPic"
                    onChange={(e) => this.handleFileUpload(e)}
                  />
                </Button>
              </div>

              <div>
                <TextareaAutosize
                  helpertext={this.state.helpertext}
                  aria-label="minimum height"
                  type="text"
                  name="description"
                  rowsMin={3}
                  columns="3"
                  placeholder="Add Description"
                  onChange={this.onChange}
                  error={this.state.error.toString()}
                  required
                  id="outlined-required"
                  className="textarea"
                />
              </div>
              <div>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="small"
                  className="save-btn upload-button"
                  startIcon={<SaveIcon />}
                >
                  Save
                </Button>
              </div>
            </form>
          </Paper>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default withRouter(Formix);