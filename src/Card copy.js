import React from "react";
import Typography from '@mui/material/Typography';


function Card(props) {
    return (
        <>
            <Typography variant="h3" color="primary.main">
                {props.resumeObject.title}
            </Typography>
                {props.resumeObject.data.map(item => {
                    return (
                        <div>
                            <Typography variant="body2" color="primary.text">
                                {item}
                            </Typography>
                            <br />
                        </div>
                    )
                })}
        </>
    );
}

export default Card;