let btn = document.querySelector("#submitBtn");
let input = document.querySelector("#todo");

function edit(obj){
    let x;
    if(obj.classList.contains("editing")){
        obj.classList.remove("editing")
        x = obj.childNodes[0].value;
        obj.innerHTML = `${x} <div><button type="button" class="removeLi" onclick="remove(this.parentElement.parentElement)">REMOVE</button> <button type="button"  class="editLi" onclick="edit(this.parentElement.parentElement)">EDIT</button></div>`
        
    }
    else{
        let val = obj.textContent;
        obj.innerHTML = `<input type="text" value=${val}> <div><button type="button" class="removeLi" onclick="remove(this.parentElement.parentElement)">REMOVE</button> <button type="button"  class="editLi" onclick="edit(this.parentElement.parentElement)">EDIT</button></div>`
        obj.classList.add("editing")
    }
}

function remove(obj){
    if(obj.classList.contains("removed_item")){
        obj.classList.remove("removed_item")
        obj.childNodes[1].childNodes[0].textContent = "REMOVE"
    }
    else{
        obj.classList.add("removed_item")
        obj.childNodes[1].childNodes[0].textContent = "UNREMOVE"
    }
}


btn.addEventListener("click", function(){
    if(input.value == ''){
        input.classList.add("error");
    }else{
        input.classList.remove("error");
        let li = document.createElement("div");
        li.classList.add("todo_element");
        li.innerHTML = `${input.value} <div><button type="button" class="removeLi" onclick="remove(this.parentElement.parentElement)">REMOVE</button> <button type="button"  class="editLi" onclick="edit(this.parentElement.parentElement)">EDIT</button></div>`
        document.querySelector("#todo_list").append(li);

        //jquery
        li.style.display = "none";
        li.id = "id1";
        $("#id1").fadeIn(250);
        li.removeAttribute("id");
    }
});

