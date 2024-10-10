import banImg from '../images/banner.jpg';
import '../styles/Banner.css';
import Login from './Login';
import Logout from './Logout';
let user = null;
const Banner = () =>{

    return(
    <>  
        
        <div className = 'nav' >
            <PageLink page = 'Home' />
            <PageLink page = 'Gallery' />
            <PageLink page = 'About' />
            <PageLink page = 'Schedule a Free Extimate' />
            <PageLink page = 'Contact' />
        </div>
        <div className='row2'>
            <img className = 'banner' src = {banImg} alt = "Banner"/>
            <User/>
        </div>
    </>
    );

}


const PageLink = (props) =>{

    return(
        <>
        <h3 onClick={() => console.log("pressed" + props.page)}>{props.page}</h3>
        </>
    );
}

const User = (props) =>{

    return(
        <>
        <div className='userBox'>
            <Login/>
            <Logout/>
            <p onClick={() => console.log("pressed log in")}>{user === null ? 'Log In' : user}</p>
        </div>
        </>
    );
}

export default Banner;