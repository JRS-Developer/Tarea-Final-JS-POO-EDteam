// Es buena practica colocar las clases en archivos individuales
// Hay que importar las clases

import Curso from './classes/Curso.js'
import Profesor from './classes/Profesor.js'
import Alumno from './classes/Alumno.js'


// Almacenando el elemento con el ID cursos
const elem = document.getElementById('cursos')

// Imprime un curso en el DOM
// Recibe un objeto de tipo Curso
function mostrarCurso(curso) {
    const hijo = document.createElement('div') //Crea un elemento div
    hijo.classList.add('card') //añade una clase card
    hijo.innerHTML = `
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="${curso.getPoster()}" alt="${curso.getNombre()}">
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
    <h3 class="t5 s-mb-2 s-center">
    ${curso.getNombre()}
    </h3>
    </div>
    <div class="s-mb-2 s-main-center">
        <span class="small">Numero de clases: ${curso.getClases()}</span>
      </div>
    </div>
    `
    elem.appendChild(hijo)
}

const formCursos = document.getElementById('formCursos')

// Escucha el clic del boton del formulario, almacena el target del evento y crea un nuevo objeto curso con su valor(value) y lo muestra con la funcion mostrarCurso.
formCursos.addEventListener('submit', function(event){
    event.preventDefault() //Evita que el evento de submit se ejecute.
    const target = event.target
    const curso = new Curso(target.NombreCurso.value, target.PosterCurso.value,target.ClasesCurso.value)
    mostrarCurso(curso) //Magia :O
})
// No se guardan los cursos que pongamos en el formlario, para eso necesitamos una base de datos que las almacede, proximo curso tal vez.



// Clases para Usuarios (Profesor y Alumno)

const alumno1 = new Alumno('Jose', 'Sanchez', "jose@gmail.com", true, ['HTML', 'CSS'])
const alumno2 = new Alumno('Carlos', 'Miguenez', "carlosm@gmail.com", true, ['HTML', 'CSS'])

const html = new Curso('HTML desde cero', 'poster.png', 7)

html.getInscritos().push(alumno1)
html.getInscritos().push(alumno2)
console.log(html.getInscritos())