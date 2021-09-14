class Display {
    constructor(displayValorAnterior, displayValorActual) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculator = new Calculator();
        this.tipoOperacion = undefined;
        this.valorActual = "";
        this.valorAnterior = "";
        this.signos = {
            add: "+",
            substract: "-",
            multiply: "*",
            divide: "/"
        }
    }

    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    borrarTodo() {
        this.valorActual = "";
        this.valorAnterior = "";
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== "equals" && this.calculcar();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = "";
        this.imprimirValores();
    }



    agregarNumero(numero){
        if (numero === "." && this.valorActual.includes(".")) return
        this.valorActual = this.valorActual.toString() + numero; 
        this.imprimirValores();
    }

    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ""}`;  
    }   
    calculcar() {
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if( isNaN(valorActual) || isNaN(valorAnterior) ) return
        this.valorActual = this.calculator[this.tipoOperacion](valorAnterior, valorActual);
        
    }

} 