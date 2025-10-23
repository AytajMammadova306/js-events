let tbody = document.getElementsByTagName("tbody")[0];
let form = document.getElementsByTagName("form")[0];
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let tr = document.createElement("tr")
    let inputs = document.getElementsByClassName("headdings")
    for (let i = 0; i < inputs.length; i++) {
        let td = document.createElement("td")
        td.textContent = `${inputs[i].value}`
        tr.append(td)
        inputs[i].value = ""
    }
    let td = document.createElement("td")
    let btn=document.createElement("button")
    btn.setAttribute=("type","button")
    btn.textContent="X"
    btn.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.remove()
    })
    td.appendChild(btn)
    tr.append(td)
    tbody.appendChild(tr)
    inputs[0].focus()
})
