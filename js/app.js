const formulario = document.querySelector("form");
formulario.addEventListener("submit", cargarLista);
let lista = document.querySelector("ul");
function cargarLista(e) {
  e.preventDefault();
  let contador = 0;
  let tarea = document.getElementById("tarea").value;
  formulario.reset();

  let tareaAgregar = document.createElement("li");
  tareaAgregar.className = "list-group-item";
  tareaAgregar.innerHTML = `<div class="d-flex justify-content-between">
  <p class="m-0 py-1">
    ${tarea}
  </p>
  <button class="btn btn-outline-danger" onclick="eliminar()">
      <i class="bi bi-trash"></i>
  </button>
</div>`;
  if (tarea != "") {
    lista.append(tareaAgregar);
  }
}
function eliminar() {}
