import React from 'react';
import { Button } from "@mui/material"
import { loading } from "../api"
import logo from '../images/logo.png'
import { useNavigate } from 'react-router-dom';

function Loading() {
    const navigate = useNavigate();


    const loadingXL = async () => {
        const data = await loading()

        localStorage.setItem("data", JSON.stringify(data))
        navigate("/table")

    }

    return (
        <div>
            <div style={{ alignItems: "center" }}>
                <Button variant="contained" disableElevation onClick={loadingXL} style={{ height: "80px", width: "20%", marginTop: "250px", marginBottom: "150px", backgroundColor: "#b28704", fontSize: "2.5rem" }}>
                    טעינת אקסל
                </Button>
                <div >
                    <img src={logo} style={{ height: "20%", width: "20%" }} />
                </div>
            </div>
        </div>
    )
}

export default Loading;