
export function callCreateEvent(eventInfo) {
    console.log(eventInfo);
    return fetch('http:// 18.237.156.55:3001/postcreate/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            title: eventInfo.title,
            details: eventInfo.details,
            poster: eventInfo.poster,
        })
    })
        .then(response => response.json())
}


export function callRetrieveEvents(username) {
    console.log(username);
    return fetch('http:// 18.237.156.55:3001/postretrieve/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: username,
        })
    })
        .then(response => response.json())
}
