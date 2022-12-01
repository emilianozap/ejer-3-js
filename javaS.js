
const pizzas = [{
    id:1,
    nombre: "pizza muzza",
    ingredientes: ["salsa", "muzza"],
    precio: "500",
    imagen: "./assets/img/imagen1.png",
},{
    id:2,
    nombre: "pizza fugazata",
    ingredientes : ["muzza", "cebolla"],
    precio: "1500",
    imagen: "./assets/img/imagen2.png",
},{
    id:3,
    nombre: "pizza napolitana",
    ingredientes: ["salsa", "muzza", "jamon"],
    precio: "1900",
    imagen: "./assets/img/imagen3.png",
},{
    id:4,
    nombre: "pizza anchoas",
    ingredientes: ["salsa", "muzza", "anchoas"],
    precio: "1200",
    imagen: "./assets/img/imagen4.png",
},{
    id:5,
    nombre: "pizza morron",
    ingredientes: ["salsa", "muzza", "morron"],
    precio: "1600",
    imagen: "./assets/img/imagen5.png",
},{
    id:6,
    nombre: "pizza panceta",
    ingredientes: ["salsa", "muzza", "panceta"],
    precio: "1400",
    imagen: "./assets/img/imagen6.png",
},
];
/* elementos del html */
const contenedor = document.getElementById("container-Pizza")
const form = document.getElementById("form")
const input = document.getElementById("input")


/* localStorage */


let pizza = JSON.parse(localStorage.getItem ("pizza")) || []

const savePedido = (pedido) => localStorage.setItem("pizza", JSON.stringify(pedido))

const searchePizzaLs = (value) =>{
    pizzas.find(pizza => pizza.id === value)
   if(pizza === value){
    pizza = [
        id = pizzas.id,
        nombre = pizzas.nombre
    ]
   }
}


/* buscar en array */
const searchePizza = (value) => pizzas.find(pizza => pizza.id === value)


/* mensaje de error */
const showEmptyError  = () =>{
    contenedor.innerHTML = ` 
    <div class="error">
    <img class="imagenes-error" src="./assets/img/5741333.png" alt="error">
    <h2 class="erros-h2">ingrese un numero</h2>
</div>`
   
};

/* renderizar resultado */

const renderResult = (pizza) =>{
    if(!pizza){
    contenedor.innerHTML = `
    <div class= "error">
    <img class="imagenes-error" src="./assets/img/5741333.png" alt="error">
    <h2 class="erros-h2">el id no es valido ingrese uno correcto</h2>
    </div>
    `
    }else{
       contenedor.innerHTML =`
       <div class="result-container">
       <img class="imagenes-pizza" src=${pizza.imagen} alt="pizza 1">
       <p class= "ingredientes">ingredientes: ${pizza.ingredientes}</p>
       <h2 class="result-h2">${pizza.nombre}</h2>
            <h3 class="result-h2">$${pizza.precio}</h3>

        </div>
       ` 
    }

}



/* evento  */
const submitPizza = (e) =>{
    e.preventDefault();
    const pizzaValue = input.value;
    if(!pizzaValue){
        showEmptyError();
        return;
    }
    const serchedPizzan = searchePizza(Number (pizzaValue))
    savePedido(pizza)
    renderResult(serchedPizzan);
    form.reset();
};



/* funcion de inicio */
const init = () =>{
    form.addEventListener("submit", submitPizza)
}
init()