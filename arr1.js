//push front
arr1=[1,2,3,4,5,6]
arr2=[5]
for(i=0;i<arr1.length;i++){
    arr2.push(arr1[i])
    }
console.log(arr2)

//pop front
arr=[1,2,3,4,5,6]
arr3=[]
for(i=0;i<arr.length;i++){
    if(i==0){
        console.log(arr[i])
    }
    else
    arr3.push(arr[i])
}
console.log(arr3)

//insert
x=100
index=3
arr4=[1,2,3,4,5,6]
arr5=[]
for(i=0;i<arr4.length;i++){
    if(i==index){
        arr5.push(x)  
    }
    arr5.push(arr4[i])
}
console.log(arr5)

//remove
arr6=[1,2,3,4]
arr7=[]
y=1
for(i=0;i<arr6.length;i++){
    if(i==y){
        continue
    }
    else{
        arr7.push(arr6[i])
    }
}
console.log(arr7)

//swap
arr8=[1,2,3,4,5]
for(i=0;i<arr6.length;i+=2){
    temp=arr8[i]
    arr8[i]=arr8[i+1]
    arr8[i+1]=temp
}
console.log(arr8)

//remove duplicate
arr9=[9,19,19,19,19,19,29]
 var temp
arr10=[]
for(i=0;i<arr9.length;i++){
    if(arr9[i]!==temp){
        arr10.push(arr9[i])
        temp=arr9[i]
         
    } 
}
console.log(arr10)
   



