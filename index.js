// Definindo a classe Sensor
class Sensor {
    constructor(nome, limiteSuperior) {
        this.nome = nome; // Nome do sensor
        this.ligado = false; // Estado inicial do sensor (desligado)
        this.valor = 0; // Valor inicial do sensor
        this.limiteSuperior = limiteSuperior; // Limite superior do sensor
    }

    // Método para ligar o sensor
    ligar() {
        if (!this.ligado) { // Verifica se o sensor não está ligado
            console.log(`O sensor ${this.nome} foi ligado.`); // Exibe uma mensagem indicando que o sensor foi ligado
            this.ligado = true; // Atualiza o estado do sensor para ligado
        } else {
            console.log(`O sensor ${this.nome} já está ligado.`); // Exibe uma mensagem indicando que o sensor já está ligado
        }
    }

    // Método para desligar o sensor
    desligar() {
        if (this.ligado) { // Verifica se o sensor está ligado
            console.log(`O sensor ${this.nome} foi desligado.`); // Exibe uma mensagem indicando que o sensor foi desligado
            this.ligado = false; // Atualiza o estado do sensor para desligado
        } else {
            console.log(`O sensor ${this.nome} já está desligado.`); // Exibe uma mensagem indicando que o sensor já está desligado
        }
    }

    // Método para atualizar o valor do sensor
    atualizarValor(valor) {
        if (this.ligado) { // Verifica se o sensor está ligado
            this.valor = valor; // Atualiza o valor do sensor
            console.log(`O valor do sensor ${this.nome} foi atualizado para ${this.valor}.`); // Exibe uma mensagem indicando que o valor do sensor foi atualizado

            // Verifica se o valor excede o limite superior e emite um alerta se necessário
            if (this.valor > this.limiteSuperior) {
                console.log(`ALERTA: O valor do sensor ${this.nome} excedeu o limite superior (${this.limiteSuperior}).`);
            }
        } else {
            console.log(`O sensor ${this.nome} está desligado. Não é possível atualizar o valor.`); // Exibe uma mensagem indicando que o sensor está desligado
        }
    }
}

// Criando instâncias de sensores com limites
const sensorMovimento = new Sensor('Movimento', 50); // Cria um novo sensor de movimento com limite de 50
const sensorTemperatura = new Sensor('Temperatura', 30); // Cria um novo sensor de temperatura com limite de 30

// Testando a lógica de ligar e desligar os sensores
sensorMovimento.ligar(); // Liga o sensor de movimento
sensorMovimento.atualizarValor(60); // Atualiza o valor do sensor de movimento (deve emitir um alerta)
sensorMovimento.desligar(); // Desliga o sensor de movimento
sensorMovimento.atualizarValor(40); // Tentando atualizar o valor novamente (deve exibir uma mensagem indicando que o sensor está desligado)

sensorTemperatura.ligar(); // Liga o sensor de temperatura
sensorTemperatura.atualizarValor(25); // Atualiza o valor do sensor de temperatura
sensorTemperatura.atualizarValor(35); // Tentando atualizar o valor novamente (deve emitir um alerta)
sensorTemperatura.desligar(); // Desliga o sensor de temperatura
