import React, {useContext} from "react"
import User from "./User"
import {StateContext} from "../Contexts"

export default function UserList ( {users} ) {
    
    const {state} = useContext(StateContext)

    return (
        <div>
            Users
            {users.map((u, i)=><User {...u} />)}
        </div>
    )
}