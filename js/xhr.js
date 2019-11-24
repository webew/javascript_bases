let xhr = new XMLHttpRequest();

xhr.open("get", "datas/datas.json",true);

xhr.addEventListener("load",function(evt){
    console.log(this.response);
    console.log(JSON.parse(this.response));
    
});

xhr.send();