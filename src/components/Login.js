import React,{ Component } from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
export class Login extends Component {
    state={
        redirect :false
    }
    responseGoogle = (response) => {
        console.log(JSON.stringify(response));
        
        let defaultOptions = {
        url:'',
        method:'POST',
        // mode: 'cors',
        headers:{
        'content-type': 'application/json',
        'accept': 'application/json'
        },
        body:JSON.stringify(response),
        };
    
        fetch("https://sih2020backend.herokuapp.com/users/login", defaultOptions).then((res)=>{
            return res.json();
            // this.props.history.push('/dashboard'); 
            
        }).then(json => {
            console.log(json);
            localStorage.setItem('token', json.token);
            this.setState({redirect:true});
        })

        // fetch('https://sih2020backend.herokuapp.com/oauth/callback').then(function(res){
        //     console.log(res);
        // })

        // axios.get('https://sih2020backend.herokuapp.com/oauth/callback')
        //     .then(res => console.log(res.data))
      }
      render(){
        if(this.state.redirect){
            return (<Redirect to="/dashboard" />)
        }
        else{
            return (
                <div>
                    <h1>Google Login</h1>
                    <GoogleLogin
                        clientId="55656516516-1e0kg6fm6vsbu16f3ib37tv4svehtbaf.apps.googleusercontent.com"
                        buttonText="Login"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        uxMode = 'popup'
                        // redirectUri="http://localhost:3000/dashboard"
                        cookiePolicy={'single_host_origin'}
                    />
                    {/* if (isSignedIn) {
                        <Redirect to="/dashboard" /> 
                    }                */}
                </div>
            )
        }
    
      }
}

export default Login;