// Append a close button to each list item
var nodeList = document.getElementsByTagName("LI");
var i;

for(i = 0; i<nodeList.length; i++){
    var span = document.createElement("SPAN");
    var textNode = document.createTextNode("\u00D7");
    span.className = "close"
    span.appendChild(textNode);
    nodeList[i].appendChild(span);
}

    // Strike through text when clicked on
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
       
    })

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    
    for (i = 0; i < close.length; i++) {
        close[i].onclick = setTimeout(remove, 5000);
            function remove() {
            var div = this.parentElement;
            div.style.display = "none";
            }
    }



// Add a new list item when "Add task" button is clicked
function newTask(){
    var list = document.createElement('li');
    var input = document.getElementById("newTaskInput").value;
    var inputTxt = document.createTextNode(input);
    list.appendChild(inputTxt);
    if (input ==="") {
        alert("Please input a task!");
    }
    else{document.getElementById("tasks").appendChild(list)}

    var span = document.createElement("SPAN");
    var text = document.createTextNode("  \u00D7");
    span.className = "close";
    span.appendChild(text);
    list.appendChild(span);

    for(i=0; i< close.length; i++) {
        close[i].onclick = function(ev) {
            var div = this.parentElement;
            div.style.display = "none";
        } 
    }

    document.getElementById("newTaskInput").value='';
}

