import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box, IconButton, CardActions } from "@mui/material";
import { useCurrentUser } from "../../../users/porviders/UserProvider";


export default function CardActionBar({ handleLike, handleDelete, handleEdit, cardId }) {
    const userData = useCurrentUser();
    const [liked, setLiked] = useState(false)


    return (
        <CardActions sx={{ justifyContent: "space-between" }}>
            <Box>
                <IconButton onClick={() => { handleDelete(cardId) }}>
                    <DeleteIcon />
                </IconButton>
                <IconButton onClick={() => { handleEdit(cardId) }}>
                    <ModeEditIcon />
                </IconButton>
            </Box>
            <Box>
                <IconButton>
                    <CallIcon />
                </IconButton>
                <IconButton onClick={() => { handleLike(cardId); setLiked((p) => !p) }}>
                    <FavoriteIcon sx={{ color: liked ? 'red' : 'gray' }} />
                </IconButton>
            </Box>
        </CardActions>
    )
}
