
import '../styles/Block.css';


const Block = (props) =>{

    return(
    <>
    <div className={props.color}>
    <div className= {props.align}>
    <div className={props.height}>
    
        <div className={`content`}>
        {props.flip?
        <>
            <div className='side'>
                <h1>{props.title}</h1>
                <h2>{props.text}</h2>     
            </div>
            {props.images !== undefined ? props.images.map((image) => (<img src = {image} alt = 'Not loaded' />)) : <p></p>}
            </> : <>
            {props.images !== undefined ? props.images.map((image) => (<img src = {image} alt = 'Not loaded' />)) : <p></p>}
            <div className='side'>
                <h1>{props.title}</h1>
                <h2>{props.text}</h2>
            </div> </>}
        </div>

    </div>
    </div>
    </div>  
    </>
    );

}


export default Block;