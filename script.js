// ---------- Configuración ----------
// Cambia este correo por el tuyo: aquí llegan las sugerencias de eventos
const CORREO_CONTACTO = "tucorreo@ejemplo.cl";

// ---------- Categorías de lugares ----------
const categorias = {
  todos:       { nombre: "Todos",        color: "var(--primario)" },
  cafe:        { nombre: "Cafés",        color: "var(--c-cafe)" },
  restaurante: { nombre: "Restaurantes", color: "var(--c-playa)" },
  parque:      { nombre: "Parques",      color: "var(--c-parque)" },
  comercio:    { nombre: "Comercio",     color: "var(--c-tienda)" },
  hotel:       { nombre: "Hoteles",      color: "var(--c-hotel)" },
};

// ---------- Lugares (basados en la guía de Wow Can) ----------
// espacio: true = tiene canil, zona canina o patio para que hagan sus necesidades
const lugares = [
  // Parques y caniles
  { nombre: "Parque Bicentenario", comuna: "Vitacura", direccion: "Av. Bicentenario 3800, Vitacura", tipo: "parque", espacio: true, texto: "Dos caniles separados por tamaño, bebederos y mucho pasto para socializar." },
  { nombre: "Canil Parque Almagro", comuna: "Santiago", direccion: "San Ignacio de Loyola con Eleuterio Ramírez, Santiago", tipo: "parque", espacio: true, texto: "Canil cerrado de pasto sintético con bebederos, dentro del parque." },
  { nombre: "Parque Juan XXIII", comuna: "Ñuñoa", direccion: "Juan Moya con Dublé Almeyda, Ñuñoa", tipo: "parque", espacio: true, texto: "Canil de maicillo bien mantenido y punto de encuentro de los vecinos." },
  { nombre: "Canil Parque del Cómic", comuna: "San Miguel", direccion: "Av. Departamental 1400, San Miguel", tipo: "parque", espacio: true, texto: "Canil cerrado dentro del parque, ideal para San Miguel y alrededores." },
  { nombre: "Parque Canino La Cisterna", comuna: "La Cisterna", direccion: "Av. Ossa con Av. El Parrón, La Cisterna", tipo: "parque", espacio: true, texto: "Parque canino municipal con juegos de agilidad, bebederos y cierre." },
  { nombre: "Canil Plaza Inés de Suárez", comuna: "Providencia", direccion: "Antonio Varas 1510, Providencia", tipo: "parque", espacio: true, texto: "Uno de los caniles más grandes de Providencia, separado por tamaño." },
  { nombre: "Canil Plaza Las Lilas", comuna: "Providencia", direccion: "Av. Eliodoro Yáñez con Tobalaba, Providencia", tipo: "parque", espacio: true, texto: "Plaza de barrio con canil cerrado para que jueguen sueltos." },
  { nombre: "Plaza Río de Janeiro", comuna: "Providencia", direccion: "La Brabanzón, Río de Janeiro, Providencia", tipo: "parque", espacio: true, texto: "Gran canil cerrado con bebedero, más zona de ejercicio y juegos." },
  { nombre: "Parque San Borja", comuna: "Santiago", direccion: "Jaime Eyzaguirre 750, Santiago", tipo: "parque", espacio: true, texto: "Canil cerrado en pleno centro, un oasis para que corran." },
  { nombre: "Parque Canino La Florida", comuna: "La Florida", direccion: "Av. La Florida 10102, La Florida", tipo: "parque", espacio: true, texto: "Parque municipal con juegos de agilidad, bebederos y cierre perimetral." },
  { nombre: "Parque Canino Tres Poniente", comuna: "Maipú", direccion: "Av. Tres Poniente, Maipú", tipo: "parque", espacio: true, texto: "El parque canino más grande de Maipú, con agilidad y bebederos." },
  { nombre: "Parque de la Chilenidad", comuna: "Lo Barnechea", direccion: "Av. Raúl Labbé 13980, Lo Barnechea", tipo: "parque", espacio: true, texto: "Canil cerrado con juegos de agilidad y buenas vistas." },
  { nombre: "Parque Peñalolén", comuna: "Peñalolén", direccion: "Av. José Arrieta 7659, Peñalolén", tipo: "parque", espacio: true, texto: "Parque moderno con canil cerrado y juegos de agilidad." },
  { nombre: "Parque Nuestra Sra. de Gabriela", comuna: "Puente Alto", direccion: "Av. Concha y Toro 3144, Puente Alto", tipo: "parque", espacio: true, texto: "Canil cerrado con agilidad, bebederos y zona de sombra." },
  { nombre: "Zona canina Parque Araucano", comuna: "Las Condes", direccion: "Parque Araucano, Presidente Riesco, Las Condes", tipo: "parque", espacio: true, texto: "Zona cercada exclusiva para perros, con iluminación nocturna." },
  { nombre: "Parque Metropolitano (Cerro San Cristóbal)", comuna: "Providencia", direccion: "Acceso Pedro de Valdivia Norte, Providencia", tipo: "parque", espacio: true, texto: "Senderos con correa y una zona de perros para largas caminatas." },
  { nombre: "Parque Forestal", comuna: "Santiago", direccion: "Cardenal José María Caro 325, Santiago", tipo: "parque", espacio: false, texto: "Clásico para pasear con correa. No tiene canil cerrado." },
  { nombre: "Cerro Santa Lucía", comuna: "Santiago", direccion: "Cerro Santa Lucía, Santiago", tipo: "parque", espacio: false, texto: "Paseos cortos y tranquilos con miradores en el centro." },
  { nombre: "Parque Bicentenario de Cerrillos", comuna: "Cerrillos", direccion: "Av. Pedro Aguirre Cerda 6100, Cerrillos", tipo: "parque", espacio: false, texto: "Grandes explanadas para caminatas largas con correa." },
  { nombre: "Parque Padre Hurtado", comuna: "La Reina", direccion: "Av. Francisco Bilbao 8105, La Reina", tipo: "parque", espacio: false, texto: "Parque enorme con mucho pasto para picnic y caminatas. Se paga entrada." },

  // Cafés
  { nombre: "Bigotes Pet Store and Coffee", comuna: "Providencia", direccion: "Eliodoro Yáñez 2777, Providencia", tipo: "cafe", espacio: true, texto: "Café y tienda con patio cerrado donde los perros juegan seguros." },
  { nombre: "Café de la Candelaria", comuna: "Providencia", direccion: "Av. Italia 1449, Providencia", tipo: "cafe", espacio: false, texto: "Casona con un patio interior grande y tranquilo." },
  { nombre: "Café del 10", comuna: "Santiago", direccion: "Morandé 243, Santiago", tipo: "cafe", espacio: false, texto: "Café y centro cultural con patio interior que recibe mascotas." },
  { nombre: "Café Brunet", comuna: "Santiago", direccion: "Compañía de Jesús 2695, Santiago", tipo: "cafe", espacio: false, texto: "Pastelería de estilo francés con terraza pet friendly." },
  { nombre: "Colmado Coffee", comuna: "Santiago", direccion: "Merced 346, Santiago", tipo: "cafe", espacio: false, texto: "Café y pan de masa madre; los perros van en la terraza exterior." },
  { nombre: "Boketto", comuna: "Providencia", direccion: "Av. Eliodoro Yáñez 2885, Providencia", tipo: "cafe", espacio: false, texto: "Café de especialidad y pastelería japonesa con terraza exterior." },
  { nombre: "Faustina", comuna: "Vitacura", direccion: "Av. Vitacura 3456, Vitacura", tipo: "cafe", espacio: false, texto: "Terraza frontal y agua siempre disponible para los perros." },
  { nombre: "Daniel's Bakery", comuna: "Ñuñoa", direccion: "Celerino Pereira 1530, Ñuñoa", tipo: "cafe", espacio: false, texto: "Panadería con terraza y patio, de ambiente familiar." },
  { nombre: "Amapola Café", comuna: "Peñalolén", direccion: "Av. Grecia 8735, Peñalolén", tipo: "cafe", espacio: false, texto: "Cafetería de especialidad con una terraza agradable." },
  { nombre: "Café Mokka", comuna: "La Florida", direccion: "Enrique Olivares 1149, La Florida", tipo: "cafe", espacio: false, texto: "Terraza y mesas exteriores donde aceptan perros." },
  { nombre: "La Cafetaza", comuna: "Maipú", direccion: "Av. Pajaritos 3190, Maipú", tipo: "cafe", espacio: false, texto: "Mesas exteriores y buen trato a las mascotas." },
  { nombre: "Mammaterra", comuna: "La Florida", direccion: "Av. Vicuña Mackenna 9840, La Florida", tipo: "cafe", espacio: false, texto: "Emporio saludable con una terraza amplia." },

  // Restaurantes y bares
  { nombre: "Antiguo Sueño", comuna: "San José de Maipo", direccion: "Camino al Volcán Km 42, San José de Maipo", tipo: "restaurante", espacio: true, texto: "Gran jardín donde los perros se mueven libres mientras comes." },
  { nombre: "Barbudo Beer Garden", comuna: "Ñuñoa", direccion: "Jorge Washington 176, Ñuñoa", tipo: "restaurante", espacio: false, texto: "Jardín cervecero con terrazas amplias y ambiente relajado." },
  { nombre: "El Honesto Mike", comuna: "Providencia", direccion: "Av. Los Leones 96, Providencia", tipo: "restaurante", espacio: false, texto: "Cervecería con gran patio que recibe perros de todos los tamaños." },
  { nombre: "El Huerto", comuna: "Providencia", direccion: "Av. Orrego Luco 054, Providencia", tipo: "restaurante", espacio: false, texto: "Comida orgánica en un patio lleno de plantas." },
  { nombre: "Casa Conejo", comuna: "Ñuñoa", direccion: "Pedro de Valdivia 2785, Ñuñoa", tipo: "restaurante", espacio: false, texto: "Patio y terraza amplios, populares para ir en grupo." },
  { nombre: "Jardín Mallinkrodt", comuna: "Providencia", direccion: "Mallinkrodt 170, Providencia", tipo: "restaurante", espacio: false, texto: "Bar al aire libre con patio amplio en Bellavista." },
  { nombre: "Rende Bú", comuna: "Providencia", direccion: "Av. Italia 1614, Providencia", tipo: "restaurante", espacio: false, texto: "Pizzas y comida italiana con terraza interior en Barrio Italia." },
  { nombre: "Patio Almeyda", comuna: "Ñuñoa", direccion: "Dublé Almeyda 2900, Ñuñoa", tipo: "restaurante", espacio: false, texto: "Bar con gran patio interior y ambiente tranquilo." },
  { nombre: "Intrinsical", comuna: "Santiago", direccion: "Av. Brasil 88, Santiago", tipo: "restaurante", espacio: false, texto: "Cervecería con espacios amplios donde los perros son bienvenidos." },
  { nombre: "La Popular Pizza y Pan", comuna: "Providencia", direccion: "Infante 1208, Providencia", tipo: "restaurante", espacio: false, texto: "Pizzas y pan de masa madre, con terraza exterior." },

  // Comercio
  { nombre: "Mallplaza Egaña", comuna: "La Reina", direccion: "Av. Larraín 5862, La Reina", tipo: "comercio", espacio: false, texto: "Puedes recorrer las áreas comunes con tu perro con correa." },
  { nombre: "Mallplaza Norte", comuna: "Huechuraba", direccion: "Av. Américo Vespucio 1737, Huechuraba", tipo: "comercio", espacio: true, texto: "Áreas designadas y un parque para perros dentro del mall." },
  { nombre: "Mall Arauco Maipú", comuna: "Maipú", direccion: "Av. Américo Vespucio 399, Maipú", tipo: "comercio", espacio: true, texto: "Acepta mascotas en áreas comunes y tiene un parque canino exterior." },
  { nombre: "Costanera Center", comuna: "Providencia", direccion: "Av. Andrés Bello 2425, Providencia", tipo: "comercio", espacio: false, texto: "Mascotas con correa en áreas comunes; algunas tiendas también las aceptan." },
  { nombre: "Parque Arauco", comuna: "Las Condes", direccion: "Av. Kennedy 5413, Las Condes", tipo: "comercio", espacio: false, texto: "Perros en pasillos comunes y acceso al Parque Araucano cerca." },
  { nombre: "Easton Outlet Mall", comuna: "Quilicura", direccion: "Av. Presidente Eduardo Frei Montalva 9709, Quilicura", tipo: "comercio", espacio: false, texto: "Outlet pet friendly; suele haber bebederos disponibles." },
  { nombre: "Paseo Los Trapenses", comuna: "Lo Barnechea", direccion: "Av. Los Trapenses 3515, Lo Barnechea", tipo: "comercio", espacio: false, texto: "Centro abierto ideal para pasear y comer en terrazas." },
  { nombre: "Patio Bellavista", comuna: "Providencia", direccion: "Constitución 30, Providencia", tipo: "comercio", espacio: false, texto: "Pasillos abiertos y la mayoría de las terrazas aptas." },

  // Hoteles
  { nombre: "Mandarin Oriental Santiago", comuna: "Las Condes", direccion: "Av. Kennedy 4601, Las Condes", tipo: "hotel", espacio: false, texto: "Hotel que permite la estadía de perros y ofrece amenidades para ellos." },
];

