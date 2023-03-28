// ? Todo List Fetch API Tugas Pertemuan 9 
const baseUrl = "https://crudcrud.com/api/";
const apiKey = "8e81d2daf0184e7fbfb7f22b95a827c7";
const url = baseUrl + apiKey;
const endpointTodo = `${url}/todolist`;

const handleError = (error) => console.log(error);
const handleSuccess = (result) => console.log(result);

// GET semua data
const getTodo = () => {
    fetch(endpointTodo).then(handleSuccess).catch(handleError);
};

// GET detail data
const detailTodo = (id) => {
    fetch(`${endpointTodo}/${id}`).then(handleSuccess).catch(handleError);
};

//POST
function newElement(){
    var inputValue = document.getElementById("input").value;
    if (inputValue){
        alert("Todo Wajib di isi!!");
        return;        
    }

    const todo = {
        title: inputValue,
        checked: false,
    };
    fetch(endpointTodo, {
        method: "POST",
        headers: {
            "Content-type" : "application/json",
        },
        body: JSON.stringify(todo),
    })
    .then(handleSuccess)
    .catch(handleError);
}
    getTodo()