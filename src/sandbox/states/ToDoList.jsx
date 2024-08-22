import { CheckBox } from "@mui/icons-material";
import { Button, TextField, List, ListItem, ListItemText, Checkbox } from "@mui/material";
import React, { useState } from "react";

export default function Todolist() {
    const [myList, setMyList] = useState([]);
    const [addTxt, setAddTxt] = useState("");

    const generateId = () => {
        return new Date().getTime().toString();
    }

    const handleRemoveItem = (id) => {
        setMyList((p) => p.filter((item) => item.id !== id));
    }

    const handleCheckChange = (id, checked) => {
        setMyList((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, checked: checked } : item
            )
        );
    };

    return (
        <div style={{ margin: "20px" }}>
            <TextField
                sx={{ mt: 5, width: "100%" }}
                label="Add a new task"
                value={addTxt}
                onChange={(e) => setAddTxt(e.target.value)}
                variant="outlined"
            />
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "20px",
                }}
            >
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => {
                        setMyList((prev) => [...prev, { text: addTxt, id: generateId(), checked: false }]);
                        setAddTxt("");
                    }}
                >
                    Add
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => setMyList([])}
                >
                    Clear
                </Button>
            </div>
            <List sx={{ mt: 3 }}>
                {myList.map((item) => (
                    <ListItem key={item.id}>
                        <Checkbox checked={item.checked} onChange={(e) => handleCheckChange(item.id, e.target.checked)} />
                        <ListItemText sx={{ textDecoration: item.checked ? "line-through" : "none" }} primary={item.text} /><Button onClick={() => { handleRemoveItem(item.id) }}>Remove</Button>
                    </ListItem>
                ))}
            </List>
        </div >
    );
}
