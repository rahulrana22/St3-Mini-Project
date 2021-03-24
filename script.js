function fun(){
    var name1=document.getElementById('name').value;
var mobile=document.getElementById('mobileNumber').value;
var email=document.getElementById('email').value;
var table=document.getElementById('table');
var temp=0;
console.log(mobile);
if(name1 == ""){
    alert("Name cannot be left empty");
    temp=1;
}
if(mobile == "" && temp==0){
    alert("Mobile Number cannot be left empty");
    temp=1;
}
if(email ==""  && temp==0){
    alert("Email cannot be left empty");
    temp=1;
}
if(temp==0){
   var row= document.createElement('tr');
   var data1= document.createElement('td');
   var data2= document.createElement('td');
   var data3= document.createElement('td');
   var data4= document.createElement('td');
   
   data1.innerHTML= name1;
   data2.innerHTML= mobile;
   data3.innerHTML= email;
   data4.innerHTML="<button id='deleteBtn' onclick=del() >Delete</button>";

   row.appendChild(data1);
   row.appendChild(data2);
   row.appendChild(data3);
   row.appendChild(data4);
   table.appendChild(row);
}

}
function del(){
        var td = event.target.parentNode; 
        var tr = td.parentNode; 
        tr.parentNode.removeChild(tr);
  
}