// ---------- Servicios de transporte ----------
// estado: "si" (acepta con condiciones claras) o "confirmar" (revisa antes)
const servicios = [
  { nombre: "Metro de Santiago", tipo: "Metro", color: "var(--c-hotel)", estado: "si",
    condiciones: ["Solo dentro de canasto, caja o mochila cerrada de hasta 60 cm.", "Vale para todas las estaciones.", "Los perros guía entran siempre."],
    horario: "Sin horario especial para mascotas. Revisa el horario del Metro en metro.cl.",
    enlace: "https://www.metro.cl/guia-del-usuario/tips-y-preguntas-frecuentes" },
  { nombre: "Pullman Bus: Mascota a Bordo", tipo: "Bus", color: "var(--c-cafe)", estado: "si",
    condiciones: ["Perros y gatos en canil de hasta 60 cm de largo.", "Se compra un asiento extra para la mascota, solo en la web.", "Hay asientos reservados para este servicio."],
    horario: "Según el servicio: al elegir tu viaje en la web aparecen los asientos disponibles.",
    enlace: "https://www.pullmanbus.cl" },
  { nombre: "Buses Pullman Tur", tipo: "Bus", color: "var(--c-cafe)", estado: "si",
    condiciones: ["Solo perros y gatos, una persona con mascota por servicio.", "Hay que pedir aprobación por correo antes de comprar.", "Piden una declaración jurada."],
    horario: "Solo servicios nocturnos que salen después de las 21:00.",
    enlace: "https://home.busespullmantur.cl/condiciones-servicio-pet-friendly/" },
  { nombre: "Turbus", tipo: "Bus", color: "var(--c-cafe)", estado: "confirmar",
    condiciones: ["Transporta mascotas, pero las condiciones han cambiado con los años.", "Confirma si va en cabina o bodega y qué documentos piden.", "Los perros guía viajan gratis."],
    horario: "Consulta por tu ruta y fecha antes de comprar.",
    enlace: "https://www.turbus.cl" },
  { nombre: "LATAM", tipo: "Avión", color: "var(--c-playa)", estado: "confirmar",
    condiciones: ["Perros y gatos pequeños en cabina, en transportadora; reportes de 2023 hablan de unos 7 kg con todo incluido.", "Las mascotas más grandes pueden ir en bodega.", "Piden certificado de salud de un veterinario."],
    horario: "Se agrega al reservar; hay cupos limitados por vuelo.",
    enlace: "https://www.latamairlines.com/cl/es" },
  { nombre: "SKY Airline", tipo: "Avión", color: "var(--c-playa)", estado: "confirmar",
    condiciones: ["Perros y gatos desde los 3 meses, hasta unos 6 kg con la transportadora.", "Una mascota por pasajero y cuatro por vuelo, según reportes de prensa."],
    horario: "Se agrega al reservar; hay cupos limitados por vuelo.",
    enlace: "https://www.skyairline.com" },
  { nombre: "JetSMART", tipo: "Avión", color: "var(--c-playa)", estado: "confirmar",
    condiciones: ["Solo en cabina y en vuelos directos, sin escalas.", "Algunas razas de nariz chata no pueden viajar.", "La mascota debe ir todo el vuelo dentro de su contenedor."],
    horario: "Se agrega al reservar; hay cupos limitados por vuelo.",
    enlace: "https://jetsmart.com/cl/es" },
  { nombre: "En auto", tipo: "Auto", color: "var(--c-parque)", estado: "si",
    condiciones: ["La Ley de Tránsito prohíbe llevarlos en el asiento delantero.", "En camionetas abiertas deben ir con arnés especial."],
    horario: "Sin restricción de horario.",
    enlace: "https://www.hdi.cl/blog-auto-modo-seguro/como-viajar-con-animales-en-el-auto/" },
];

