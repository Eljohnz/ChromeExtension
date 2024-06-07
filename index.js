let userInput = []
const saveEl = document.querySelector("#main__body--button")
const inputEl = document.querySelector("#main__body--input")
const listEl = document.querySelector("#list")

saveEl.addEventListener ("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

let listItems = ""

for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>"

    // another way
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
}
    listEl.innerHTML = listItems