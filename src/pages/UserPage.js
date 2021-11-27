import React, {useEffect, useContext} from "react"
import User from "../user/User"
import {useResource} from "react-request-hook"
import {Link} from "react-navi"
import UserList from "../user/UserList"

export default function UserPage () {

    const [users, getUsers] = useResource( () => ({
        url: "auth/register",
        //headers: {"Authorization": `${state.user.access_token}`},
        method: "get"
    }))
	
    useEffect(getUsers, [])

    useEffect( () => {
        if (users && users.isLoading === false && users.data) {
            dispatch( {type: "FETCH_USERS", users: users.data.users } )
        }
    }, [users])

    const {data, isLoading} = users;

    return (
        <div>
            {isLoading && "Users loading..."} <UserList/>
            <div><Link href="/">Go back</Link></div>
        </div>
    )
}