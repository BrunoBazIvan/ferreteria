class Producto {
    constructor (idProducto, imgProducto, nombreProducto, descripcionProducto, claseProducto, precio){
        this.idProducto = idProducto;
        this.imgProducto = imgProducto;
        this.nombreProducto = nombreProducto;   
        this.descripcionProducto = descripcionProducto;
        this.claseProducto = claseProducto;
        this.precio = precio;
    }
}   

let productoHerramienta = [];

let martillo = new Producto(1, 'https://img.freepik.com/vector-gratis/diseno-etiqueta-martillo-garra-aislado_1308-61820.jpg', 'Martillo', 'excelente martillo para golpear cosas', 'martillos', 579);
let cierra = new Producto(2, 'https://static.vecteezy.com/system/resources/previews/014/486/465/non_2x/hand-saw-icon-cartoon-style-vector.jpg', 'Sierra', 'excelente cierra para cortar cosas', 'Sierras', 1300);
let pala = new Producto(3, 'https://i.pinimg.com/736x/c6/8c/7f/c68c7f48eb415ddfc96c4974e00796e8.jpg', 'Pala', 'excelente cierra para cabar hoyos', 'palas', 1500);
let hacha = new Producto(4, 'https://previews.123rf.com/images/perysty/perysty1401/perysty140100017/24932896-mano-dibujada-bosquejo-ilustraci%C3%B3n-de-dibujos-animados-de-hacha.jpg', 'Hacha', 'excelente cierra para cortar leña', 'hachas', 2000);
let destornillador= new Producto(5, 'https://static.vecteezy.com/system/resources/previews/014/465/995/non_2x/screwdriver-icon-cartoon-style-vector.jpg', 'Destornillador', 'excelente cierra para destorinillar o tornillar', 'destornilladores', 100);

productoHerramienta.push(martillo, cierra,pala,hacha,destornillador);

const contenedorHerramientas = document.getElementById('containerHerramientas');

let mostrarProductos = () => {
    contenedorHerramientas.innerHTML = "";
    productoHerramienta.forEach((producto) => {
        const div = document.createElement("div");
        div.innerHTML = `
            <div class="card text-center articulo ${producto.claseProducto}">
              <img src="${producto.imgProducto}" class="card-img-top" alt="${producto.nombreProducto}">
              <div class="card-body">
                <h5 class="card-title">${producto.nombreProducto}</h5>
                <p class="card-text">${producto.descripcionProducto}</p>
                <p> $${producto.precio}</p>
                <button id="${producto.idProducto}" class="btn btn-primary" data-id="5">Añadir al carrito</button>
              </div>
            </div>
        `;
        contenedorHerramientas.appendChild(div);
    });
} 
mostrarProductos();

