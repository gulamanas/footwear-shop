import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/stocks">Stocks</Link>
            <Link to="/customers">Customer</Link>
        </div>
    )
}

export default HomePage