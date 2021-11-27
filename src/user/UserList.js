import React, {useContext} from "react"
import User from "./User"
import {StateContext} from "../Contexts"

export default function TodoList () {
    
    const {state} = useContext(StateContext)
    const {users} = state

    return (
        <div>
            Users
            {users.map((u, i)=><User {...u} />)}
        </div>
    )
}