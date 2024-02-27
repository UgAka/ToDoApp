
 
 
function displayDate() {
     let date = new Date();
     date = date.toString().split(" ")
     document.querySelector("#demo").innerHTML = date[1] + " " + date[2] + " " + date[3];


}
let todos = [];
window.onload = function () {
     displayDate();
     filterTasks();
     
}

//Add tasks
const taskin = document.getElementById("taskin");
function addTask() {

     
     const taskText = taskin.value;
     if (taskText !== '') {
          const item = document.createElement('div');
          item.classList.add("items");
          const content = document.createElement('p');
          content.setAttribute("id", 'content');
          const input = document.createElement("input");
          input.setAttribute("id", "taskCheckbox");
          input.type = "checkbox"
          input.addEventListener('change', () => {
               toggleChecked(input, spanl);
          });
          const spanl = document.createElement("span");
          spanl.classList.add("task-text");
          spanl.innerText = taskText;
          const action = document.createElement('span');
          action.classList.add("actions");

          // edit button
          const editb = document.createElement("button");
          editb.classList.add("edit");
          editb.textContent = "Edit";
          editb.style.backgroundColor = "green";
          editb.style.color = "white";

          // delete button
          const deleteb = document.createElement("button");
          deleteb.setAttribute("id", "delete");
          deleteb.textContent = "Delete";
          deleteb.style.backgroundColor = "red";
          deleteb.style.color = "white";

          //  append children
          content.appendChild(input);
          content.appendChild(spanl);
          item.appendChild(content);
          action.appendChild(editb);
          action.appendChild(deleteb);
          content.appendChild(action);
          const container = document.getElementById("taskss");
          container.appendChild(item);
       
      
          taskin.value = "";

          // delete task
          deleteb.addEventListener('click', () => {
               item.remove();

          });

          //edit task
          editb.addEventListener('click', () => {
               const nText = prompt("Edit task:" + taskText);
               if (nText !== "") {
                    spanl.innerHTML = nText;
               }
          });

       

     }

}
//Filter tasks
function filterTasks() {
     const taskFilter = document.getElementById("taskFilter").value;
     const tasks = document.getElementsByClassName("items");
 
     for (const task of tasks) {
         switch (taskFilter) {
             case "all":
                 task.style.display = "block";
                 break;
             case "completed":
                 const checkbox = task.querySelector("#taskCheckbox");
                 task.style.display = checkbox.checked ? "block" : "none";
                 break;
             case "uncompleted":
                 const checkboxUncompleted = task.querySelector("#taskCheckbox");
                 task.style.display = checkboxUncompleted.checked ? "none" : "block";
                 break;
             default:
                 break;
         }
     }
 }
 
 