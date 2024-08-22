import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
export default function MyFormExample() {
    const [data, setData] = useState({ firstName: "", lastName: "", phone: "", email: "", adress: "" })

    const handleChange = (e) => {
        let nameTarget = e.target.name;
        setData((prev) => ({ ...prev, [nameTarget]: e.target.value }))
    }

    console.log(data);
    return (
        <div>
            <Container sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <TextField label="First Name" name="firstName" vairant="outlined" value={data.firstName} onChange={handleChange} />
                <TextField label="Last Name" name="lastName" vairant="outlined" value={data.lastName} onChange={handleChange} />
                <TextField label="Phone" name="phone" vairant="outlined" value={data.phone} onChange={handleChange} />
                <TextField label="Email" name="email" vairant="outlined" value={data.email} onChange={handleChange} />
                <TextField label="Adress" name="adress" vairant="outlined" value={data.adress} onChange={handleChange} />
                <Button variant="contained">Send</Button>
            </Container>
        </div>
    );
}