// ---------- Eventos y juntas ----------
// fecha / fin en formato AAAA-MM-DD; si no hay fecha, deja fecha: null
const eventos = [
  { nombre: "GuauFest 2026", fecha: "2026-10-31", fin: "2026-11-01", fechaTexto: "Sáb 31 de octubre y dom 1 de noviembre", hora: "10:00 a 19:00",
    lugar: "Parque Padre Hurtado (sector Playa Anakena)", direccion: "Parque Padre Hurtado, La Reina, Santiago",
    texto: "Parque de diversiones para perros con circuitos, juegos de agua, charlas y adopciones.", enlace: "https://instagram.com/guaufest_chile" },
  { nombre: "Dog Race", fecha: null, fin: null, fechaTexto: "Fecha por confirmar", hora: "En 2025 partió a las 10:00",
    lugar: "Parque Padre Hurtado (en 2025)", direccion: "Parque Padre Hurtado, La Reina, Santiago",
    texto: "Corrida familiar para ir con tu perro. Hay recorridos de 2 y 3 km según el tamaño.", enlace: "https://instagram.com/dograce.cl" },
  { nombre: "Feria Adopta Responsable", fecha: null, fin: null, fechaTexto: "Itinerante: revisa sus fechas", hora: "Según cada feria",
    lugar: "Varias comunas", direccion: "Santiago, Chile",
    texto: "Ferias de fundaciones donde conoces perros que buscan hogar, con puestos y asesoría.", enlace: "https://instagram.com/adoptaresponsable" },
];

