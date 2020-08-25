
export function callSearchConnections(username) {
    return fetch('127.0.0.1:3001/searchconnections/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: username
        })
    })
        .then(response => response.json())
}
