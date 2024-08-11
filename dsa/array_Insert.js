let arr = [20,30,40,50,70];
let new_element = 60;
let positon = 4;

for(let i = arr.length-1; i>=0;i--){
    if(i >= positon){
        arr[i+1] = arr[i];
        if(i==positon){
            arr[i] = new_element;
        }
    }
}

console.log(arr)