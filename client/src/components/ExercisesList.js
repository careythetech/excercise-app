import React,{ useState, useEffect } from 'react';
import axios from 'axios';

export default function ExercisesList() {
    let [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/exercises/')
        .then(res => {setData(res.data)})
        .catch(error => console.log(error))
    },[]);

    const deleteItem = (id) => {
        axios.delete(`/api/exercises/${id}`)
        .then(res => { window.location = '/' })
    };

return (
            <div className="tbody">
                <h3>Welcome</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username </th>
                            <th>Description </th>
                            <th>Duration </th>
                            <th>Date</th>
                            <th>Actions</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.exercises.map(exercise => 
                                <tr key={exercises._id}>
                                    <td>{exercises.username}</td>
                                    <td>{exercises.description}</td>
                                    <td>{exercises.duration}</td>
                                    <td>{exercises.date}</td>
                                    <button className="btn1" onClick={() => deleteItem(exercises._id)}>Delete Exercises</button>
                                </tr>
                                
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
    )
}
