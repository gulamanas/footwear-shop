import './Navigation.css';

const Navigation = () => {
    return (
        <nav className="navbar">
            <div className='burger_icon'>
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <div className="brand_name">
                <p>New Agra Footwear.</p>
            </div>
        </nav>
    )
}

export default Navigation