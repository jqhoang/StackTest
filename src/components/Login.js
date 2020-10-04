import React, {Component} from 'react';
import axios from 'axios'

const bcrypt = require('bcryptjs')
const saltRounds = 10;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: "",
      userPassword: "",
      loggedIn: false
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
    const entered = this.state.userPassword;
    const data = {
      email: email,
      userPassword: entered
    }
    if(email !== "" && entered !== "") {
        var url = "http://localhost:5001/userLogin";
        await axios.post(url, data)
        .then((res) => {
            const correctPassword = JSON.parse(JSON.stringify(res.data)).userPassword;
            bcrypt.compare(entered, correctPassword, function(err, result){
              if(result) {
                //How do I track logged in.
                //this.state.loggedIn = true;
                alert('You have logged in.')
              } else {
                alert('Incorrect password.')
              }
            })
        })
        .catch((error) => {
          console.log(error);
        });
    } else {

    }

  }

  handleLogout = (e) => {
    this.setState({
        email: "",
        userPassword: "",
        loggedIn: false
    })
  }


  render() {
    if(!this.state.loggedIn) {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                  <input type="text" name="email" value={this.state.email} onChange={this.handleInputChange}/>
                  <input type="password" name="userPassword" value={this.state.userPassword} onChange={this.handleInputChange}/>
                  <input type="submit" value="Login"/>
                </form>
            </div>
          );
    } else {
        return (
            <div>
                <button name="loggedIn" onClick={this.handleLogout}>Logout</button>
            </div>
        );
    }
  }
}


export default Login;
