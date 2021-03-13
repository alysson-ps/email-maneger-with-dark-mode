import React from 'react';
import { GoogleLogin } from 'react-google-login';

class GoogleBtn extends React.Component {
  responseGoogle = (response: any) => {
    console.log(response);
    console.log(response.profileObj);
  };

  render() {
    return (
      <div className="flex-none max-h-50">
        <GoogleLogin
          clientId="997041523200-gn4740urd5jc44d1f2ooh2pk1u9jc2f3.apps.googleusercontent.com"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          buttonText="Login"
          cookiePolicy={'single_host_origin'}
        />
      </div>
    );
  }
}
export default GoogleBtn;
