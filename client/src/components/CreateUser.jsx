import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CreateUser() {
    const [users, setUsers] = useState({
        username: " ",
    });

    useEffect(()=> {
        axios.get('/api/users/')
        .then(res => {
            console.log(res.data)
            setUsers(res.data)
        })
    },[])

    const handleChange = e => {
        setUsers({...users, [e.target.name]: e.target.value})
    }
    const handleSubmit = e => {
        e.preventDefault();
        console.log(users);
        axios.post("/api/users/add", users)
        .then(res => console.log(res.data))
        .catch(err => {
            console.log(err)
        })
        window.location ="/"
    }
    return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Username:</label>
                    <input
                        type = 'text'
                        className="form-control"
                        value={users.username}
                        onChange={handleChange}
                        name='username'
                    />
                </div>
                <div className="form-group">
                    <button type='submit' className="btn btn-primary ">
                        Create User
                    </button>
                </div>
            </form>
        </div>
    )
}
