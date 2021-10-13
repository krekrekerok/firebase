import React, { useContext, useEffect } from 'react';
import { mainContext } from '../context/MainContext';

const List = () => {
    const {getTodos, todos} = useContext(mainContext)

    useEffect(()=>{
        getTodos()
    },[])

    return (
        <div>
            {
                todos ? (
                    <ul>
                        {todos.map(item => (
                            <li key = {item.todo.id}>{item.todo.title}</li>
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