var json = []

async function getData(){
    const data = await fetch(`${baseurl}/select/voters`)
    json = await data.json()

    const data2 = await

    console.log(json)

    for (var i=0; i<=json.length; i++){
        
    }
}
