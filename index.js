let userInput = []
const saveEl = document.querySelector("#main__body--button")
const inputEl = document.querySelector("#main__body--input")
const listEl = document.querySelector("#list")

saveEl.addEventListener ("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++) {
    listEl.innerHTML += "<li>" + myLeads[i] + "</li>"
}