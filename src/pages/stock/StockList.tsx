import PrimaryButton from "../../components/PrimaryButtonLink";
import { mockStockData } from "../../data/mockStockData"; // assume dummy data file
import './StockList.css'


const StockList = () => {
  return (
    <div className="background_body">
      <div className="upper_part">
        <h1>New Agra Footwear</h1>
        <div className="text_container">
          <h2>Stocks</h2>
          <PrimaryButton title="Add +" link="/add-stock" />
        </div>

      </div>
      <div className="lower_part">
        <div className="item_container">
          <div className="card">
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>HSN Code</th>
                  <th>Rate</th>
                  <th>Quantity</th>
                  <th>Date Added</th>
                </tr>
              </thead>
              <tbody>
                {mockStockData.map(stock => (
                  <tr key={stock.id}>
                    <td>{stock.item}</td>
                    <td>{stock.hsnCode}</td>
                    <td>{stock.rate}</td>
                    <td>{stock.quantity}</td>
                    <td>{stock.dateAdded}</td>
                  </tr>
                ))}
                {mockStockData.map(stock => (
                  <tr key={stock.id}>
                    <td>{stock.item}</td>
                    <td>{stock.hsnCode}</td>
                    <td>{stock.rate}</td>
                    <td>{stock.quantity}</td>
                    <td>{stock.dateAdded}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

export default StockList;
