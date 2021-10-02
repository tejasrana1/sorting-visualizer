import React, { useEffect, useState } from "react"


function BlockBox(props){
    var [color ] = useState("#A9E4D7");
    var [array ,setArray] =useState([])
    useEffect(()=>{
        if(props.sort)
        {
            switch(props.event)
            {
                case "1":
                    triverse();
                    break;
                case "2":
                    startSort();
                    break;
                case "3":
                    bubbleSort();
                    break;
                case "4":
                    selectionSort();
                    break;
                case "5":
                    uselectionSort();
                    break;
                case "6":
                    insertionSort()
                    break;
                case "7":
                    uinsertionSort()
                    break;
                case "8":
                    alert("Currently in Progress")
                    quickSort(0 , array.length-1)
                    break;
                default:
                    return;
            }
        }
        else
        randomize();
    } , [props.sort])
    function randomize(){
        var temp = []
     for(var i=0;i<props.noe;i++)
     {
         temp[i] = Math.floor(Math.random() * 90)+10
     }
     setArray(temp);
    }
    useEffect(()=>{
        randomize();
    } , [props.noe])
     
    function Mapped(){
        function mapping(m,index){
            var heightSet = {
                width:`${100/props.noe}%`,
                height: `${m/100*50}vh`,
                outline:"0.1px solid black",
                outlineBottom:"none",
                backgroundColor:color
            }
            let id = "div"+index;
            return (
                    <div className="arrayElement" id={id} style={heightSet} key={index} />
                
            )
        }
        return(
            <div className="mappedArray">
            {array.map(mapping)}
            </div>
        )
    }






    async function triverse(){
        const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
var bar = document.querySelectorAll(".arrayElement");
        for(let i =0;i<array.length;i++){
            await sleep(props.sos)
            bar[i].style.backgroundColor="#542E71";
            if(i>0)
            bar[i-1].style.backgroundColor="#A9E4D7";
        }
        await sleep(props.sos)
        bar[array.length-1].style.backgroundColor="#A9E4D7";
    }







    
    async function bubbleSort(){
        var bar = document.querySelectorAll(".arrayElement");
        var sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
        for(let i =0;i<array.length-1;i++){
    for (var j = 0; j <array.length-i-1; j++)
    {      
        bar[j].style.backgroundColor = "#542E71";
        bar[j+1].style.backgroundColor = "#542E71";
        if (array[j] > array[j+1])
            {
                let temp = array[j];
                    let temph = bar[j].style.height;
                    array[j] = array[j+1];
                    bar[j].style.height = bar[j+1].style.height;
                    array[j+1] = temp;
                    bar[j+1].style.height = temph;
                    
            }
            await sleep(props.sos)
                    bar[j].style.backgroundColor = "#A9E4D7";
                    bar[j+1].style.backgroundColor = "#A9E4D7";
                    if(j===array.length-i-2)
                    bar[array.length-i-1].style.backgroundColor = "#FF94CC";
                    
        }
        }
        await sleep(props.sos)   
        bar[0].style.backgroundColor = "#FF94CC";
    }








    async function selectionSort(){
        var bar = document.querySelectorAll(".arrayElement");
        var sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
        for (var i = 0; i < array.length-1; i++)
    {
        var min_idx = i;
        for (var j = i+1; j < array.length; j++)
        {
            bar[j].style.backgroundColor = "#542E71";
            bar[j-1].style.backgroundColor = "#A9E4D7";
            await sleep(props.sos)
            if (array[j] < array[min_idx])
                min_idx = j;
        }
                let temp = array[i];
                    let temph = bar[i].style.height;
                    array[i] = array[min_idx];
                    bar[i].style.height = bar[min_idx].style.height;
                    array[min_idx] = temp;
                    bar[min_idx].style.height = temph;
                    bar[i].style.backgroundColor = "#FF94CC";
                    bar[array.length-1].style.backgroundColor = "#A9E4D7";
    }
    await sleep(props.sos)
    bar[array.length-1].style.backgroundColor = "#FF94CC";
    }





    async function uselectionSort(){
        
        var bar = document.querySelectorAll(".arrayElement");
        var sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
function swaps(a , b){
    let temp = array[a];
                let temph = bar[a].style.height;
                array[a] = array[b];
                bar[a].style.height = bar[b].style.height;
                array[b] = temp;
                bar[b].style.height = temph;
}
        for (var i = 0, j = array.length - 1; i < j; i++, j--) {
        var min = array[i], max = array[i];
        var min_i = i, max_i = i;
        for (var k = i; k <= j; k++)  {
            await sleep(props.sos)
            bar[k].style.backgroundColor = "#542E71";
            if(k>i)
            bar[k-1].style.backgroundColor = "#A9E4D7";
            if (array[k] > max) {
                max = array[k];
                max_i = k;
            } else if (array[k] < min) {
                min = array[k];
                min_i = k;
            }
        }
 
        // shifting the min.
        swaps(i, min_i);
 
        // Shifting the max. The equal condition
        // happens if we shifted the max to arr[min_i]
        // in the previous swap.
        if (array[min_i] === max)
            swaps(j, min_i);
        else
            swaps(j, max_i);
            bar[i].style.backgroundColor = "#FF94CC";
            bar[array.length-i-1].style.backgroundColor = "#FF94CC";
    }
                
    // await sleep(props.sos)
    // bar[array.length-1].style.backgroundColor = "#FF94CC";
    }






    async function insertionSort(){
        var bar = document.querySelectorAll(".arrayElement");
        var sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
       var i, key,hkey, j;
    for (i = 1; i < array.length; i++)
    {
        key = array[i];
        hkey = bar[i].style.height;
        j = i - 1;
        
        
        /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        
        while (j >= 0 && array[j] > key)
        {
            bar[j+1].style.backgroundColor = "purple";
            bar[j].style.backgroundColor = "pink";
            if(j>0)
            bar[j-1].style.backgroundColor = "#A9E4D7";
            if(j<array.length-2)
            bar[j+2].style.backgroundColor = "#A9E4D7";
            
            array[j + 1] = array[j];
            // if(j>0)
            var temph = bar[j+1].style.height;
            bar[j+1].style.height = bar[j].style.height;
            bar[j].style.height = temph;
            await sleep(props.sos)
            j--;
        }
        if(j<array.length-2)
        bar[j+2].style.backgroundColor = "#A9E4D7";
        if(j<array.length-1)
        bar[j+1].style.backgroundColor = "#A9E4D7";
        array[j + 1] = key;
        bar[j+1].style.height = hkey;
    }
    }
    async function uinsertionSort(){
        var bar = document.querySelectorAll(".arrayElement");
        var sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
       var i, key,hkey, j;
    for (i = 1; i < array.length; i++)
    {
        key = array[i];
        hkey = bar[i].style.height;
        j = i - 1;
        
        
        /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        
        while (j >= 0 && array[j] > key)
        {
            bar[j+1].style.backgroundColor = "purple";
            if(j>0)
            bar[j-1].style.backgroundColor = "#A9E4D7";
            if(j<array.length-2)
            bar[j+2].style.backgroundColor = "#A9E4D7";
            
            array[j + 1] = array[j];
            // if(j>0)
            bar[j+1].style.height = bar[j].style.height;
            await sleep(props.sos)
            j--;
        }
        if(j<array.length-2)
        bar[j+2].style.backgroundColor = "#A9E4D7";
        if(j<array.length-1)
        bar[j+1].style.backgroundColor = "#A9E4D7";
        array[j + 1] = key;
        bar[j+1].style.height = hkey;
    }
    }





// function merge(left, right) {
//     let arr = []
//     // Break out of loop if any one of the array gets empty
//     while (left.length && right.length) {
//         // Pick the smaller among the smallest element of left and right sub arrays 
//         if (left[0] < right[0]) {
//             arr.push(left.shift())  
//         } else {
//             arr.push(right.shift()) 
//         }
//     }
    
//     // Concatenating the leftover elements
//     // (in case we didn't go through the entire left or right array)
//     return [ ...arr, ...left, ...right ]
// }

//     async function mergeSort(){

//         var bar = document.querySelectorAll(".arrayElement");
//         var sleep = (milliseconds) => {
//   return new Promise(resolve => setTimeout(resolve, milliseconds))
// }

//   const half = array.length / 2
  
//   // Base case or terminating case
//   if(array.length < 2){
//     return array 
//   }
  
//   const left = array.splice(0, half)
//   return merge(mergeSort(left),mergeSort(array))
// }



function swap(i,j){
    var bar = document.querySelectorAll(".arrayElement");
        var sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

let temp = array[i];
                    let temph = bar[i].style.height;
                    array[i] = array[j];
                    bar[i].style.height = bar[j].style.height;
                    array[j] = temp;
                    bar[j].style.height = temph;
}

async function justTimeout(){
    var sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
    await sleep(props.sos)
}


function partition( left, right) {
    var bar = document.querySelectorAll(".arrayElement");
        
    var pivot   = array[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        // sleep(props.sos);
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        // if(i<array.length)
        bar[i].style.backgroundColor = "#FF94CC";
        // if(j>0)
            bar[j].style.backgroundColor = "#FF94CC";
        if (i <= j) {
            swap(i,j)
            i++;
            j--;
        }
        justTimeout();
        bar[i-1].style.backgroundColor = "#A9E4D7";
            bar[j+1].style.backgroundColor = "#A9E4D7";
    }
    return i;
}





async function quickSort( left, right) {
    var bar = document.querySelectorAll(".arrayElement");
        var sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
await sleep(props.sos);
    var index;
    
    if (array.length > 1) {
        await sleep(props.sos);
        index = partition( left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            // await sleep(props.sos);
            quickSort( left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            // await sleep(props.sos);
            quickSort( index, right);
        }
    }
    return array;
}






















































    async function startSort(){
        var bar = document.querySelectorAll(".arrayElement");
        var sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
        for(let i =0;i<array.length;i++){
            bar[array.length-1].style.backgroundColor = "#A9E4D7";
            bar[i].style.backgroundColor = "#FF94CC";
            for(let j=i+1;j<array.length;j++)
            {
                await sleep(props.sos)
                bar[j-1].style.backgroundColor = "#A9E4D7";
                bar[j].style.backgroundColor = "#542E71";
                bar[i].style.backgroundColor = "#FF94CC";
                if(array[i]>array[j])
                {
                    let temp = array[i];
                    let temph = bar[i].style.height;
                    array[i] = array[j];
                    bar[i].style.height = bar[j].style.height;
                    array[j] = temp;
                    bar[j].style.height = temph;
                    bar[i].style.backgroundColor = "#FF94CC";
                }
            }
        }
    }





    
    return (
        <div className="blockBox">
            <Mapped />
        </div>
    )
}

export default BlockBox;