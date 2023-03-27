document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please enter a task");
  } else {
    document.querySelector("#tasks").innerHTML += `
      <div class="task">
        <input type="checkbox" id="toggle">
        <span id="taskname">
          ${document.querySelector("#newtask input").value}
        </span>
        <button class="delete">
          <i class="far fa-trash-alt"></i>
        </button>
      </div>
    `;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};

const div = document.getElementsByClassName("task");

div.addEventListener("click", (event)=>{
  if(event.target.tagName==='input'){
    console.log(done);
  }
})

// const checkbox=document.getElementById("toggle");
// checkbox.addEventListener('change', e=>{
//   if(e.target.checked===true){
//     console.log("checkbox is checked - boolean value: ", e,target.checked);
//   }else if(e.target.checked===false){
//     console.log("checkbox is not checked - boolean value: ", e.target.checked);
//   }
// });

// document.addEventListener("click", function (e){
//   const complete = e.target.closest("#toggle");
//   if (complete.checked===true){
//     var taskname = document.getElementById("#taskname");
//     taskname.style.textDecorationLine="line-through";
//   }
// });