import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <div className="Logo">
                <h1>Balakumaran.dev</h1>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;