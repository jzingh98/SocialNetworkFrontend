
export function callCreateEvent(eventInfo) {
    return fetch('http://localhost:3001/eventcreate/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: eventInfo.name,
            host: eventInfo.host,
            invited: eventInfo.invited,
            location: eventInfo.location,
            time: eventInfo.time,
            details: eventInfo.details,
            duration: eventInfo.duration,
        })
    })
        .then(response => response.json())
}


export function callRetrieveEvents(userName) {
    console.log("XXXX");
    console.log(userName);
    return fetch('http://localhost:3001/eventretrieve/', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            userName: userName,
        })
    })
        .then(response => response.json())
}
