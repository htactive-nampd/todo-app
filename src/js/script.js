var listId = 0

function createDiv(tagName) {

    let div = document.createElement('div');
    div.className = tagName
    return div
}

function addTodoList(listData) {
    let todoItem = createDiv("col-sm col-md todo-item item-"+ listData.id)
    let title = createDiv("title")
    title.innerHTML = `<h2> <span class="badge badge-secondary"> ${listData.title}</span></h2><button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal" onclick="onclickAddBtn(${listData.id})">ADD</button>`
    todoItem.appendChild(title)

    for (element of listData.list) {
        let item = createDiv("item")
        item.innerHTML = `<ul>
                                <li><b>createdAt: </b>${element.createdAt}</li>
                                <li><b>Title: </b>${element.title}</li>
                                <li><b>Description: </b>${element.desc}</li>
                            </ul>`
        todoItem.appendChild(item)
    }

    document.getElementsByClassName('content')[0].appendChild(todoItem);
}

(async function getApiData() {

    const todoList = await (await fetch("http://localhost:2500/api")).json()

    todoList.map(async list => {
        const listData = await fetch("http://localhost:2500/api/" + list.id)

        //console.log(await listData.json())
        addTodoList({
            id: list.id,
            title: list.name,
            list: await listData.json()
        })
    })
})()

function onclickAddBtn (id) {
    this.listId = id
}

function addData() {
    let title = document.getElementById("data-title").value
    let order = document.getElementById("data-order").value
    let desc = document.getElementById("data-desc").value

    console.log(listId)

    if (title && listId && order && desc) {

        fetch("http://localhost:2500/api", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title, listId, order, desc })
        }).then(() => location.reload())
    }
}