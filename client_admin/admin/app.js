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
    lider()
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

function login(){
    const user = document.getElementById("user").value
    const pass = document.getElementById("pass").value

    if (user == "admin" && pass == "admin"){
        localStorage.setItem("login", "true")
        window.location.href = "results.html"
    } else {
        alert("złe dane")
    }
}

function onload_login_l(){
    if (localStorage.getItem("login") === "true") window.location.href = "results.html"
}

function onload_login(){
    if (localStorage.getItem("login") != "true") window.location.href = "index.html"
}

function logout(){
    localStorage.setItem("login", "false")
    window.location.href = "index.html"
}

function lider(){
    var lider = ''
    var max = 0
    var n = 0
    for (var i=0; i<=json2.length - 1; i++){
        n = 0
        for (var j=0; j<=json.length - 1; j++){
            if (i+1 === json[j].Candidate) n++
        }
        if (n == max && n != 0) lider = `${lider} i ${json2[i].Name} ${json2[i].Surname}`
        if (n > max) {
        max = n
        lider = `${json2[i].Name} ${json2[i].Surname}`
        }
    }   

    document.getElementById("lider").innerHTML = "Aktualny lider: " + lider
}