const taskInput = document.getElementById("taskInput")
const addBtn = document.getElementById("addbtn")
const TaskList = document.getElementById("TaskList")

addBtn.addEventListener("click", () =>{
    
    const taskText = taskInput.value
    if (taskText==="")return 
    const li = document.createElement("li")
    TaskList.appendChild(li)
    li.innerText = taskText

    const removeBtn = document.createElement("button")
    removeBtn.textContent = "remover"
    removeBtn.addEventListener("click", () =>{
        TaskList.removeChild(li)
        // TaskList.removeChild(removeBtn)
    })



    li.appendChild(removeBtn)

    taskInput.value = ""
})