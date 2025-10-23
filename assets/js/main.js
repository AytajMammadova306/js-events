let tbody=document.getElementsByTagName("tbody")[0];
let btn=document.getElementsByTagName("button")[0];
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let tr=document.createElement("tr")
    let inputs=document.getElementsByTagName("input")
    for(let i =0;i<inputs.length;i++){
        let td=document.createElement("td")
        td.textContent=`${inputs[i].value}`
        tr.append(td)
        inputs[i].value=""
    }
    tbody.appendChild(tr)
    btn.blur()//inputun submiti focus goturmur, amma buttonun submiti goturur 
    //ve focusu inputa vermekde mena olmur, birinci buttonun focusunu silmeliyem
    inputs[0].focus()
})