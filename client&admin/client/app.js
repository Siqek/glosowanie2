var json = []

async function getData(){
    const data = await fetch(`${baseurl}/select/candidates`)
    json = await data.json()

    console.log(json)
    console.log(json.length)

    const div = document.getElementById("div_candidates")
    for (var i=0; i<=json.length - 1; i++){
        const cand = document.createElement("div")
        cand.classList.add("candidates")

        const name_p = document.createElement("p")
        name_p.innerHTML = `${json[i].Name} ${json[i].Surname}`

        const button = document.createElement("button")
        button.innerHTML = "Zagłosuj"
        button.setAttribute("onclick", `vote(${i+1})`)

        cand.appendChild(name_p)
        cand.appendChild(button)

        div.appendChild(cand)
    }
}

async function vote(cand_id){
    const pesel = document.getElementById("PESEL").value
    if (pesel == "" || pesel.length < 11){
        alert("zły pesel")
    } else {
        await fetch(`${baseurl}/insert/voter/${pesel}/${cand_id}`)
        alert("oddano głos")
    }
}


getData()