import {Link} from "react-router-dom";

export default function Navbar(props){
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand mx-2" href="/">{props.header}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/card">Card</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                
                </ul>
            </div>
            <form class="form-inline d-flex">
                    <input className="form-control mr-3" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0 mx-2" type="submit">Search</button>
            </form>
        </nav>
    );
}