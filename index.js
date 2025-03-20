const NewTarea = document.getElementById('newtarea');
const tareas = document.getElementById('tareas');

addEventListener('submit', (e) => {

    e.preventDefault();
    console.log(NewTarea.value);
    tareas.innerHTML += `<li id="tarea">${NewTarea.value}</li>
                        <button id="eliminar">Eliminar</button>
                        <button id="editar">Editar</button>`;
    NewTarea.value = '';

});

document.addEventListener('click', (e) => {
    if (e.target.id === 'eliminar') {
        e.target.parentElement.remove();
    }
    if (e.target.id === 'editar') {
        const tarea = document.getElementById('tarea');
        console.log(tarea);
        const nuevatarea = prompt('Editar tarea', tarea.innerHTML);
        tarea.innerHTML = nuevatarea;
    }
});