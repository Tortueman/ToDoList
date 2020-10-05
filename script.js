document.addEventListener('DOMContentLoaded', function(){
    
    let addButton = document.querySelector("#plus");


    addButton.addEventListener("click", function() {

        let newItem = document.getElementById("liste").value;

        if (newItem) {

            addItemTodo(newItem);
  
            document.getElementById("liste").value = "";
        }
    });
 

    function addItemTodo(text) {

        let list = document.getElementById("todo");
 
        let item = document.createElement('li');
      
        item.innerText = text;

        let buttons = document.createElement('div');
        buttons.classList.add("buttons");


        let remove = document.createElement('button');
        remove.classList.add('remove');

        remove.addEventListener("click", removeItem);

   
    
    }


    function removeItem() {
        
        let item = this.parentNode.parentNode;

        let parent = item.parentNode;

        parent.removeChild(item);
    }
})