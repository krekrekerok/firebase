import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mainContext } from '../context/MainContext';

const List = () => {
    const {getTodos, todos, deleteTask} = useContext(mainContext)
    console.log(todos);
    useEffect(()=>{
        getTodos()
    },[])

    return (
        <div>
            {
                todos ? (
                    <ul>
                        {todos.map(item => (
                            <li key = {item.todo.id}>
                                {item.todo.title} 
                                <button onClick ={ () => deleteTask(item.docId)}> del</button>
                                <Link to = {`/update/${item.docId}`}>
                                    <button>Edit</button>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <h2>No todos.</h2>
                )
            }
        </div>
    );
};

export default List;