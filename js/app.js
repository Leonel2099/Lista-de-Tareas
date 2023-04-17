const formulario = document.querySelector("form");
formulario.addEventListener("submit", cargarLista);

function cargarLista(e) {
  e.preventDefault();
  let contador = 0;
  let tarea = document.getElementById("tarea").value;
  formulario.reset();
  let lista = document.querySelector("ul");
  let tareaAgregar = document.createElement("li");
  tareaAgregar.className = 'list-group-item'
  tareaAgregar.innerHTML = `<div class="d-flex justify-content-between">
  <p class="m-0 py-1">
    ${tarea}
  </p>
  <button class="btn btn-outline-danger">
      <i class="bi bi-trash"></i>
  </button>
</div>`;
  lista.append(tareaAgregar);
  let eliminar = document.getElementById("btnEliminar");
  eliminar.addEventListener("click", () => {
    lista.removeChild(tareaAgregar);
  });
}
