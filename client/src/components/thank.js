import background from "./CVHS.png";
export default function Thank(){
    return (

            <div style={{
              backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',}}>
                <p><span style={{color: 'blue', fontFamily: "Chilanka", fontStyle: "italic", fontSize: 30}}>Thank You for your Submission!</span></p>
                <a href="/">
                <button>Submit Another Post</button>
                </a>
            </div>
        
    )
}