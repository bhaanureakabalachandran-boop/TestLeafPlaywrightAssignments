let data = ["chrome",true,132.8]

data[5] = "webkit"
console.log(data);
data.pop();
console.log(data);
data.push("Firefox")
console.log(data);
data.shift();
console.log(data);

for(let dataelem of data){
    console.log(dataelem);
}

