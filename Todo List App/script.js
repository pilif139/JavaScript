let btn = document.querySelector("#submitBtn");
let input = document.querySelector("#todo");

function edit(parent){
    let x;
    if(parent.classList.contains("editing")){
        parent.classList.remove("editing")
        x = parent.childNodes[0].childNodes[0].value;
        if(x== ''){
            x="No Task";
        }
        parent.innerHTML = `<div>${x}</div> <div><button type="button" class="removeLi" onclick="remove(this.parentElement.parentElement,this)">REMOVE</button> <button type="button"  class="editLi" onclick="edit(this.parentElement.parentElement)">EDIT</button></div>`
        
        
    }
    else if(!parent.classList.contains("removed_item")){
        let val = parent.textContent;
        parent.innerHTML = `<div><input type="text" value=${val}> 
        </div><div><button type="button" class="removeLi" onclick="remove(this.parentElement.parentElement,this)">REMOVE</button> <button type="button"  class="editLi" onclick="edit(this.parentElement.parentElement)">EDIT</button></div>`
        parent.classList.add("editing")
    }
}

function remove(parent, button){
    if(parent.classList.contains("removed_item")){
        parent.classList.remove("removed_item")
        button.textContent = "REMOVE"
    }
    else if(!parent.classList.contains("editing")){ 
        parent.classList.add("removed_item")

        button.textContent = "UNREMOVE"
    }
}


btn.addEventListener("click", function(){
    if(input.value == ''){
        input.classList.add("error");
    }else{
        document.querySelector("main > h2").style.display = "block";
        input.classList.remove("error");
        let li = document.createElement("div");
        li.classList.add("todo_element");
        li.innerHTML = `<div>${input.value}</div> <div><button type="button" class="removeLi" onclick="remove(this.parentElement.parentElement, this)">REMOVE</button> <button type="button"  class="editLi" onclick="edit(this.parentElement.parentElement)">EDIT</button></div>`
        document.querySelector("#todo_list").append(li);

        //jquery nie dziala
        li.style.display = "none";
        jQuery(li).slideDown(250, console.log("done"));
        jQuery("main > h2").slideDown(250)
    }
});

