//Datos de ejemplo
const IMG_HUESO = "https://genesistoxical.com/wp-content/uploads/2021/05/Hueso_animado_png.png";

// "imagen" de cada categoria
const categorias = {
  todos:  { nombre: "Todos",    color: "var(--primario)" },
  cafe:   { nombre: "Cafés",    color: "var(--c-cafe)" },
  parque: { nombre: "Parques",  color: "var(--c-parque)" },
  playa:  { nombre: "Playas",   color: "var(--c-playa)" },
  hotel:  { nombre: "Hoteles",  color: "var(--c-hotel)" },
  tienda: { nombre: "Comercio",  color: "var(--c-tienda)" },
};

const lugares = [
  { nombre: "Café Huellitas",       ciudad: "Santiago",     tipo: "cafe",   espacio: false, texto: "Terraza con agua para perros y snacks para mascotas." },
  { nombre: "Parque Ladrido",       ciudad: "Santiago",     tipo: "parque", espacio: true,  texto: "Zona cercada para correr sin correa y área de arena para sus necesidades." },
  { nombre: "Playa Colita Feliz",   ciudad: "La Serena",    tipo: "playa",  espacio: true,  texto: "Sector de playa permitido para mascotas, con basureros y bolsas." },
  { nombre: "Hotel Cuatro Patas",   ciudad: "Valparaíso",   tipo: "hotel",  espacio: true,  texto: "Habitaciones pet friendly y patio con pasto para pasear." },
  { nombre: "Mall Mascotero",       ciudad: "Concepción",   tipo: "tienda", espacio: false, texto: "Aceptan mascotas pequeñas en transportadora." },
  { nombre: "Plaza del Perro",      ciudad: "Temuco",       tipo: "parque", espacio: true,  texto: "Plaza con zona de juegos y rincón de pasto para hacer pis y caca." },
  { nombre: "Café Bigotes",         ciudad: "Valdivia",     tipo: "cafe",   espacio: false, texto: "Aceptan perros y gatos con correa en el patio." },
  { nombre: "Cabañas Lomo Peludo",  ciudad: "Pucón",        tipo: "hotel",  espacio: true,  texto: "Cabañas con jardín cercado, ideal para perros grandes." },
  { nombre: "Playa Arenita Pet",    ciudad: "Viña del Mar", tipo: "playa",  espacio: false, texto: "Horario especial para pasear mascotas en la mañana." },
];

// Elementos 
const grilla = document.getElementById("grilla");
const filtros = document.getElementById("filtros");
const contador = document.getElementById("contador");
const buscar = document.getElementById("buscar");
const soloEspacio = document.getElementById("solo-espacio");
let categoriaActiva = "todos";

// Botones de filtro 
Object.entries(categorias).forEach(([clave, c]) => {
  const btn = document.createElement("button");
  btn.className = "filtro";
  btn.textContent = c.nombre;
  btn.setAttribute("aria-pressed", clave === categoriaActiva);
  btn.addEventListener("click", () => {
    categoriaActiva = clave;
    filtros.querySelectorAll(".filtro").forEach(b => b.setAttribute("aria-pressed", b === btn));
    mostrar();
  });
  filtros.appendChild(btn);
});

//Mostrar tarjetas
function mostrar() {
  const texto = buscar.value.trim().toLowerCase();
  const lista = lugares.filter(l =>
    (categoriaActiva === "todos" || l.tipo === categoriaActiva) &&
    (!soloEspacio.checked || l.espacio) &&
    (l.nombre + " " + l.ciudad).toLowerCase().includes(texto)
  );

  contador.textContent = `${lista.length} ${lista.length === 1 ? "lugar" : "lugares"}`;

  if (lista.length === 0) {
    grilla.innerHTML = `<p class="vacio">No encontramos lugares. Prueba quitando algún filtro.</p>`;
    return;
  }

  grilla.innerHTML = lista.map(l => {
    const c = categorias[l.tipo];
    return `
      <article class="tarjeta" style="--color: ${c.color}">
        <span class="meta">${c.nombre} · ${l.ciudad}</span>
        <h3>${l.nombre}</h3>
        <p>${l.texto}</p>
        <div class="etiquetas">
          <span class="etiqueta">Acepta mascotas</span>
          ${l.espacio ? '<span class="etiqueta">Espacio para necesidades</span>' : ""}
        </div>
      </article>`;
  }).join("");
}

buscar.addEventListener("input", mostrar);
soloEspacio.addEventListener("change", mostrar);
mostrar();

//Modo claro / oscuro
const btnTema = document.getElementById("btn-tema");
const raiz = document.documentElement;

function aplicarTema(tema) {
  raiz.dataset.tema = tema;
  btnTema.textContent = tema === "oscuro" ? "Claro" : "Oscuro";
  localStorage.setItem("tema", tema);
}

// Usar el tema guardado; si no hay, el del sistema
const guardado = localStorage.getItem("tema");
const sistemaOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
aplicarTema(guardado || (sistemaOscuro ? "oscuro" : "claro"));

btnTema.addEventListener("click", () => {
  aplicarTema(raiz.dataset.tema === "oscuro" ? "claro" : "oscuro");
});
