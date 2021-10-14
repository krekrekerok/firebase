import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Navbar from '../components/Navbar';
import { mainContext } from '../context/MainContext';

const Update = () => {
    const {getOneTodo, oneTodo,saveEditedTodo} = useContext(mainContext)
    const params = useParams()
    const [todoEdit, setTodoEdit] = useState(oneTodo)
    const history = useHistory()
    console.log(params);
    useEffect(()=>{
        setTodoEdit(oneTodo)
    }, [oneTodo])
    useEffect(()=>{
        getOneTodo(params.docId)
    }, [])

    function handleChange(e) {
        let obj = {
            ...todoEdit,
            todo: {
                ...todoEdit.todo,
                title: e.target.value
            }
        }
        setTodoEdit(obj)
    }

    function handleClick () {
        saveEditedTodo(todoEdit, params.docId)
        history.push("/")
    }
    return (
        <div>
            <Navbar/>
            <div>
                {
                    todoEdit ? (
                        <>
                            <input type = "text" value = {todoEdit.todo.title} onChange = {handleChange} />
                            <button onClick = {handleClick} >Save</button>
                        </>
                    ) : (
                        null
                    )
                }
            </div>
        </div>
    );
};

export default Update;