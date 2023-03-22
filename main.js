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
  
  const complete = document.querySelector("#toggle");
  if(complete.checked){
    // document.getElementById("#taskname").style.textDecorationLine="line-through";
    console.log("complete");
  }
};
