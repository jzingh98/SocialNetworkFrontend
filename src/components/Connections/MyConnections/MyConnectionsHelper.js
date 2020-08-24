
export function callSearchConnections(username) {
    return fetch('34.216.100.238:3001/searchconnections/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: username
        })
    })
        .then(response => response.json())
}
