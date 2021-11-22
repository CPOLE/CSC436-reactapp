function userReducer (state, action) {
    switch (action.type) {
        case "LOGIN":
        case "REGISTER":
            return {
            "username": action.username,
            "access_token": action.access_token
            }
        case "LOGOUT":
            return {
            "username": undefined,
            "access_token": undefined
        }
        default:
            return state;
    }
}

function todoReducer (state, action) {
    switch (action.type) {
        case "CREATE_TODO":
            const newTodo = {
                id: action.id,
                title: action.title,
                author: action.author,
                description: action.description,
                completed: false,
                dateCompleted: undefined
            }
            return [newTodo, ...state]   
        case "TOGGLE_TODO":
            return state.map( (t) => {
                if (t.id === action.todoId) {
                    t.completed = action.completed;
                    t.dateCompleted = action.dateCompleted;
                }
                return t;
            })
        case "DELETE_TODO":
<<<<<<< HEAD
			// return state.filter((t) => t.id !== action.todoId)
            return state.filter( (t) => t.id !== action.todoId)
=======
            return state.filter((t) => t.id !== action.todoId)
>>>>>>> 7043439007b24d204976d949ecd07c990a723f89
        case "FETCH_TODOS":
            return action.todos
        default:
            return state;
    }
}

export default function appReducer (state, action) {
    return {
        user: userReducer(state.user, action),
        todos: todoReducer(state.todos, action)
    }
}