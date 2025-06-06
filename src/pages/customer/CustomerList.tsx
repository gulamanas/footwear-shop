import PrimaryButtonLink from "../../components/PrimaryButtonLink"
import { mockCustomerData } from "../../data/mockCustomerData"

const CustomerList = () => {
  return (
    <div className="background_body">
      <div className="upper_part">
        <h1>New Agra Footwear</h1>
        <div className="text_container">
          <h2>Stocks</h2>
          <PrimaryButtonLink title="Add +" link="/add-customer" />
        </div>

      </div>
      <div className="lower_part">
        <div className="item_container">
          <div className="table_container">
            <table>
              <thead>
                <tr>
                  <th>Customer Name</th>
                  <th>Address</th>
                  <th>Phone Number</th>
                  <th>GST</th>
                  <th>Invoice No</th>
                  <th>Date</th>
                  <th>Sale Type</th>
                </tr>
              </thead>
              <tbody>
                {mockCustomerData.map(customer => (
                  <tr key={customer.id}>
                    <td>{customer.customerName}</td>
                    <td>{customer.address}</td>
                    <td>{customer.phoneNumber}</td>
                    <td>{customer.gstin}</td>
                    <td>{customer.invoiceNo}</td>
                    <td>{customer.date}</td>
                    <td>{customer.saleType}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerList