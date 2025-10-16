var getInput =document.getElementById('todoInput');
function todoAdd(){
    if(getInput.value === ""){
        Swal.fire("Input is Empty");
    } else{
       var todoList = document.getElementById('list');
       var liElement = document.createElement("li");
       var liText = document.createTextNode(getInput.value);
       liElement.appendChild(liText);
       todoList.appendChild(liElement);

        // delete button

      var delBtnElement = document.createElement("button");
      var delBtnText = document.createTextNode("Remove");
      delBtnElement.setAttribute("class","todobtn")
      
      delBtnElement.appendChild(delBtnText);
      delBtnElement.setAttribute("onclick", "deleteSingleItem(this)");
      liElement.appendChild(delBtnElement);

       // Edit button

      var editBtnElement = document.createElement("button");
      var editBtnText = document.createTextNode("Edit");
      editBtnElement.setAttribute("class","todobtn")

      editBtnElement.appendChild(editBtnText);
      editBtnElement.setAttribute("onclick", "editSingleItem(this)");
      liElement.appendChild(editBtnElement);
      getInput.value = "";
    }
}

function todoDelete(){
    var list = document.getElementById("list");
    list.innerHTML = "";
}
function deleteSingleItem(btn) {
  btn.parentNode.remove();
}

function editSingleItem(btn) {
  var updatedValue = prompt("enter updated Value");

  btn.parentNode.childNodes[0].data = updatedValue;
}