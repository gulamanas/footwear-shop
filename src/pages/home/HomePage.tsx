import './HomePage.css';
import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <main className='main'>
            <div className="header">
                <h1>Agra Footwear</h1>
                <div className="sub_header">
                    <p>Address</p>
                    <p>GST NO</p>
                </div>
            </div>
            <div className="content">
                <p>LISTS</p>
                <div className="link_items">
                    <Link to="/stocks">Stocks</Link>
                    <Link to="/customers">Customers</Link>
                </div>

                <p>Add</p>
                <div className="link_items">
                    <Link to="/add-stock">Add Stock</Link>
                    <Link to="/add-customer">Add Customer</Link>
                </div>
            </div>
        </main>
    )
}

export default HomePage