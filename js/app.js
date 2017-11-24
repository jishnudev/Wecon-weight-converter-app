document.querySelector(".convert").addEventListener("click", inData);
function inData(){
    var wapp = document.querySelector("#wapp").value;

        document.getElementById('output').innerHTML=`
         <ul id="items" class="collection with-header">
            <li class="collection-header"><h4>Kg to</h4></li>
            <li class="collection-item" id="ton">Ton<span> : ${wapp/1000}</span></li>
            <li class="collection-item" id="pounds">Pounds<span> : ${wapp*2.2046226218}</span></li>
            <li class="collection-item" id="ounces">Ounces<span> : ${wapp*35.27396195}</span></li>
            <li class="collection-item" id="grams">Grams<span> : ${wapp*1000}</span></li>
            <li class="collection-item" id="stones">Stones<span> : ${wapp*0.1574730444}</span></li>
         </ul>
        `
}
