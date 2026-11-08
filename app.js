(function () {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const dinero = (n) => "$" + n.toLocaleString("es-CL");
  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const porId = Object.fromEntries(PERFUMES.map((p) => [p.id, p]));
  const COL = { Fresco: "#AFE1EB", Dulce: "#F29A9F", Intenso: "#E3B06A" };
  const ANCHOS = [100, 88, 77, 67, 58, 50];

  // ---------- Carrito (se guarda en el navegador) ----------
  const CLAVE = "tiendita-isi-pedido";
  let carro = [];
  try { carro = JSON.parse(localStorage.getItem(CLAVE)) || []; } catch (e) { carro = []; }
  carro = carro.filter((i) => porId[i.id] && porId[i.id].formatos.some((f) => f.ml === i.ml));
  const guardar = () => { try { localStorage.setItem(CLAVE, JSON.stringify(carro)); } catch (e) {} };
  const precioDe = (i) => porId[i.id].formatos.find((f) => f.ml === i.ml).precio;
  const total = () => carro.reduce((s, i) => s + precioDe(i) * i.cant, 0);
  const unidades = () => carro.reduce((s, i) => s + i.cant, 0);

  function agregar(id, ml) {
    const it = carro.find((i) => i.id === id && i.ml === ml);
    if (it) it.cant++; else carro.push({ id, ml, cant: 1 });
    guardar(); pintarCarro();
    const c = $("#contador"); c.classList.remove("salta"); void c.offsetWidth; c.classList.add("salta");
    avisar(`Agregado: ${porId[id].nombre} · ${ml} ml`);
  }
  function cambiar(idx, d) {
    carro[idx].cant += d;
    if (carro[idx].cant <= 0) carro.splice(idx, 1);
    guardar(); pintarCarro();
  }

  // ---------- Pintar catálogo ----------
  const imgTag = (p, extra = "") =>
    `<img src="${p.imagen}" alt="${esc(p.nombre)}" loading="lazy" class="${p.blend ? "mult" : ""}${p.bleed ? " bl" : ""} ${extra}">`;

  function pintarAbanico() {
    const sel = ["chanel", "qdolce", "dylan", "ladymillion", "blackxs", "onemillion", "gucci"].map((id) => porId[id]).filter(Boolean);
    $("#abanico").innerHTML = sel.map((p) => `<div style="background:${p.color}">${imgTag(p)}</div>`).join("");
  }

  function pintarGrafico(lista) {
    $("#grafico").innerHTML = lista.map((p) => {
      const barras = [["Fresco", p.fresco], ["Dulce", p.dulce], ["Intenso", p.intenso]]
        .map(([k, v]) => `<div class="br"><span>${k}</span><div class="tr"><div class="fl" style="width:${v * 20}%;background:${COL[k]}"></div></div></div>`).join("");
      return `<a class="pc" href="#p-${p.id}">
        <div class="th" style="background:${p.color}">${imgTag(p)}</div>
        <div class="pi"><em>${esc(p.marca)}</em><strong>${esc(p.nombre)}</strong></div>
        <div class="barras">${barras}<p class="ideal"><small>Ideal para</small>${esc(p.idealPara)}</p></div>
      </a>`;
    }).join("");
  }

  function pintarProductos(lista) {
    $("#productos").innerHTML = lista.map((p) => {
      const acordes = p.acordes.map((a, i) =>
        `<div class="bar" style="width:${ANCHOS[i] || 50}%;background:${COLORES_ACORDES[a] || "#E6E0D6"}">${esc(a)}</div>`).join("");
      const formatos = p.formatos.map((f) =>
        `<button class="fmt" data-id="${p.id}" data-ml="${f.ml}" aria-label="Agregar ${esc(p.nombre)} ${f.ml} ml al pedido">
          <span class="ml">${f.ml} ml</span><span class="pr">${dinero(f.precio)}</span><span class="mas">+ Agregar</span>
        </button>`).join("");
      return `<article class="prod" id="p-${p.id}">
        <span class="marca-p">${esc(p.marca)}</span>
        <h3>${esc(p.nombre)}</h3>
        <div class="fila">
          <div class="tile" style="background:${p.color}">${imgTag(p)}<span class="chip">${esc(p.etiqueta)}</span></div>
          <div class="acordes"><h4>Acordes principales</h4>${acordes}</div>
        </div>
        <p class="desc">${esc(p.descripcion)}</p>
        ${p.extra ? `<p class="extra">${esc(p.extra)}</p>` : ""}
        <div class="formatos">${formatos}</div>
      </article>`;
    }).join("");
  }

  function pintarPrecios() {
    const tabla = (lista) => lista.map((p) => {
      const celdas = p.formatos.map((f) => `<div class="p"><span>${f.ml} ml</span>${dinero(f.precio)}</div>`);
      if (celdas.length === 1) celdas.unshift('<div class="p"></div>');
      return `<div class="r"><div class="n"><em>${esc(p.marca)}</em>${esc(p.nombre)}</div>${celdas.join("")}</div>`;
    }).join("");
    $("#tablas").innerHTML =
      `<h3>Para ella</h3><div class="tabla">${tabla(PERFUMES.filter((p) => p.para === "ella"))}</div>` +
      `<h3>Para él</h3><div class="tabla">${tabla(PERFUMES.filter((p) => p.para === "el"))}</div>`;
  }

  function filtrar(f) {
    const lista = f === "todos" ? PERFUMES : PERFUMES.filter((p) => p.para === f);
    $("#tituloGrafico").textContent = f === "ella" ? "Para ella" : f === "el" ? "Para él" : "Encuentra tu perfume";
    pintarGrafico(lista); pintarProductos(lista);
    document.querySelectorAll(".filtros button").forEach((b) => b.classList.toggle("activo", b.dataset.filtro === f));
  }

  // ---------- Pintar carrito ----------
  function pintarCarro() {
    const n = unidades();
    $("#contador").textContent = n;
    $("#flotante").hidden = n === 0;
    $("#flotanteTotal").textContent = dinero(total());
    $("#total").textContent = dinero(total());
    $("#enviar").disabled = n === 0;
    $("#vacio").hidden = n > 0;
    $("#datos").hidden = n === 0;
    $("#vaciar").hidden = n === 0;
    $("#items").innerHTML = carro.map((i, idx) => {
      const p = porId[i.id];
      return `<li class="item">
        <div class="th" style="background:${p.color}">${imgTag(p)}</div>
        <div><strong>${esc(p.nombre)}</strong><small>${esc(p.marca)} · ${i.ml} ml · ${dinero(precioDe(i))}</small></div>
        <div class="cant">
          <button data-idx="${idx}" data-d="-1" aria-label="Quitar uno">−</button><b>${i.cant}</b>
          <button data-idx="${idx}" data-d="1" aria-label="Agregar uno">+</button>
        </div>
        <div class="sub-i"><button class="quitar" data-idx="${idx}" data-d="-999">Quitar</button><span>${dinero(precioDe(i) * i.cant)}</span></div>
      </li>`;
    }).join("");
    document.querySelectorAll(".fmt").forEach((b) => {
      const en = carro.find((i) => i.id === b.dataset.id && i.ml === +b.dataset.ml);
      b.classList.toggle("ok", !!en);
      b.querySelector(".mas").textContent = en ? `En tu pedido (${en.cant}) +` : "+ Agregar";
    });
  }

  function mensajeWhatsApp() {
    const lineas = carro.map((i) => {
      const p = porId[i.id];
      return `• ${i.cant} × ${p.nombre} (${p.marca}) · ${i.ml} ml · ${dinero(precioDe(i) * i.cant)}`;
    });
    const nombre = $("#nombre").value.trim();
    const com = $("#comentario").value.trim();
    return [
      "¡Hola Isi! Quiero hacer este pedido:",
      "",
      ...lineas,
      "",
      `Total: ${dinero(total())}`,
      nombre ? `Nombre: ${nombre}` : "",
      com ? `Comentario: ${com}` : "",
      "",
      "(Pedido hecho desde la web)",
    ].filter((l, i, a) => !(l === "" && a[i - 1] === "")).join("\n");
  }

  // ---------- Abrir / cerrar ----------
  function abrir() {
    $("#carro").classList.add("abierto"); $("#carro").setAttribute("aria-hidden", "false");
    $("#velo").hidden = false; document.body.style.overflow = "hidden";
    setTimeout(() => $("#cerrarCarro").focus(), 50);
  }
  function cerrar() {
    $("#carro").classList.remove("abierto"); $("#carro").setAttribute("aria-hidden", "true");
    $("#velo").hidden = true; document.body.style.overflow = "";
  }
  let t;
  function avisar(txt) {
    const a = $("#aviso"); a.textContent = txt; a.classList.add("ver");
    clearTimeout(t); t = setTimeout(() => a.classList.remove("ver"), 1800);
  }

  // ---------- Eventos ----------
  document.addEventListener("click", (e) => {
    const fmt = e.target.closest(".fmt");
    if (fmt) return agregar(fmt.dataset.id, +fmt.dataset.ml);
    const c = e.target.closest("[data-idx]");
    if (c) return cambiar(+c.dataset.idx, +c.dataset.d);
    const f = e.target.closest("[data-filtro]");
    if (f) return filtrar(f.dataset.filtro);
  });
  $("#abrirCarro").addEventListener("click", abrir);
  $("#flotante").addEventListener("click", abrir);
  $("#cerrarCarro").addEventListener("click", cerrar);
  $("#velo").addEventListener("click", cerrar);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") cerrar(); });
  $("#vaciar").addEventListener("click", () => { carro = []; guardar(); pintarCarro(); });
  $("#enviar").addEventListener("click", () => {
    if (!carro.length) return;
    const url = `https://wa.me/${TIENDA.whatsapp}?text=${encodeURIComponent(mensajeWhatsApp())}`;
    window.open(url, "_blank", "noopener");
  });

  $("#linkWsp").href = `https://wa.me/${TIENDA.whatsapp}?text=${encodeURIComponent("¡Hola Isi! Vi tu página y quiero consultar por un decant.")}`;
  $("#linkIg").href = `https://instagram.com/${TIENDA.instagram}`;

  pintarAbanico(); pintarPrecios(); filtrar("todos"); pintarCarro();
})();
