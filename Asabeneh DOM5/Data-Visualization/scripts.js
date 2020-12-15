let arr = []

for (let i=0; i<countries.length; i++) {
    arr.push(countries[i].population)   
}   
let arrs = arr.sort((a, b) => b-a).slice(0, 10)
console.log(arrs)

