import React, {useState, useContext, useEffect} from "react"
import {StateContext} from "../Contexts"
import {Link} from "react-navi"
import {Card, Button, Form} from "react-bootstrap"

function User () {

    //<Link href={`/users/${author}`}>{author}</Link>

    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    User xyz
                </Card.Title>
            </Card.Body>
        </Card>
    )
}

export default React.memo(User);