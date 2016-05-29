function sessionStore() {
    LoadFromStorage();

    var btnAdd = document.getElementById("btnAdd");
    var btnClear = document.getElementById("btnClear");

    btnAdd.onclick = function() {
        var form = document.getElementById("form");
        console.log(form);
        var getKey = document.getElementById("toStorageKey").value;
        var getVal = document.getElementById("toStorageValue").value;
        var error = document.createElement("p");
        if(getKey && getVal) {
            sessionStorage.setItem(getKey,getVal);
            if(document.getElementById("errorMessage")) {
                form.removeChild(document.getElementById("errorMessage"));
            }
            form.reset();
            LoadFromStorage();
        } else {
            error.id = "errorMessage";
            error.innerText = "Please enter both key and value";
            error.style.color = "red";
            error.style.margin = "0";
            form.appendChild(error);
        }

    };


    btnClear.onclick = function() {
        sessionStorage.clear();
        LoadFromStorage();
    };



    function LoadFromStorage() {
        var storageDiv = document.getElementById("storage");
        var table = document.createElement("table");
        table.className = "table";
        table.id = "storageTable";
        table.style.borderColor = "black";
        table.style.boxShadow = "1px 1px 4px black";
        table.style.border = "1px solid #ddd";
        if(sessionStorage.length>0) {
            var row = document.createElement("tr");
            var keyHead = document.createElement("th");
            var valHead = document.createElement("th");
            var thead = document.createElement("thead");
            keyHead.innerText = "Key";
            valHead.innerText = "Value";
            row.appendChild(keyHead);
            row.appendChild(valHead);
            thead.appendChild(row);
            table.appendChild(thead);
            var tbody = document.createElement("tbody");
            for(var i=0; i<sessionStorage.length; i++) {
                var row = document.createElement("tr");
                var key = document.createElement("td");
                var val = document.createElement("td");
                key.innerText = sessionStorage.key(i);
                val.innerText = sessionStorage.getItem(key.innerText);
                row.appendChild(key);
                row.appendChild(val);
                tbody.appendChild(row);
            }
            table.appendChild(tbody);
        } else {
            var row = document.createElement("tr");
            var msg = document.createElement("td");
            msg.innerText = "No data in Local Storage";
            row.appendChild(msg);
            table.appendChild(row);
        }

        var storageTable = document.getElementById("storageTable");
        if(storageTable) {
            storageDiv.removeChild(storageTable);
            storageDiv.appendChild(table);
        } else {
            storageDiv.appendChild(table);
        }
    }
}