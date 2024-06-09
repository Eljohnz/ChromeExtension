let userInput = []
const saveEl = document.querySelector("#main__body--button")
const inputEl = document.querySelector("#main__body--input")
const listEl = document.querySelector("#list")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("userInput") )

if (leadsFromLocalStorage) {
    userInput = leadsFromLocalStorage
    renderLeads()
}

saveEl.addEventListener ("click", function() {
    userInput.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("userInput", JSON.stringify(userInput) )
    renderLeads()
})

let listItems = ""

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < userInput.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${userInput[i]}'>
                    ${userInput[i]}
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