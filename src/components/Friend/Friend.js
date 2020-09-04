import React from 'react';
import {useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;
    const history = useHistory();

    const friendStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }

    const handleClick =(friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }
     
    return (
        <div style={friendStyle}>
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
            {/* <Link to={`/friend/${id}`}>
                <button style={{cursor:'pointer'}}>Show details of {id}</button>
            </Link> */}
            <button onClick={() => handleClick(id)}>Click</button>
        </div>
    );
};

export default Friend;