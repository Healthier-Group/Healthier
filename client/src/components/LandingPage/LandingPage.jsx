import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div>
            <h1>Testing LandingPage</h1>
            <br/>
            <Link to="/createUser"> createUser </Link>
            <br/>
            <Link to="/updateUser/1"> updateUser </Link>
            <br/>
            <Link to="/userList"> userList </Link>
            <br/>
            <Link to="/userUpdate"> userUpdate </Link>
            <br/>
        </div>
    )
};