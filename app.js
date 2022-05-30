let {argv} = require('process'); 
let {listar, agregar} = require("./tareas")


switch (argv[2]) {
    case 'listar':
        console.log("Listado de tareas\n----------------");
        listar();
        break;
    case 'agregar':
        let titulo = argv[3]
        let estado = argv[4]
        console.log(agregar(titulo,estado));
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción :\n-listar\n-agregar");
        break;
    default:
        console.log("No entiendo qué quieres hacer");
        break;
}