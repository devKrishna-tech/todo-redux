import React, { useState } from 'react'
import './input.css'

import {useDispatch} from 'react-redux'
import {saveTodo} from '../features/todoSlice'

const Input = () => {
    const [input, setInput] = useState('')
    const dis = useDispatch()


    const addTodo = () =>{

        // console.log(`Todo ${input}`)

        dis(saveTodo({
            item: input,
            done: false,
            id: Date.now()
        }))
    }


    return (
        <div className='input'>
            <input type="text" value={input} onChange={event => setInput(event.target.value)}/>
            <button onClick={addTodo}>Add!</button>
        </div>
    )
}

export default Input
