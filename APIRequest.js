class Request {

    async getRequest(source) { // GET REQUEST
        let promise = await fetch(source);
        let data = await promise.json();
        return data;
    }
    async setRequest(source, addData) { // SET REQUEST
        let promise = await fetch(source, {
            method: "POST",
            body: JSON.stringify(addData),
            headers: {
                "Content-Type": "application/json"
            }
        });
        let data=await promise.json();
        return data;
    }
    async putRequest(source, putData) { //PUT REQUEST
        let promise=await fetch(source,{
                method: "PUT",
                body: JSON.stringify(putData),
                headers: {
                    "Content-Type": "application/json"
                }
            });
        let data =await promise.json();
        return data;
    }
    async deleteRequest(source) { //DELETE REQUEST
        let promise=await fetch(source,{
            method:"DELETE"
        });
        let deleted=await promise.json();
        return deleted;
    }
};

let globalData = null;
const requ = new Request();
const myObject = {
    "hobby": "Playing Tennis",
    "name": "Salih"
};

// GET REQUEST
requ.getRequest("json/salih.json").then(data => console.log(data));

// SET REQUEST
requ.setRequest("https://jsonplaceholder.typicode.com/albums", myObject).then(txt=>console.log(txt));

//PUT REQUEST
requ.putRequest("https://jsonplaceholder.typicode.com/albums/1", myObject).then(txt=>console.log(txt));

//DELETE REQUEST
requ.deleteRequest("https://jsonplaceholder.typicode.com/albums/1").then(e=>console.log(e));