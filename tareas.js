let fs = require("fs")
let tareas = require("./data/tareas.json")
let modificar = (dato) => fs.writeFileSync("./data/tareas.json",JSON.stringify(dato,null,4),'utf-8')

module.exports = {
    listar : () => {
      for(let i=0; i<tareas.length; i++) {
        console.log(`${i+1}. ${tareas[i].titulo} - ${tareas[i].estado}`); 
      }
    },
    agregar: (titulo,estado) => {
        let task = {
            titulo,
            estado
        }
        tareas.push(task)
        modificar(tareas)
        return task
    }
}



