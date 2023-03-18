import React from 'react';
import './Navbar.css';
import {useNavigate} from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate("/signin");
    }
    return (
        <React.Fragment>
            <nav class="navbar topbar content navbar-expand-lg">
                <a class="navbar-brand brand" href="#">EduTech</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-solid fa-bars-staggered"></i>
                </button>

                <div class="collapse navbar-collapse brandItems" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active brandItem">
                            Courses
                            <i class="fa-solid fa-angle-down"></i>
                        </li>
                        <li class="nav-item brandItem">
                            Courses for kids
                            <i class="fa-solid fa-angle-down"></i>
                        </li>
                        <li class="nav-item brandItem">
                            Free Material
                            <i class="fa-solid fa-angle-down"></i>
                        </li>

                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        <li class="nav-item">
                            <button className='btn btn-outline-primary' onClick={handleSignIn}>
                                SignIn
                                <i class="fa-solid fa-arrow-right" style={{ marginLeft: "10px" }}></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;