 var firebaseConfig = {
    apiKey: "AIzaSyBVYaF0i5FmHKqq_F65QrFVyHiz7C5D7hU",
    authDomain: "to-do-application-c74f1.firebaseapp.com",
    projectId: "to-do-application-c74f1",
    storageBucket: "to-do-application-c74f1.firebasestorage.app",
    messagingSenderId: "1020020565647",
    appId: "1:1020020565647:web:d5e64fe155349fa03232fa"
  };
var app = firebase.initializeApp(firebaseConfig);
var db = firebase.database();


var getInput =document.getElementById('todoInput');

function todoAdd(){
    if(getInput.value === ""){
        Swal.fire("Input is Empty");
    } else{
      
      var id = Math.floor(Math.random()*123456789);
     
      

       var user_obj={
         user_id:id,
        user_task: getInput.value,

       };
      firebase.database().ref("users_Todo/"+id).set(user_obj);
       

       


    }
  
  }
    
    firebase.database().ref("users_Todo").on("child_added",function(data){
        var dataget =data.val().user_task;
        var id = data.val().user_id;
        

        var todoList = document.getElementById('list');
        var liElement = document.createElement("li");
        var liText = document.createTextNode(dataget);
        liElement.setAttribute("id", id);
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
      
    })
    

function todoDelete(){
    var list = document.getElementById("list");
    list.innerHTML = "";
     firebase.database().ref("users_Todo").remove();
}
function deleteSingleItem(btn) {
   var li = btn.parentNode;
      var id = li.getAttribute("id");
      firebase.database().ref("users_Todo/" + id).remove();
      li.remove();
    }

  

 
  
  function editSingleItem(btn) {
  
  var li = btn.parentNode;
      var id = li.getAttribute("id");
      var oldValue = li.firstChild.nodeValue;
      var updatedValue = prompt("Enter updated value", oldValue);

      if (updatedValue === null || updatedValue.trim() === "") return;

      firebase.database().ref("users_Todo/" + id).update({
        user_task: updatedValue,
      });

      li.firstChild.nodeValue = updatedValue;


  
}