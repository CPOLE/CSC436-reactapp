import React, {useState, useContext, useEffect} from "react"
import { StateContext } from "../Contexts"
import { useResource } from "react-request-hook"
import { useNavigation } from "react-navi"

export default function CreateTodo () {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const navigation = useNavigation()
    const {state, dispatch} = useContext(StateContext)
    const {user} = state
    const [todo, createTodo] = useResource(( {title, description, author} ) => ({
        url: '/todo',
        method: 'post',
        headers: {"Authorization": `${state.user.access_token}`},
        data: {title, description, author}
    }))

    function handleTitle(evt) { setTitle(evt.target.value) }
    function handleDescription(evt) { setDescription(evt.target.value) }
    function handleCreate() {
        createTodo( {title, description, author: user.username} )
    }

    useEffect( () => {
        if (todo && todo.data) {
            dispatch( {type: "CREATE_TODO", title: todo.data.title, description: todo.data.description, author: user.username, id: todo.data.id} )
            console.log(todo.data)
            navigation.navigate(`/todo/${todo.data.id}`)
        }
    }, [todo])

    return (
        <form onSubmit={e=>{ e.preventDefault(); handleCreate() } }>
            <h3>Create Todo: </h3>
            <div><b>Author:</b> {user.username}</div>
            <div>
                <label htmlFor="create-todo-title"><b>Title:</b> </label>
                <input type="text" name="create-todo-title" id="create-todo-title" value={title} onChange={handleTitle} />
            </div>
            <div>
                <label htmlFor="create-todo-description"><b>Description:</b> </label>
                <textarea name="create-todo-description" id="create-todo-description" value={description} onChange={handleDescription} />
            </div>
            <input type="submit" value="Create"/>
        </form>   
    )
 }