let ota = document.getElementById(`ota`)
fetch(`https://jsonplaceholder.typicode.com/users`)
.then((response) => response.json())
.then((data)=> getdata(data));
console.log(data)

 function getdata(params) {
    console.log(params);


    params.map((item) =>{
        let div = document.createElement(`div`)
        let h3 = document.createElement(`h3`)
        let tel = document.createElement(`p`)
        let tel2= document.createElement(`p`)
        let tel3 = document.createElement(`p`)
        let tel4 = document.createElement(`p`)
        let tel5 = document.createElement(`p`)
        h3.innerHTML = `Ism:` + item.name;
        tel.innerHTML = `Tel:` + item.phone
        tel2.innerHTML = `address:` + item.address
        tel3.innerHTML = `email:` + item.email


        div.appendChild(h3)
        div.appendChild(tel)
        div.appendChild(tel2)
        div.appendChild(tel3)
        div.appendChild(tel4)
        div.appendChild(tel5)
        div.classList.add(`box`)
        ota.appendChild(div)
    })
 }