import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

export default function Api() {
    const responseGoogle = (response) => {
      console.log(response.profileObj);
    }
    const responseFacebook = (response) => {
        console.log(response);
      }
    return (<div>
        <GoogleLogin
    clientId="670265266717-6hlonemkuurhuh9lu9hg88pgbnambeae.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
  <FacebookLogin
    appId="1088597931155576"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook} /></div>
    )
}



