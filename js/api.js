

    function loadData(){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
        
    }
    function getUser(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(user => user.json())
        .then(userData => displayUser(userData))
    }
    function displayUser(data){
       const ul = document.getElementById('user');
        for(const user of data){
        
            const li = document.createElement('li');
            li.innerText = user.name;
            ul.appendChild(li);
       }
    }
    function loadPost(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => console.log(data))
    }
    function getComment(){
        fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => console.log(data))
    }
    function getAlbum(){
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data=> console.log(data))
    }
    function getPhoto(){
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => console.log(data))
    }