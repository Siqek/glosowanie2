var xValues = ''
var yValues = ''
var json = []
var json2 = []

new Chart("myChart", {
    type: "pie",
    data: {
      labels: ["red", "dom"],
      datasets: [{
        backgroundColor: "red",
        data: "yValues"
      }]
    },
    options: {
      title: {
        display: true,
        text: "World Wide Wine Production"
      }
    }
  });

  async function getData(){
    const data = await fetch(`${baseurl}/select/candidates`)
    const data2 = await fetch(`${baseurl}/select/voters`)

    json = await data.json()
    json2 = await data2.json()

    console.log(json)
    console.log(json2)

    yValues = '['
    xValues = '['
    
    for (var i=0; i<=json.length - 1; i++){
        console.log(i)
        for (var j=0; j<=json2.length - 1; j++){      
            console.log(j)
        }
    }
    
  }

  getData()