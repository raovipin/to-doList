showtask();
let todoinput = document.getElementById("todoinput");
let addtaskbtn = document.getElementById("addtaskbtn");

addtaskbtn.addEventListener("click",function(){
    inputval = todoinput.value;
    if(inputval.trim()!=0){
        
        let webtask = localStorage.getItem("localtask");
        if(webtask == null){
            taskObj =[];
        }
        else{
            taskObj = JSON.parse(webtask);
        }
        taskObj.push(inputval);
        localStorage.setItem("localtask",JSON.stringify(taskObj));
    }
showtask();
})

function showtask(){
    let webtask = localStorage.getItem("localtask");
if(webtask == null){
    taskObj =[];
}
else{
    taskObj = JSON.parse(webtask);
}
let html = ''; 
let addedtodolist = document.getElementById("addedtodolist");
taskObj.forEach((item,index) => {
    html += `
    <div class="ul" id="addedtodolist">
           <table>
          <tr>
            <th scope="row">${index+1}. </th>
            <td>${item} </td>
            
            
          </tr>
           </table>
            
            <div class="actions">
              
              <button  type="button" onclick="edittask(${index})" class="edit">Edit</button>
              <button  type="button" onclick="deleteitem(${index})"
        class="delete">Delete</button>
            </div>
              </div>

            </div>`;
    
});
addedtodolist.innerHTML = html;


}

// edit task
function edittask(index){
    let saveindex =document.getElementById("saveindex");
    let addtaskbtn =document.getElementById("addtaskbtn");
    let savetaskbtn =document.getElementById("savetaskbtn");
    saveindex.value= index;
    let webtask = localStorage.getItem("localtask");
    let taskObj= JSON.parse(webtask);
    todoinput.value = taskObj[index];
    addtaskbtn.style.display="none";
    savetaskbtn.style.display="block";
}
// savetask
let savetaskbtn =document.getElementById("savetaskbtn");
savetaskbtn.addEventListener("click",function(){
    let webtask = localStorage.getItem("localtask");
    let taskObj= JSON.parse(webtask);
    let saveindex =document.getElementById("saveindex").value;
    taskObj[saveindex]= todoinput.value;
    localStorage.setItem("localtask",JSON.stringify(taskObj));
    todoinput.value='';
    showtask();})

    // delete
    function deleteitem(index){
        let webtask = localStorage.getItem("localtask");
        let taskObj= JSON.parse(webtask);
        taskObj.splice(index,1);
        localStorage.setItem("localtask",JSON.stringify(taskObj));
        showtask();
    }

