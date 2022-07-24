
    document.addEventListener('keydown', function (event){
        if(event.key === 'a'){
            document.getElementById("div1").style.backgroundColor = "green"
        }else if(event.key === "s"){
            document.getElementById("div2").style.backgroundColor = "yellow"
        }else if(event.key === "d"){
            document.getElementById("div3").style.backgroundColor = "black"
        }
    })
