import { Link } from "react-router-dom";
import '../pages/stock.css';

export default function Dashboard({ stocks }) {
   return (
    <div className="stock-container">
      <h3 className="stock-title">Stonk Dashboard</h3>
      <div className="stock-details">
        {stocks.map((stock, index) => (
          <div className="detail" key={index}>
            <Link to={`/stocks/${stock.symbol}`} className="stockName">
              {stock.name}
            </Link>
            <div className="lastPrice">${stock.lastPrice}</div>
            <div className="value" style={{ color: stock.change < 0 ? 'red' : 'green' }}>
              {stock.change}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
