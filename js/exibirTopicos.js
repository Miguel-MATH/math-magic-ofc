function ApresentarTopicos() {
    let ListaMaterias = document.getElementsByClassName("Materias")
    let ListaDeTopicos = [];
    for (let i = 0; i < ListaMaterias.length; i++) {
        if (ListaMaterias[i].checked == true) {
            if (ListaMaterias[i].value == "GEO") {
                for (let b = 0; b < Topicos.Geo.length; b++) {
                    ListaDeTopicos[ListaDeTopicos.length] = Topicos.Geo[b]
                }
            }
            if (ListaMaterias[i].value == "ALG") {
                for (let b = 0; b < Topicos.Alg.length; b++) {
                    ListaDeTopicos[ListaDeTopicos.length] = Topicos.Alg[b]
                }
            }
            if (ListaMaterias[i].value == "TN") {
                for (let b = 0; b < Topicos.Tn.length; b++) {
                    ListaDeTopicos[ListaDeTopicos.length] = Topicos.Tn[b]
                }
            }
            if (ListaMaterias[i].value == "COMB") {
                for (let b = 0; b < Topicos.Comb.length; b++) {
                    ListaDeTopicos[ListaDeTopicos.length] = Topicos.Comb[b]
                }
            }
        }
    }
    if (ListaDeTopicos.length != 0) {

        let ListaTopicos = document.getElementById("listaTopicos")
        ListaTopicos.innerHTML = "";
        let LabelTodos = document.createElement("label");
        LabelTodos.className = "filter-option filter-select-all";

        let CheckboxTodos = document.createElement("input");
        CheckboxTodos.id = "TodosTopicos";
        CheckboxTodos.className = "form-check-input";
        CheckboxTodos.type = "checkbox";
        CheckboxTodos.name = "Topicos";

        LabelTodos.appendChild(CheckboxTodos);

        CheckboxTodos.onclick = function () {
            SelectAll(this, document.getElementsByClassName("Topicos"));
        };

        LabelTodos.append(" Todos os Tópicos");

        ListaTopicos.appendChild(LabelTodos);
        for (let i = 0; i < ListaDeTopicos.length; i++) {
            let LabelPrincipal = document.createElement("label");
            LabelPrincipal.className = "filter-option";

            let CheckboxPrincipal = document.createElement("input");
            CheckboxPrincipal.className = "form-check-input Topicos";
            CheckboxPrincipal.type = "checkbox";
            CheckboxPrincipal.name = "Topicos";
            CheckboxPrincipal.value = ListaDeTopicos[i];
            CheckboxPrincipal.onclick = function () {
                UpdateSelectAll(document.getElementById('TodosTopicos'), document.getElementsByClassName('Topicos'));
            };

            LabelPrincipal.appendChild(CheckboxPrincipal);
            LabelPrincipal.append(ListaDeTopicos[i]);

            ListaTopicos.appendChild(LabelPrincipal);
        }
    } else {
        let ListaTopicos = document.getElementById("listaTopicos")
        ListaTopicos.innerHTML = "";
        let LabelAviso = document.createElement("label");
        LabelAviso.className = "filter-option";
        LabelAviso.innerHTML = "Selecione pelo menos um Matéria";

        ListaTopicos.appendChild(LabelAviso);
    }
}