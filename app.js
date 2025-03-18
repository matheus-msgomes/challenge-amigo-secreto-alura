        let amigos = [];

        function adicionarAmigo() {
            let nomeInput = document.getElementById("amigo");
            let nome = nomeInput.value.trim();

            if (nome === "") {
                alert("Por favor, insira um nome.");
                return;
            }

            amigos.push(nome);
            atualizarLista();
            nomeInput.value = "";
        }

        function atualizarLista() {
            let lista = document.getElementById("listaAmigos");
            lista.innerHTML = "";
            amigos.forEach(nome => {
                let li = document.createElement("li");
                li.textContent = nome;
                lista.appendChild(li);
            });
        }

        function sortearAmigo() {
            if (amigos.length === 0) {
                alert("A lista está vazia! Adicione nomes antes de sortear.");
                return;
            }
            let indiceSorteado = Math.floor(Math.random() * amigos.length);
            let amigoSorteado = amigos[indiceSorteado];
            document.getElementById("resultado").textContent = "Amigo Secreto: " + amigoSorteado;
        }
