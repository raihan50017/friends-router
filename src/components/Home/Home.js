import React, { useState, useEffect } from 'react';
import Friend from '../Friend/Friend';

const Home = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data))
  },[])
    return (
        <div>
            <div>
                <h1>Friends: {friends.length}</h1>
                {
                    friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Home;