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
        .then(res => { window.location = '/home' })
    };
    // const deleteItem = (id) => {
    //     axios.delete(`/api/covid/${id}`)
    //     .then(res => { window.location = '/covidsList' })
    // };

return (
            <div>
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
                            data.map(exercise => 
                                <tr key={exercise._id}>
                                    <td>{exercise.username}</td>
                                    <td>{exercise.description}</td>
                                    <td>{exercise.duration}</td>
                                    <td>{exercise.date}</td>
                                    <button onClick={() => deleteItem(exercise._id)}>Delete Exercises</button>
                                </tr>
                                
                            )
                        }
                        
                    </tbody>
                </table>
            </div>
    )
}
