fetch("http://localhost:3000/handleSum", {
    method: "POST",
    body: JSON.stringify({
        "counter": "1"
    })
}).then(result => result.json().then(jsonBody => {
    console.log(jsonBody)
}))