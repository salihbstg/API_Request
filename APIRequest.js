class Request {

    getRequest(source) { // GET REQUEST

        return new Promise((resolve, reject) => {
            fetch(source).then(response => response.text()).then(response => {
                resolve(response);
            }).catch(e => {
                reject(e);
            })
        })
    }
    setRequest(source, data) { // SET REQUEST
        // {"hobby":"Football","name":"Salih"},
        fetch(source, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.text()).then(response => console.log(response)).catch(e => console.log(e));
    }
    putRequest(source, data) { //PUT REQUEST
        fetch(source, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.text()).then(response => console.log(response)).catch(e => console.log(e));
    }
    deleteRequest(source) {
        fetch(source, {
            method: "DELETE"
        }).then(() => console.log("Successfully deleted")).catch(e => console.log(e));
    }
};

let globalData = null;
const requ = new Request();
const myObject = {
    "hobby": "Playing Tennis",
    "name": "Sezin"
};
//GET REQUEST
requ.getRequest("json/salih.json").then(data => {
    globalData = data;
    console.log(globalData);
}).catch(e => {
    console.log(e);
});

// SET REQUEST
requ.setRequest("https://jsonplaceholder.typicode.com/albums", myObject);

//PUT REQUEST
requ.putRequest("https://jsonplaceholder.typicode.com/albums/1", myObject);

//DELETE REQUEST
requ.deleteRequest("https://jsonplaceholder.typicode.com/albums/1");