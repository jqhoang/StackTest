import React, {Component} from 'react';
import axios from 'axios'

const bcrypt = require('bcryptjs')
const saltRounds = 10;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: "",
      userPassword: "" 
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const email = this.state.email;
    const toBeHashed = this.state.userPassword;
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(toBeHashed, salt, function(err, hash){
        var data = {
          email: email,
          userPassword: hash
        }
        var url = "http://localhost:5001/userRegister";
        axios.post(url, data)
        .then((response) => {
          console.log(response.data.message);
        }, (error) => {
          console.log(error);
        });
      })
    })
  }


  render() {
    return (
      <div className="Register">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange}/>
            <input type="password" name="userPassword" value={this.state.userPassword} onChange={this.handleInputChange}/>
            <input type="submit" value="Register"/>
          </form>
      </div>
    );
  }
}


export default Register;
