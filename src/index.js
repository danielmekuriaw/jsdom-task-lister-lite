document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.querySelector("#create-task-form")

  form.addEventListener('submit', function(event){
    event.preventDefault()

    let task = document.querySelector("#tasks")
    
    let li = document.createElement("li")

    li.textContent = event.target[0].value

    let deleteBtn = document.createElement("button")
    deleteBtn.textContent = "X"

    deleteBtn.addEventListener('click', function(event){
      event.preventDefault()
      li.remove()
    })

    li.append(deleteBtn)

    task.append(li)

    form.reset()
  })



  
});
