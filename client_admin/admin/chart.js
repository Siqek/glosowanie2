var xValues = []
var yValues = []
var json = []
var json2 = []
var n = 0

function chart_n(){
    new Chart("myChart", {
        type: "doughnut",
        data: {
          labels: xValues,
          datasets: [{
            backgroundColor: "olive",
            data: yValues
          }]
        },
        options: {
          title: {
            display: true,
            text: "Głosy na kandydatów"
          }
        }
      });
    }

  async function getData(){
    const data = await fetch(`${baseurl}/select/candidates`)
    const data2 = await fetch(`${baseurl}/select/voters`)

    json = await data.json()
    json2 = await data2.json()

    console.log(json)
    console.log(json2)

    //yValues = '['
    //xValues = '['

    for (var i=0; i<=json.length - 1; i++){
        n = 0

        for (var j=0; j<=json2.length - 1; j++){      
            if (json2[j].Candidate == i + 1) n++
        }

        xValues.push(`${json[i].Name} ${json[i].Surname}`)
        yValues.push(n)
    }
    console.log(yValues)
    console.log(xValues)
    chart_n()
  }

  getData()