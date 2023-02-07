var todo = document.body.childNodes;

todo.forEach(nodo => {
    if (nodo.nodeType != 3 && nodo.hasChildNodes) {
        document.body.innerHTML += nodo.nodeName + "<br>"
        if (nodo.hasChildNodes) {
            var hijos = nodo.childNodes;
            hijos.forEach(hijo => {
                if (hijo.nodeType != 3) {
                    document.body.innerHTML += "<ul>" + hijo.nodeName + "</ul>";                    
                }
                if (hijo.hasChildNodes) {
                    var nietos = hijo.childNodes;
                    nietos.forEach(nieto => {
                        if (nieto.nodeType != 3) {
                            document.body.innerHTML += "<ul><ul>" + nieto.nodeName + "</ul></ul>";
                        }
                    });
                }
            })
        }}});