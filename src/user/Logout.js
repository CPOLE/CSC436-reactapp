import React, {useContext} from "react"
import {StateContext} from "../Contexts"

export default function Logout () {

    const {state, dispatch} = useContext(StateContext)
    const {user} = state

    return (
        <form onSubmit={e=>{e.preventDefault(); dispatch({type: "LOGOUT"})}}>
            <p><b>Logged in as:</b> {user.username}</p>
            <input type="submit" value="Logout" />
        </form>
    )
 }