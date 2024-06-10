let userInput = []
const saveEl = document.querySelector("#main__body--button")
const inputEl = document.querySelector("#main__body--input")
const listEl = document.querySelector("#list")
const deleteBtn = document.querySelector("#delete-btn")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("userInput") )

if (leadsFromLocalStorage) {
    userInput = leadsFromLocalStorage
    render(userInput)
}

deleteBtn.addEventListener("dblclick", function(){
    userInput = []
    localStorage.clear()
    render(userInput)
})


saveEl.addEventListener ("click", function() {
    userInput.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("userInput", JSON.stringify(userInput) )
    render(userInput)
})

let listItems = ""

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
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