// ---------- Elementos ----------
const grilla = document.getElementById("grilla");
const filtros = document.getElementById("filtros");
const contador = document.getElementById("contador");
const buscar = document.getElementById("buscar");
const soloEspacio = document.getElementById("solo-espacio");
const botonVerMas = document.getElementById("ver-mas");
const POR_PAGINA = 12;
let categoriaActiva = "todos";
let visibles = POR_PAGINA;

// ---------- Botones de filtro ----------
Object.entries(categorias).forEach(([clave, c]) => {
  const btn = document.createElement("button");
  btn.className = "filtro";
  btn.textContent = c.nombre;
  btn.setAttribute("aria-pressed", clave === categoriaActiva);
  btn.addEventListener("click", () => {
    categoriaActiva = clave;
    visibles = POR_PAGINA;
    filtros.querySelectorAll(".filtro").forEach(b => b.setAttribute("aria-pressed", b === btn));
    mostrar();
  });
  filtros.appendChild(btn);
});

// ---------- Mostrar tarjetas de lugares ----------
function mostrar() {
  const texto = buscar.value.trim().toLowerCase();
  const lista = lugares.filter(l =>
    (categoriaActiva === "todos" || l.tipo === categoriaActiva) &&
    (!soloEspacio.checked || l.espacio) &&
    (l.nombre + " " + l.comuna + " " + l.direccion).toLowerCase().includes(texto)
  );

  const total = lista.length;
  const aMostrar = lista.slice(0, visibles);
  contador.textContent = `${total} ${total === 1 ? "lugar" : "lugares"}`;
  botonVerMas.hidden = total <= visibles;

  if (total === 0) {
    grilla.innerHTML = `<p class="vacio">No encontramos lugares. Prueba quitando algún filtro.</p>`;
    return;
  }

  grilla.innerHTML = aMostrar.map(l => {
    const c = categorias[l.tipo];
    return `
      <article class="tarjeta clicable" style="--color: ${c.color}" data-id="${lugares.indexOf(l)}"
               role="button" tabindex="0" aria-label="Ver ${l.nombre} en el mapa">
        <span class="meta">${c.nombre} · ${l.comuna}</span>
        <h3>${l.nombre}</h3>
        <p>${l.texto}</p>
        <p class="direccion">${l.direccion}</p>
        <div class="etiquetas">
          <span class="etiqueta">Acepta mascotas</span>
          ${l.espacio ? '<span class="etiqueta">Espacio para necesidades</span>' : ""}
        </div>
        <span class="pista">Clic para ver en el mapa</span>
      </article>`;
  }).join("");
}

