function Computadora(ram, cpu, disco, monitor, gpu){
this.ram = ram;
this.cpu = cpu;
this.disco = disco;
this.monitor = monitor;
this.gpu = gpu;
}

const pc = new Computadora("8gb","20mgh","ssd", "samsung", true)
const pc1 = new Computadora("10gb", "30mgh", "duro", "LG", false)
const pc2 = new Computadora("20gb", "40mgh", "ssd", "Mac", true)
const pc3 = new Computadora("30gb", "50mgh", "duro", "LG", true)
const pc4 = new Computadora("40gb", "60mgh", "duro", "Xiaomi", false)
 


const array = [pc, pc1, pc2, pc3, pc4]

console.log(array);
console.log(array.length);
const arrayGPU = array.filter(el => el.gpu)

console.log("pc con GPU", arrayGPU);

const calcularLitrosNafta = kilometros => 2 * kilometros / 100; 

const litrosPorKm = calcularLitrosNafta(500)

const calcularPrecioRecorrido = (litros, precio) => litros * precio;

console.log(calcularPrecioRecorrido(litrosPorKm, 200))