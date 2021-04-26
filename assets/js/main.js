function criaCalculadora() {
    return {

        display: document.querySelector('.display'), // seleciona o display
        historico: document.querySelector('.historico'),

        inicia() {
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {  //função que calcula quando o enter é pressionado
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();
                }
            });
        },

        clearDisplay() { //função que limpa o display
            this.display.value = '';
        },
        apagaUm() { //função que apaga o ultimo digito
            this.display.value = this.display.value.slice(0, -1);
        },
        realizaConta() { //função que realiza a conta
            let conta = this.display.value;
            let textoConta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta) {
                    alert('Conta invalida');
                    return;
                }

                this.display.value = conta;
                this.historico.innerHTML += `<p>${textoConta} = ${conta}<p>`;

            } catch (e) {
                alert('Conta invalida');
                return;
            }
        },

        cliqueBotoes() { //evento ao clicar nos botoes
            //this - > calculadora
            document.addEventListener('click', function (e) { //captura o clique na tela
                const el = e.target;
                if (el.classList.contains('btn-num')) { //se o click for nos botoes de numero...
                    this.btnParaDisplay(el.innerText); //this para referenciar chave dentro do objetop
                    //         InnerText pega o que está dentro do botão
                }
                if (el.classList.contains('btn-clear')) { //se o click for no botão de limpar
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) { //se o click for nos botão de delete
                    this.apagaUm();
                }
                if (el.classList.contains('btn-eq')) { //se o click for nos botão de resultado
                    this.realizaConta();

                }
                this.display.focus(); // para quando você der enter, não voltar para o ultimo numero clicado
            }.bind(this)); // para usar o this de fora (calculadora) e não o this do document.
        },

        btnParaDisplay(valor) { //função para mostrar o valor no display
            this.display.value += valor;
        }

    };
}

const calculadora = criaCalculadora();
calculadora.inicia(); //inicia a calculadora