let data = [9,11,23,64,79,37,373,730,445];


//* This array travesing code 
// for(let i = 0; i < data.length; i++){
//     // console.log(data[i]);

//     document.write(`${data[i]} <br>`)
// }


//* This array accessing code
// let x = 3;

// document.write(`${data[x]}`)


const getElement = ()=>{
    let element = document.getElementById('element').value;
    if(element< data.length){
        alert(`${data[element]}`)
    } else{
        alert("This number is not exist")
    }
};