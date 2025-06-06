import PrimaryButtonLink from '../../components/PrimaryButtonLink';
import './HomePage.css';

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
                    <PrimaryButtonLink title='Stocks' link='/stocks' />
                    <PrimaryButtonLink title='Customers' link='/customers' />
                </div>

                <p>Add</p>
                <div className="link_items">
                    <PrimaryButtonLink title='Add Stock' link='/add-stock' />
                    <PrimaryButtonLink title='Add Customer' link='/add-customer' />
                </div>
            </div>
        </main>
    )
}

export default HomePage