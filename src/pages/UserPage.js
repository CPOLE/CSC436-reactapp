import React, {useEffect, useContext} from "react"
import {useResource} from "react-request-hook"
import User from "../user/User"
import {Link} from "react-navi"

export default function UserPage () {

    const [users, getUsers] = useResource( () => ({
        url: "auth/register",
        //headers: {"Authorization": `${state.user.access_token}`},
        method: "get"
    }))
	
    useEffect(getUsers, [])

    return (
        <div>
            { (users && users.data)
                ? <UserPage {...users.username}/>
                : "Loading..."
            }
            <div><Link href="/">Go back</Link></div>
        </div>
    )
}