
export function callViewProfile(username) {
    return fetch('34.214.0.26:3001/viewprofile/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: username
        })
    })
        .then(response => response.json())
}


export function callConnectionStatus(fromuser, touser) {
    return fetch('34.214.0.26:3001/connectionstatus/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            fromuser: fromuser,
            touser: touser
        })
    })
        .then(response => response.json())
}


export function callAddConnection(fromuser, touser) {
    return fetch('34.214.0.26:3001/addconnection/', {
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



export function callDeleteConnection(fromuser, touser) {
    return fetch('34.214.0.26:3001/deleteconnection/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            fromuser: fromuser,
            touser: touser
        })
    })
        .then(response => response.json())
}



export function callUpdateConnectionType(fromuser, touser, type) {
    return fetch('34.214.0.26:3001/updateconnectiontype/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},

        body: JSON.stringify({
            fromuser: fromuser,
            touser: touser,
            type: type
        })
    })
        .then(response => response.json())
}


