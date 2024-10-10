import { GoogleLogout } from 'react-google-login';

const clientid = '866697106535-ut31o87frsde1ns61ov3i86651shjno1.apps.googleusercontent.com';


function Logout(){
    const onSuccess = () => {
        console.log("Logout Success!");
    }

    return(
    <>
    <div id = "signOutButton">
        <GoogleLogout
            clientId={clientid}
            buttonText="Logout"
            onLogoutSuccess={onSuccess}
        />


    </div>
    
    </>

    );
}

export default Logout;