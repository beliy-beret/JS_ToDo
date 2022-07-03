function createTask(){
    let newDiv = document.createElement("div");
    newDiv.className = "task";        
    let divTask = document.getElementById("left");    
    let taskHeader = document.createElement("h2");
    taskHeader.style.float = 'left';
    taskHeader.style.maxwidth = '470px';
    taskHeader.style.padding = '0px 20px';     
    let header = document.getElementById("input").value;
    let txtHeader = document.createTextNode(header);
    let taskDescription = document.createElement("p");
    taskDescription.style.padding = '0px 20px 20px 20px';
    taskDescription.style.color = '#8993ad';
    let description = document.getElementById("description").value;
    let txtDescription = document.createTextNode(description);
    let HR = document.createElement("hr");
    HR.style.backgroundColor = '#f7f7f7';
    HR.style.clear = 'both';
    let Del = document.createElement("button");
    Del.style.width = '20px';
    Del.style.height = '20px';
    Del.style.float = 'left';
    Del.style.margin = '23px 20px';
    Del.style.border = '0';
    Del.style.backgroundColor = 'white';
    Del.style.backgroundImage = 'url(img/clearButton.png)';
    Del.style.backgroundRepeat = 'no-repeat';
    Del.style.backgroundSize = '13px';    
    let Roll = document.createElement("button");
    Roll.style.height = '20px';
    Roll.style.width = '20px';
    Roll.style.float = 'right';
    Roll.style.border = '0';
    Roll.style.backgroundColor = 'white';
    Roll.style.outline = 'none';
    Roll.style.margin = '23px 20px';
    Roll.style.backgroundImage = 'url(img/arrow.png)';
    Roll.style.backgroundRepeat = 'no-repeat';
    Roll.style.backgroundSize = '10px';
    
    taskHeader.appendChild(txtHeader);
    taskDescription.appendChild(txtDescription);
    newDiv.appendChild(taskHeader);
    newDiv.appendChild(Del);
    newDiv.appendChild(Roll);
    newDiv.appendChild(HR);
    newDiv.appendChild(taskDescription);        
    divTask.appendChild(newDiv);
    Del.onclick = function() {
        divTask.removeChild(newDiv);
    };
    Roll.onclick = function() {
        taskDescription.style.display = (taskDescription.style.display == 'none') ? '' : 'none'
    };
};

