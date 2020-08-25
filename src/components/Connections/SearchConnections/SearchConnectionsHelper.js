
export function callSearchUsers(searchTerm) {
    return fetch('127.0.0.1:3001/searchusers/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            searchTerm: searchTerm
        })
    })
        .then(response => response.json())
}

export function callHighlightConnections(searchTerm) {
    return fetch('127.0.0.1:3001/highlightconnections/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            searchTerm: searchTerm
        })
    })
        .then(response => response.json())
}
