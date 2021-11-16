import React, {useState, useContext, useEffect} from "react"
import {StateContext} from "../Contexts"
import {useResource} from "react-request-hook"
import {Link} from "react-navi"
import {Card, Button, Form} from "react-bootstrap"

export default function Todo ( {title, author, description, todoId, short=false} ) {

    const {dispatch} = useContext(StateContext)
	//	get rid of Set methods
    const [completed, setCompleted] = useState(true)
    const [dateCompleted, setDateCompleted] = useState(Date.now())
    const [toggled, toggleTodo] = useResource( () => ( {
        url: `/todos/${encodeURI(todoId)}`,
        method: "patch",
        data: {completed, dateCompleted}
    }))
    useEffect(() => {
		//	get rid of Set method
        setDateCompleted(Date.now);
		//if (deleted && deleted .data && deleted.isLoading === false) ... then dispatch
        dispatch( {type: "TOGGLE_TODO", todoId: todoId, completed: completed, dateCompleted: dateCompleted} )
    }, [toggled])
    //
    const [deleted, deleteTodo] = useResource( () => ( {
        url: `/todos/${encodeURI(todoId)}`,
        method: "delete"
    }))
    // useEffect(() => {
        // if (deleted && deleted.data && deleted.isLoading === false) {
            // dispatch({type: 'DELETE_TODO', todoId: todoId})
        // }
    // }, [deleted])

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
            <Button 
                onClick={e => { 
                    deleteTodo()
                    dispatch( {type: "DELETE_TODO", todoId: todoId} )
                }}>
                Delete Todo</Button>
            <Form.Label>Completed:
                <Form.Check type="checkbox" onClick={e => {setCompleted(!completed); toggleTodo()}}/></Form.Label>
        </Card>
    )
}
            