import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditExercise(){
    const [data,setData] = useState({})
    const [users, setUsers] = useState([])
    let editHandler = () =>{
        axios.put('http://localhost:3001/api/exercises/',data)
        
        window.location ='/edit'
    }
    useEffect(()=> {
        axios.get('http://localhost:3001/api/users/')
        .then(res => {
            console.log(res.data)
            setUsers(res.data)
        })
    },[])

    
        return (
            
            <div>
                <h3>Edit Exercise Log</h3>
                <form>
                    <div className="form-group">
                        <label>Username: </label>
                        <select 
                            name='username'
                            className="form-control"
                            value={data.username}
                            onChange={e => setData({...data,[e.target.name]: e.target.value})}
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
                            value={data.description}
                            onChange={e => setData({...data,[e.target.name]: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label>Duration (in minutes): </label>
                        <input
                            type="text"
                            className="form-control"
                            value={data.duration}
                            name='duration'
                            onChange={e => setData({...data,[e.target.name]: e.target.value})}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date: </label>
                        <div>
                            <input
                                type='date'
                                name='date'
                                onChange={e => setData({...data,'date': e.target.value})}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <button onClick={e => {
                            e.preventDefault();
                            editHandler();
                        }} className="btn btn-primary">Edit Exercise Log</button>
                    </div>
                </form>
            </div>
        )
    }
