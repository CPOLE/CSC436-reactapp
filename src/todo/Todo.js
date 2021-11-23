import React, {useState, useContext, useEffect} from "react"
import {StateContext} from "../Contexts"
import {useResource} from "react-request-hook"
import {Link} from "react-navi"
import {Card, Button, Form} from "react-bootstrap"

function Todo ( {title, description, author, todoId, completed, dateCompleted, short=false} ) {

    const {dispatch} = useContext(StateContext)

    const [toggled, toggleTodo] = useResource( (todoId, completed) => ( {
        url: `/todo/${todoId}`,
        method: "patch",
        data: {completed: completed, dateCompleted: Date.now()}
    }))

	const [deleted, deleteTodo] = useResource( (todoId) => ( {
        url: `/todo/${todoId}`,
        method: "delete"
    }))
	
	useEffect(() => {
        if (toggled && toggled.data && toggled.isLoading === false) {
			dispatch( {type: "TOGGLE_TODO", todoId: todoId, completed: toggled.data.completed, dateCompleted: toggled.data.dateCompleted} )
		}
	}, [toggled])
    
	
    useEffect(() => {
        if (deleted && deleted.data && deleted.isLoading === false) {
            dispatch({type: 'DELETE_TODO', todoId: todoId})
        }
    }, [deleted])

    let processedDescription = description
    if (short) {
        if (description.length > 30) {
            processedDescription = description.substring(0, 30) + "..."
        }
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <Link href={`/todo/${todoId}`}>{title}</Link></Card.Title>
                <Card.Subtitle>
                    Date Created: {new Date().toDateString()}
                    {!completed && <div>Date Completed: {new Date(dateCompleted).toDateString()}</div>}
                </Card.Subtitle>
                <Card.Text>
                    {processedDescription}</Card.Text>
                    {short && <Link href={`/todo/${todoId}`}>View full todo</Link>}
            </Card.Body>
            <Button onClick={e=>{deleteTodo(todoId)}}>Delete Todo</Button>
            <Form.Label>Completed:
                <Form.Check type="checkbox" onClick={e=>{toggleTodo(todoId, e.target.checked)}}/></Form.Label>
        </Card>
    )
}

export default React.memo(Todo);