import { GoogleLogin } from 'react-google-login';

const clientid = '866697106535-ut31o87frsde1ns61ov3i86651shjno1.apps.googleusercontent.com';


function Login(){
    const onSuccess = (res) => {
        console.log("Login Success! Current user: ",res.profileObj);
    }
    const onFailure = (res) => {
        console.log("Login Failed! res: ",res);
    }
    return(
    <>
    <div id = "signInButton">
        <GoogleLogin
            clientId={clientid}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}


        />


    </div>
    
    </>

    );
}

export default Login;