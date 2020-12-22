let countriesArray = []
let populationArray = []
countries.sort((a, b) => {
    return b.population - a.population
})
countries.forEach(i => 
    countriesArray.push(i.name)
    )

countries.forEach(i => 
    populationArray.push(i.population)
    )
    let slicedCtry = countriesArray.slice(0, 10)
    let slicedPopn = populationArray.slice(0, 10)




let popButton = document.querySelector('.population')
popButton.addEventListener('click', () => {
   
    let container = document.createElement('div')
    container.className = 'container'
    
    document.querySelector('.graph-title').innerHTML = '10 most populated countries in the world'

    let graph0 = document.createElement('div')
    graph0.className = 'graphs'
        let nation0 = document.createElement('div')
        nation0.innerHTML = slicedCtry[0]
        nation0.className = 'nation'
        let graphWidth0 = document.createElement('div')
        graphWidth0.className = 'graph-width'
        graphWidth0.style.width = slicedPopn[0]/7249590 + 'px'
        let census0 = document.createElement('div')
        census0.innerHTML = slicedPopn[0]
        census0.className = 'census'
        graph0.append(nation0, graphWidth0, census0)

    let graph1 = document.createElement('div')
    graph1.className = 'graphs'
        let nation1 = document.createElement('div')
        nation1.innerHTML = slicedCtry[1]
        nation1.className = 'nation'
        let graphWidth1 = document.createElement('div')
        graphWidth1.className = 'graph-width'
        graphWidth1.style.width = slicedPopn[1]/7249590 + 'px'
        let census1 = document.createElement('div')
        census1.innerHTML = slicedPopn[1]
        census1.className = 'census'
        graph1.append(nation1, graphWidth1, census1)

    let graph2 = document.createElement('div')
    graph2.className = 'graphs'
        let nation2 = document.createElement('div')
        nation2.innerHTML = slicedCtry[2]
        nation2.className = 'nation'
        let graphWidth2 = document.createElement('div')
        graphWidth2.className = 'graph-width'
        graphWidth2.style.width = slicedPopn[2]/7249590 + 'px'
        let census2 = document.createElement('div')
        census2.innerHTML = slicedPopn[2]
        census2.className = 'census'
        graph2.append(nation2, graphWidth2, census2)
        
    let graph3 = document.createElement('div')
    graph3.className = 'graphs'
        let nation3 = document.createElement('div')
        nation3.innerHTML = slicedCtry[3]
        nation3.className = 'nation'
        let graphWidth3 = document.createElement('div')
        graphWidth3.className = 'graph-width'
        graphWidth3.style.width = slicedPopn[3]/7249590 + 'px'
        let census3 = document.createElement('div')
        census3.innerHTML = slicedPopn[3]
        census3.className = 'census'
        graph3.append(nation3, graphWidth3, census3)
        
    let graph4 = document.createElement('div')
    graph4.className = 'graphs'
        let nation4 = document.createElement('div')
        nation4.innerHTML = slicedCtry[4]
        nation4.className = 'nation'
        let graphWidth4 = document.createElement('div')
        graphWidth4.className = 'graph-width'
        graphWidth4.style.width = slicedPopn[4]/7249590 + 'px'
        let census4 = document.createElement('div')
        census4.innerHTML = slicedPopn[4]
        census4.className = 'census'
        graph4.append(nation4, graphWidth4, census4)
        

    let graph5 = document.createElement('div')
    graph5.className = 'graphs'
        let nation5 = document.createElement('div')
        nation5.innerHTML = slicedCtry[5]
        nation5.className = 'nation'
        let graphWidth5 = document.createElement('div')
        graphWidth5.className = 'graph-width'
        graphWidth5.style.width = slicedPopn[5]/7249590 + 'px'
        let census5 = document.createElement('div')
        census5.innerHTML = slicedPopn[5]
        census5.className = 'census'
        graph5.append(nation5, graphWidth5, census5)
        

    let graph6 = document.createElement('div')
    graph6.className = 'graphs'
        let nation6 = document.createElement('div')
        nation6.innerHTML = slicedCtry[6]
        nation6.className = 'nation'
        let graphWidth6 = document.createElement('div')
        graphWidth6.className = 'graph-width'
        graphWidth6.style.width = slicedPopn[6]/7249590 + 'px'
        let census6 = document.createElement('div')
        census6.innerHTML = slicedPopn[6]
        census6.className = 'census'
        graph6.append(nation6, graphWidth6, census6)
        

    let graph7 = document.createElement('div')
    graph7.className = 'graphs'
        let nation7 = document.createElement('div')
        nation7.innerHTML = slicedCtry[7]
        nation7.className = 'nation'
        let graphWidth7 = document.createElement('div')
        graphWidth7.className = 'graph-width'
        graphWidth7.style.width = slicedPopn[7]/7249590 + 'px'
        let census7 = document.createElement('div')
        census7.innerHTML = slicedPopn[7]
        census7.className = 'census'
        graph7.append(nation7, graphWidth7, census7)
        

    let graph8 = document.createElement('div')
    graph8.className = 'graphs'
        let nation8 = document.createElement('div')
        nation8.innerHTML = slicedCtry[8]
        nation8.className = 'nation'
        let graphWidth8 = document.createElement('div')
        graphWidth8.className = 'graph-width'
        graphWidth8.style.width = slicedPopn[8]/7249590 + 'px'
        let census8 = document.createElement('div')
        census8.innerHTML = slicedPopn[8]
        census8.className = 'census'
        graph8.append(nation8, graphWidth8, census8)
        

    let graph9 = document.createElement('div')
    graph9.className = 'graphs'
        let nation9 = document.createElement('div')
        nation9.innerHTML = slicedCtry[9]
        nation9.className = 'nation'
        let graphWidth9 = document.createElement('div')
        graphWidth9.className = 'graph-width'
        graphWidth9.style.width = slicedPopn[9]/7249590 + 'px'
        let census9 = document.createElement('div')
        census9.innerHTML = slicedPopn[9]
        census9.className = 'census'
        graph9.append(nation9, graphWidth9, census9)
        

       container.append(graph0, graph1, graph2, graph3, graph4, graph5, graph6, graph7, graph8, graph9)
        document.querySelector('.container').replaceWith(container)
    })



