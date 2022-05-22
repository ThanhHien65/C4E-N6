let add = document.getElementById('add-button')
add.addEventListener('click',()=>{
    let getinput = document.getElementById('todo-entry-box').value;
    let ol = document.getElementById('todo-list')
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(getinput));
    ol.appendChild(li);
    document.getElementById('todo-entry-box').value = '';
})
emptyList = () => {
    let list = document.getElementById('todo-list')
    list.querySelectorAll('li').forEach((item)=>{
        item.remove()
    })
}
saveList = () =>{
    let ol = document.getElementById('todo-list')
    var toStorage = [];
    ol.querySelectorAll('li').forEach((item)=>{
        toStorage.push(item.innerHTML)
    })
    localStorage.setItem('item',JSON.stringify(toStorage))
}
if (localStorage.getItem('item')){
    window.onload = () =>{
        const storedvalue = JSON.parse(localStorage.getItem('item'))
        storedvalue.forEach((item)=>{
            let ol = document.getElementById('todo-list')
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(item));
            ol.appendChild(li);
        })
    }
}
clearCompletedToDoItems = () =>{
    if (localStorage.getItem('item')){
        localStorage.clear()
    }else{
        console.log(localStorage.getItem('item'));
    }
}