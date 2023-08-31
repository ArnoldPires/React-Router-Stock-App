import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import './stock.css'

function Stock({ stocks }) {
  const params = useParams();
  const symbol = params.symbol;
  const stock = stocks.find((stock) => stock.symbol === symbol) || {};
  useEffect(() => {}, []);

  return (
    <div className="stock-container">
      <h2 className="stock-title">{stock.name}</h2>
      <div className="stock-details">
        <div className="detail">
          <span className="label">Symbol</span>
          <span className="value">{stock.symbol}</span>
        </div>
        <div className="detail">
          <span className="label">Change</span>
          <span className="value">{stock.change.toFixed(2)}</span>
        </div>
         <div className="detail">
          <span className="label">Last Price</span>
          <span className="value">{stock.lastPrice}</span>
        </div>
         <div className="detail">
          <span className="label">Open</span>
          <span className="value">{stock.open}</span>
        </div>
        <div className="detail">
          <span className="label">High</span>
          <span className="value">{stock.high}</span>
        </div>
        <div className="detail">
          <span className="label">Low</span>
          <span className="value">{stock.low}</span>
        </div>
        <div className="detail back">
          <Link to="/stocks"><h3>Back to Stonk</h3></Link>
        </div>
      </div>
    </div>
  );
}

export default Stock;