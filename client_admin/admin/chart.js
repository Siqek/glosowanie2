var xValues = ''
var yValues = ''
var json = []
var json2 = []
var n = 0

function chart_n(){
    new Chart("myChart", {
        type: "bar",
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
            text: "World Wide Wine Production"
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

    yValues = '['
    xValues = '['

    for (var i=0; i<=json.length - 1; i++){
        xValues = `${xValues}"${json[i].Name} ${json[i].Surname}"`
        n = 0

        for (var j=0; j<=json2.length - 1; j++){      
            if (json2[j].Candidate == i + 1) n++
        }
        yValues = `${yValues}${n}`
        if (i <= json.length - 2){
            xValues = `${xValues}, `
            yValues = `${yValues}, `
        }

        if (i == json.length - 1){
            xValues = `${xValues}]`
            yValues = `${yValues}]`
        }
    }//push
    //obiekt
    // ^
    //string
    //
    ///
    ///
    ////
    ///
    ///
    //
    //
    //
    //
    chart_n()
    console.log(yValues)
    console.log(xValues)
  }

  getData()