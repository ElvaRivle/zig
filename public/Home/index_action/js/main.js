function add_goal() {

    let text = document.getElementById("goalText").value;
    document.getElementById("goalText").innerHTML = "";
    if (text === "") {
        alert("Ne možete unijeti prazan text");
        return;
    }

    let ajax = new XMLHttpRequest();


    ajax.onreadystatechange = () => {
        console.log(ajax.readyState);

        if (ajax.readyState == 4) {
            if (ajax.status === 200) {
                if (ajax.responseText == "NIJE USPJELO"){
                    alert("Greška na serveru. Pokušajte kasnije");
                    return;
                }
                let node = document.createElement("div");
    
                node.className = "dailyGoal";
                node.innerHTML = text;  

                document.getElementById("main").appendChild(node);
                document.getElementById("goalText").value = "";
                
            }
            else {
                alert("Greška na serveru. Pokušajte kasnije");
            }
        }
    }

    //SEND USER ENETERED TEXT AND FORMAT SEND/RECIEVE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
    //SEND LOGGED IN UNAME (LATER IN PROJECT)
    ajax.open("POST", "/moji-ciljevi/Home/add_goal/rusko/Kupiti!auto/daily");
    ajax.send();






/*
    //ovo ubaci u if gore, ako pritisneš da ajaxom obrišeš iz baze

    node.onclick = function() {
        //text-decoration: line-through;
        node.style.textDecoration = "line-through";
        node.style.color = "olive";

        setTimeout(function() {
            node.remove();
            //add deletition from database as well
        }, 300);
    }*/

    
    //alert(text);
}
