let userInput = []
const saveEl = document.querySelector("#main__body--button")
const inputEl = document.querySelector("#main__body--input")
const listEl = document.querySelector("#list")

saveEl.addEventListener ("click", function() {
    userInput.push(inputEl.value)
    renderLeads()
})

let listItems = ""

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < userInput.length; i++) {
        listItems += "<li>" + userInput[i] + "</li>"
    }
    listEl.innerHTML = listItems  
}
/*
for (let i = 0; i < userInput.length; i++) {
    listItems += "<li>" + userInput[i] + "</li>"

     another way
     const li = document.createElement("li")
     li.textContent = userInput[i]
     ulEl.append(li)
}
    listEl.innerHTML = listItems */