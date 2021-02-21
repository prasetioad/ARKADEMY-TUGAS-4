const getDataApi = (url) =>{    
    fetch(url)
    .then(response => response.json())
    .then(response => {
        response.map((item) => {
            console.log(item.name)
        })
    })
    .catch((err) => {
        console.log(err.message)
    })
}

getDataApi('https://jsonplaceholder.typicode.com/users')