import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <Link to="/"><h2>Stonk.io</h2></Link>
      <div>
        <Link to="/stocks"><h3>The Stonks</h3></Link>
        <Link to="/about"><h3>What about the Stonks?</h3></Link>
      </div>
    </header>
  );
}

export default Header