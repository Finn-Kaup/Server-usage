
/*
async function fetchData() { 
   const res = await  fetch(`http://localhost:3000/get`); //`http://100.110.29.129:3000/get`
   const data = await  res.json();
   console.log(data);
}
fetchData()
*/

document.querySelector("mem1");
document.querySelector("mem2");
document.querySelector("version");
document.querySelector("network0");
document.querySelector("cpu");

fetch(`http://localhost:5000/get`) //`http://100.110.29.129:5000/get`
    .then(res => res.json())
    .then(data => {
        console.log(data);
        version.innerHTML = data.version;
        mem1.innerHTML = (data.freemem/1000000000).toFixed(1);
        mem2.innerHTML = (data.totalmem/1000000000).toFixed(1);
        cpu.innerHTML = data.cpus[0].model + " / " + data.cpus[0].speed/1000 + "Ghz";
        network0.innerHTML = data.networkInterfaces.Ethernet[0].family + " = " + data.networkInterfaces.Ethernet[0].address;
        network1.innerHTML = data.networkInterfaces.Ethernet[1].family + " = " + data.networkInterfaces.Ethernet[1].address;
        network2.innerHTML = data.networkInterfaces.Ethernet[2].family + " = " + data.networkInterfaces.Ethernet[2].address;
        network3.innerHTML = data.networkInterfaces.Ethernet[3].family + " = " + data.networkInterfaces.Ethernet[3].address;
        
    })
    .catch(err => console.warn(err));