let arr = []
countries.map(i => arr.push(i.languages))

let counts = {};

 arr.toString().split(",").forEach(e=>{
    counts[e] = (counts[e] || 0) +1
 })   
 
 const sortable = Object.fromEntries(
    Object.entries(counts).sort(([,a],[,b]) => b-a)
);

let langButton = document.querySelector('.languages')
langButton.addEventListener('click', () => {
    
    document.querySelector('.graph-title').innerHTML = '10 most spoken languages in the world'


    let result = document.createElement('div')
    result.className = 'container'

    let chart0 = document.createElement('div')
    chart0.className = 'charts'
        let language0 = document.createElement('div')
        language0.innerHTML = Object.keys(sortable)[0]
        language0.className = 'language'
        let chartWidth0 = document.createElement('div')
        chartWidth0.className = 'chart-width'
        chartWidth0.style.width = Object.values(sortable)[0] * 2.5 + 'px'
        let total0 = document.createElement('div')
        total0.innerHTML = Object.values(sortable)[0]
        total0.className = 'total'
        chart0.append(language0, chartWidth0, total0)


    let chart1 = document.createElement('div')
    chart1.className = 'charts'
        let language1 = document.createElement('div')
        language1.innerHTML = Object.keys(sortable)[1]
        language1.className = 'language'
        let chartWidth1 = document.createElement('div')
        chartWidth1.className = 'chart-width'
        chartWidth1.style.width = Object.values(sortable)[1] * 2.5 + 'px'
        let total1 = document.createElement('div')
        total1.innerHTML = Object.values(sortable)[1]
        total1.className = 'total'
        chart1.append(language1, chartWidth1, total1)


    let chart2 = document.createElement('div')
    chart2.className = 'charts'
        let language2 = document.createElement('div')
        language2.innerHTML = Object.keys(sortable)[2]
        language2.className = 'language'
        let chartWidth2 = document.createElement('div')
        chartWidth2.className = 'chart-width'
        chartWidth2.style.width = Object.values(sortable)[2] * 2.5 + 'px'
        let total2 = document.createElement('div')
        total2.innerHTML = Object.values(sortable)[2]
        total2.className = 'total'
        chart2.append(language2, chartWidth2, total2)



    let chart3 = document.createElement('div')
    chart3.className = 'charts'
        let language3 = document.createElement('div')
        language3.innerHTML = Object.keys(sortable)[3]
        language3.className = 'language'
        let chartWidth3 = document.createElement('div')
        chartWidth3.className = 'chart-width'
        chartWidth3.style.width = Object.values(sortable)[3] * 2.5 + 'px'
        let total3 = document.createElement('div')
        total3.innerHTML = Object.values(sortable)[3]
        total3.className = 'total'
        chart3.append(language3, chartWidth3, total3)


    let chart4 = document.createElement('div')
    chart4.className = 'charts'
        let language4 = document.createElement('div')
        language4.innerHTML = Object.keys(sortable)[4]
        language4.className = 'language'
        let chartWidth4 = document.createElement('div')
        chartWidth4.className = 'chart-width'
        chartWidth4.style.width = Object.values(sortable)[4] * 2.5 + 'px'
        let total4 = document.createElement('div')
        total4.innerHTML = Object.values(sortable)[4]
        total4.className = 'total'
        chart4.append(language4, chartWidth4, total4)


    let chart5 = document.createElement('div')
    chart5.className = 'charts'
        let language5 = document.createElement('div')
        language5.innerHTML = Object.keys(sortable)[5]
        language5.className = 'language'
        let chartWidth5 = document.createElement('div')
        chartWidth5.className = 'chart-width'
        chartWidth5.style.width = Object.values(sortable)[5] * 2.5 + 'px'
        let total5 = document.createElement('div')
        total5.innerHTML = Object.values(sortable)[5]
        total5.className = 'total'
        chart5.append(language5, chartWidth5, total5)


    let chart6 = document.createElement('div')
    chart6.className = 'charts'
        let language6 = document.createElement('div')
        language6.innerHTML = Object.keys(sortable)[6]
        language6.className = 'language'
        let chartWidth6 = document.createElement('div')
        chartWidth6.className = 'chart-width'
        chartWidth6.style.width = Object.values(sortable)[6] * 2.5 + 'px'
        let total6 = document.createElement('div')
        total6.innerHTML = Object.values(sortable)[6]
        total6.className = 'total'
        chart6.append(language6, chartWidth6, total6)


    let chart7 = document.createElement('div')
    chart7.className = 'charts'
        let language7 = document.createElement('div')
        language7.innerHTML = Object.keys(sortable)[7]
        language7.className = 'language'
        let chartWidth7 = document.createElement('div')
        chartWidth7.className = 'chart-width'
        chartWidth7.style.width = Object.values(sortable)[7] * 2.5 + 'px'
        let total7 = document.createElement('div')
        total7.innerHTML = Object.values(sortable)[7]
        total7.className = 'total'
        chart7.append(language7, chartWidth7, total7)


    let chart8 = document.createElement('div')
    chart8.className = 'charts'
        let language8 = document.createElement('div')
        language8.innerHTML = Object.keys(sortable)[8]
        language8.className = 'language'
        let chartWidth8 = document.createElement('div')
        chartWidth8.className = 'chart-width'
        chartWidth8.style.width = Object.values(sortable)[8] * 2.5 + 'px'
        let total8 = document.createElement('div')
        total8.innerHTML = Object.values(sortable)[8]
        total8.className = 'total'
        chart8.append(language8, chartWidth8, total8)


    let chart9 = document.createElement('div')
    chart9.className = 'charts'
        let language9 = document.createElement('div')
        language9.innerHTML = Object.keys(sortable)[9]
        language9.className = 'language'
        let chartWidth9 = document.createElement('div')
        chartWidth9.className = 'chart-width'
        chartWidth9.style.width = Object.values(sortable)[9] * 2.5 + 'px'
        let total9 = document.createElement('div')
        total9.innerHTML = Object.values(sortable)[9]
        total9.className = 'total'
        chart9.append(language9, chartWidth9, total9)

    result.append(chart0, chart1, chart2, chart3, chart4, chart5, chart6, chart7, chart8, chart9)
    document.querySelector('.container').replaceWith(result)
 
})

