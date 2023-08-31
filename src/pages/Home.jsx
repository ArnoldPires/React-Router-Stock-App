import './home.css'
import { Link } from "react-router-dom";

function Home() {  
  return (
    <div className="Home">
      <h1>The Stonk Markeet</h1>
      <img src="https://compote.slate.com/images/926e5009-c10a-48fe-b90e-fa0760f82fcd.png?crop=680%2C453%2Cx0%2Cy0" alt="StonkGuy"/>
      <p>Click here to feel the Stonks!</p>
      <button><Link to="/stocks"><h3>The Stonks</h3></Link></button>
    </div>
  );
}

export default Home