import React, {useState, useReducer, useEffect} from "react"
import appReducer from "./Reducers"
import {StateContext} from "./Contexts"
import HeaderBar from "./pages/HeaderBar"
import HomePage from "./pages/HomePage"
import CreateTodo from "./todo/CreateTodo"
import {Router, View} from "react-navi"
import {mount, route} from "navi"
import TodoPage from "./pages/TodoPage"
import {Container, Row, Col} from "react-bootstrap"

function MyTodoApp () {

    const [state, dispatch] = useReducer(appReducer, { user: {}, todos: [] } )
    const {user} = state

    const routes = mount ({
        "/": route( {view: <HomePage/>} ),
        "/todo/create": route( {view: <CreateTodo/>} ),
        "/todo/:id": route(req => {
            return {view: <TodoPage id={req.params.id}/>}
        }),
    })

    return (
		<div>
			<StateContext.Provider value={ {state: state, dispatch: dispatch} }>
                <Router routes={routes}>
                    <Container fluid>
                        <HeaderBar/>
                        <View/>
                    </Container>
                </Router> 
			</StateContext.Provider>
		</div>
    )
}

export default MyTodoApp;
