/*Variável para o filtro de categorias se comunicar com o de preço */
var categoria = "todos"

function mostrarCategoria(categ) {
    let elementos = document.getElementsByClassName('box_produto');
    for (i = 0; i < elementos.length; i++) {
        if (elementos[i].id == categ) {
            elementos[i].style = "display:inline-block"
        } else {
            elementos[i].style = "display:none"
        }
    }
    categoria = categ
}

function mostrarTodos() {
    let elementos = document.getElementsByClassName('box_produto');
    for (i = 0; i < elementos.length; i++) {
        elementos[i].style.display = "inline-block"
    }
    categoria = "todos"
}

function destaque(div) {
    let imgInside = div.getElementsByTagName("img")[0]

    if (imgInside.style.width == "240px") {
        imgInside.style.width = "120px"
        div.style.fontWeight = 400
    } else {
        imgInside.style.width = "240px"
        div.style.fontWeight = 900
    }
}

function enviar() {
    let mensagem = document.getElementById("mensagem")
    let nome = document.getElementById("nomemsg")
    if (mensagem.value == "" || nome.value == "") {
        alert("Você deve preencher todos os campos para a sua mensagem ser enviada")
    } else {
        alert("Sua mensagem foi enviada, obrigado pelo contato.")
    }
}


/*A função primeiro põe display inline block em todos os elementos usando como base a variável categoria 
para saber o último filtro usado, para depois verificar novamente usando o preço como base*/
function filtrarPreco(min, max, categoria) {
    if (categoria == "todos") {
        let elementos = document.getElementsByClassName('box_produto');
        for (i = 0; i < elementos.length; i++) {
            elementos[i].style = "display:inline-block"
        }

        let novo = document.getElementsByClassName('novo');
        for (i = 0; i < novo.length; i++) {
            /*bloco para converter o preço em número*/
            let precoComZero = novo[i].innerHTML.slice(3, novo[i].innerHTML.length)
            let precoSemZero = precoComZero.slice(0, precoComZero.length - 3)
            let precoCalculo = parseInt(precoSemZero.replace(".", ""))
            /*---------------------------------------------------------------------- */
            if (precoCalculo >= min && precoCalculo <= max && novo[i].parentElement.style.display == "inline-block") {
                novo[i].parentElement.style.display = "inline-block"
            } else {
                novo[i].parentElement.style.display = "none"
            }
        }

    } else {
        let elementos = document.getElementsByClassName('box_produto');
        for (i = 0; i < elementos.length; i++) {
            if (elementos[i].id == categoria) {
                elementos[i].style = "display:inline-block"
            } else {
                elementos[i].style = "display:none"
            }
        }

        let novo = document.getElementsByClassName('novo');
        for (i = 0; i < novo.length; i++) {
            let precoComZero = novo[i].innerHTML.slice(3, novo[i].innerHTML.length)
            let precoSemZero = precoComZero.slice(0, precoComZero.length - 3)
            let precoCalculo = parseInt(precoSemZero.replace(".", ""))
            if (precoCalculo >= min && precoCalculo <= max && novo[i].parentElement.style.display == "inline-block") {
                novo[i].parentElement.style.display = "inline-block"
            } else {
                novo[i].parentElement.style.display = "none"
            }
        }
    }
}
