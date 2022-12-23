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
                <p>Thank You for your submission!</p>
                <a href="/">
                <button>Submit Another Post</button>
                </a>
            </div>
        
    )
}