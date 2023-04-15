var json = []
var json2 = []

async function getData(){
    const data = await fetch(`${baseurl}/select/voters`)
    json = await data.json()

    const data2 = await fetch(`${baseurl}/select/candidates`)
    json2 = await data2.json()

    console.log(json)
    console.log(json2)

    for (var i=0; i<=json2.length - 1; i++){
        const cand_div = document.createElement("div")
        cand_div.classList.add("cands")
        
        const name = document.createElement("h2")
        name.innerHTML = `${i + 1}. ${json2[i].Name} ${json2[i].Surname}`

        const cand_ol = document.createElement("ul")

        for (var j=0; j<=json.length - 1; j++){
            if ( i + 1 == json[j].Candidate){
                const li = document.createElement("li")
                li.innerHTML = json[j].PESEL

                cand_ol.appendChild(li)
            }
        }

        cand_div.appendChild(name)
        cand_div.appendChild(cand_ol)
        document.getElementById("results").appendChild(cand_div)
    }
}

async function add_cand(){
    const name = document.getElementById("name").value
    const surname = document.getElementById("surname").value

    const url = `${baseurl}/insert/cand/${name}/${surname}`

    if (name == "" || surname == ""){
        alert("wprowadź dane")
    } else {
        await fetch(url)
        alert("dodano kandydata")
    }
}