import React from "react"
import ReactDOM from "react-dom"
import MyTodoApp from "./MyTodoApp"
import {RequestProvider} from "react-request-hook"
import axios from "axios"

const axiosInstance = axios.create({
    baseURL: "/"
})

ReactDOM.render(
    <React.StrictMode>
    <RequestProvider value={axiosInstance}>
        <MyTodoApp/>
    </RequestProvider>
    </React.StrictMode>,
    document.getElementById("root")
);