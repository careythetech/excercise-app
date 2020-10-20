import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CreateExercise(){
    const [exercise, setExercise] = useState({
        username: "",
        description: "",
        duration: "",
        date: ""
    })
    const [users, setUsers] = useState([])

    useEffect(()=> {
        axios.get('http://localhost:3001/api/users/')
        .then(res => {
            console.log(res.data)
            setUsers(res.data)
        })
    },[])


const handleChange = e => {
    setExercise({...exercise, [e.target.name]: e.target.value})
}

const handleSubmit = e => {
    e.preventDefault();
    console.log(exercise);
    axios.post("/api/exercises/add", exercise)
    .then(res => console.log(res.data))
    .catch(err => {
        console.log(err)
    })
    window.location ="/"
}
    
        return (
            
            <div>
                <h3>Create Exercise For Today</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group" >
                        <label>Username: </label>
                        <select 
                            type = 'text'
                            className="form-control"
                            value={exercise.username}
                            onChange={handleChange}
                            name="username"
                        >
                            <option value=''>choose user</option>
                            {
                                users.map(user=>
                                    <option
                                        key={user}
                                        value={user.username}
                                    >
                                            {user.username}
                                    </option>
                                )
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description: </label>
                        <input type="text"
                            required
                            name= 'description'
                            className="form-control"
                            value={exercise.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={exercise.duration}
                            name='duration'
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date:</label>
                        <div>
                            <input
                                type='date'
                                name='date'
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary ">
                        Post Exercise
                        </button>
                    </div>
                </form>
            </div>
        )
    }
