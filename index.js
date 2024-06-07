let userInput = []
const saveEl = document.querySelector("#main__body--button")
const inputEl = document.querySelector("#main__body--input")

saveEl.addEventListener ("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})