buscar.addEventListener("input", () => { visibles = POR_PAGINA; mostrar(); });
soloEspacio.addEventListener("change", () => { visibles = POR_PAGINA; mostrar(); });
botonVerMas.addEventListener("click", () => { visibles += POR_PAGINA; mostrar(); });
mostrar();

// ---------- Servicios ----------
const etiquetasEstado = { si: "Acepta con condiciones", confirmar: "Confirma antes de ir" };

document.getElementById("grilla-servicios").innerHTML = servicios.map(s => `
  <article class="tarjeta" style="--color: ${s.color}">
    <span class="meta">${s.tipo}</span>
    <h3>${s.nombre}</h3>
    <span class="etiqueta estado-${s.estado}">${etiquetasEstado[s.estado]}</span>
    <ul class="lista-simple">${s.condiciones.map(c => `<li>${c}</li>`).join("")}</ul>
    <p class="horario"><strong>Horario:</strong> ${s.horario}</p>
    <a class="enlace-oficial" href="${s.enlace}" target="_blank" rel="noopener">Ver sitio oficial</a>
  </article>`).join("");

// ---------- Eventos ----------
function diasHasta(iso) {
  const hoy = new Date(); hoy.setHours(0, 0, 0, 0);
  return Math.round((new Date(iso + "T00:00:00") - hoy) / 86400000);
}

