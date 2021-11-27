import React, {useState, useContext} from "react"
import Register from "./Register"
import Login from "./Login"
import {StateContext} from "../Contexts"
import {Button} from "react-bootstrap"

export default function Userbar () {

    const Logout = React.lazy( ()=> import("./Logout"))
    const {state} = useContext(StateContext)
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

    if (state.user.username && !state.loginFailed) {
        return <Logout/>
    } else {
        return (
        <div className="justify-content-end">
            <Button variant="link" href="/users">
                Users</Button>
            <Button variant="link" onClick={(e) => setShowLogin(true)}>
                Login</Button>
            <Login show={showLogin} handleClose={() => setShowLogin(false)}/>                
            <Button variant="link" onClick={(e) => setShowRegister(true)}>
                Register</Button>
            <Register show={showRegister} handleClose={() => setShowRegister(false)}/>
        </div>
        )
    }
}