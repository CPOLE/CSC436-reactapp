import React, {useContext} from "react"
import UserBar from "../user/UserBar"
import CreateTodo from "../todo/CreateTodo"
import Header from "../Header"
import {StateContext} from "../Contexts"
import {Link} from "react-navi"
import {Navbar, Nav, Container} from "react-bootstrap"

export default function HeaderBar () {

    const{state} = useContext(StateContext)
    const{user} = state
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/"><Header text="My Todos" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                {user.username && <Nav.Link><Link href="/todo/create">Create New Todo0o</Link></Nav.Link>}</Nav>
            <React.Suspense fallback={"Loading..."}>
            <UserBar /></React.Suspense>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}