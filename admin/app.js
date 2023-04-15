var json = []

async function getData(){
    const data = await fetch(`${baseurl}/select/voters`)
    json = await data.json()

    console.log(json)

    for (var i=0; i<=json.lenght; i++){
        
    }
}
