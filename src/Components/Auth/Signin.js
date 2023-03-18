import React, {useState} from "react";
import ParticlesBackground from "../ParticlesBackground";
import "./Signin.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import Navbar from "../Navbar/Navbar";

function Signin() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        userId: "",
        password:""
    })

    const handleForm = (e) => {
        const {name, value} = e.target;
        setForm(prev =>  {
            return({
                ...prev, [name]: value
            })
        })
    }

    const handleSubmitForm = () => {
        axios.post('/login', form)
            .then(response => {
                if(response.data.success) {
                    navigate('/dashboard', {state: form.userId})
                }
            })
    }
    return (
        <React.Fragment>
            <Navbar />
            <div className="signInForm">
                <div className="form">
                    <h1>SignIn Here! </h1>
                    <div class="form-group">
                        <input type="text" onChange={handleForm} name="userId" value={form.userId} class="form-control" placeholder="Enter your ID" />
                    </div>
                    <div class="form-group">
                        <input type="password" onChange={handleForm} name="password" value={form.password} class="form-control" placeholder="Enter your Password" />
                    </div>
                    <div style={{textAlign: "center"}}>
                        <button type="submit" onClick={handleSubmitForm} class="btn btn-outline-success">Submit</button>
                    </div>
                </div>
            </div>
            <ParticlesBackground />
        </React.Fragment>
    )
}

export default Signin;