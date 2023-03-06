import background from "./CVHS.png";
export default function Thank(){
    return (

            <div style={{
              backgroundImage: "radial-gradient( "  + "AliceBlue" + ", " + "rgb(55, 100, 160)"  + ")",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',}}>
              <div>
                <span style={{color: 'rgb(29, 29, 29)', fontFamily: "Open Sans", fontStyle: "italic", fontSize: "5vh", position:"absolute", top: "20vh", left:"30vw"}}>Thank You for your Submission!</span>
                </div>
                <div>
                <a href="/">
                <button>Submit Another Post</button>
                </a>
                </div>
                </div>
        
    )
}