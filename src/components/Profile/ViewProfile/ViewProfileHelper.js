
export function viewProfileGet(userName) {

    return fetch('http://localhost:3001/viewprofile/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            userName: userName
        })
    })
        .then(response => response.json())

}


export function connectionStatusGet(fromuser, touser) {
    return fetch('http://localhost:3001/connectionstatus/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            fromuser: fromuser,
            touser: touser
        })
    })
        .then(response => response.json())
}


export function formConnection(fromuser, touser) {
    return fetch('http://localhost:3001/addconnection/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            fromuser: fromuser,
            touser: touser,
            type: "friend"
        })
    })
        .then(response => response.json())
}



export function deleteConnection(fromuser, touser) {
    return fetch('http://localhost:3001/deleteconnection/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            fromuser: fromuser,
            touser: touser
        })
    })
        .then(response => response.json())
}



export function changeConnectionType(fromuser, touser, typeconn) {
    return fetch('http://localhost:3001/updateconnectiontype/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},

        body: JSON.stringify({
            fromuser: fromuser,
            touser: touser,
            type: typeconn
        })
    })
        .then(response => response.json())
}