function cuentaRegresiva(e) {
  if (!e.fecha) return "Fecha por confirmar";
  const falta = diasHasta(e.fecha);
  const faltaFin = diasHasta(e.fin || e.fecha);
  if (faltaFin < 0) return "Ya pasó";
  if (falta < 0) return "Está ocurriendo ahora";
  if (falta === 0) return "Es hoy";
  if (falta === 1) return "Es mañana";
  return `Faltan ${falta} días`;
}

document.getElementById("grilla-eventos").innerHTML = eventos.map((e, i) => `
  <article class="tarjeta clicable" style="--color: var(--c-tienda)" data-evento="${i}"
           role="button" tabindex="0" aria-label="Ver ${e.nombre} en el mapa">
    <span class="meta">${cuentaRegresiva(e)}</span>
    <h3>${e.nombre}</h3>
    <p>${e.texto}</p>
    <p class="horario"><strong>Cuándo:</strong> ${e.fechaTexto}<br><strong>Hora:</strong> ${e.hora}<br><strong>Dónde:</strong> ${e.lugar}</p>
    <a class="enlace-oficial" href="${e.enlace}" target="_blank" rel="noopener">Más información</a>
    <span class="pista">Clic para ver en el mapa</span>
  </article>`).join("");

// ---------- Mapa de Google Maps ----------
const dialogo = document.getElementById("mapa");
const marco = document.getElementById("mapa-marco");

function abrirMapa(titulo, direccion) {
  const consulta = encodeURIComponent(`${direccion}, Chile`);
  document.getElementById("mapa-titulo").textContent = titulo;
  document.getElementById("mapa-dir").textContent = direccion;
  document.getElementById("mapa-enlace").href = `https://www.google.com/maps/search/?api=1&query=${consulta}`;
  marco.src = `https://www.google.com/maps?q=${consulta}&output=embed`;
  dialogo.showModal();
}

function alActivar(e) {
  // Si hicieron clic en un enlace dentro de la tarjeta, no abrimos el mapa
  if (e.target.closest("a")) return;
  const tarjeta = e.target.closest(".clicable");
  if (!tarjeta) return;
  if (tarjeta.dataset.id !== undefined) {
    const l = lugares[tarjeta.dataset.id];
    abrirMapa(l.nombre, l.direccion);
  } else {
    const ev = eventos[tarjeta.dataset.evento];
    abrirMapa(ev.nombre, ev.direccion);
  }
}

[grilla, document.getElementById("grilla-eventos")].forEach(zona => {
  zona.addEventListener("click", alActivar);
  zona.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); alActivar(e); }
  });
});

document.getElementById("mapa-cerrar").addEventListener("click", () => dialogo.close());
dialogo.addEventListener("click", e => { if (e.target === dialogo) dialogo.close(); }); // clic fuera
dialogo.addEventListener("close", () => { marco.src = "about:blank"; });

// ---------- Sugerir un evento ----------
document.getElementById("form-evento").addEventListener("submit", e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(e.target));
  const cuerpo =
    `Evento: ${d.nombre}\nFecha: ${d.fecha || "sin fecha"}\nLugar: ${d.lugar}\n` +
    `Enlace: ${d.enlace || "-"}\n\nDetalle:\n${d.detalle || "-"}`;
  window.location.href =
    `mailto:${CORREO_CONTACTO}?subject=${encodeURIComponent("Sugerencia de evento: " + d.nombre)}&body=${encodeURIComponent(cuerpo)}`;
  document.getElementById("msg-evento").textContent =
    "Se abrió tu correo con la sugerencia lista. Solo falta enviarla.";
  e.target.reset();
});

// ---------- Modo claro / oscuro ----------
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
