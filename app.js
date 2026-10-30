/* ==================== INTERNACIONALIZACIÓN ==================== */
const I18N = {
    es: {
        appTitle: "Control de Gastos",
        appSubtitulo: "Gestiona tus gastos e ingresos. Tus datos se guardan en este navegador.",
        tabGastos: "Gastos", tabIngresos: "Otros Ingresos", tabAnual: "Resumen Anual 🔒",

        formGastoTitulo: "Gastos",
        formIngresoTitulo: "Otros Ingresos",

        categoria: "Categoría", catPersonalizada: "Categoría personalizada",
        subcategoria: "Subcategoría", fecha: "Fecha", monto: "Valor",
        phMonto: "0.00",
        phSaldoBase: "0.00",
        phConceptoIngreso: "ej: Bono, Venta, Regalo...",

        phSubHogar: "ej: Alquiler, Luz, Internet...",
        phSubSupermercado: "ej: Éxito, Carulla, Panadería...",
        phSubRestaurantes: "ej: Almuerzo, Café, Domicilio...",
        phSubCompras: "ej: Ropa, Zapatos, Tecnología...",
        phSubTransporte: "ej: Gasolina, Uber, Bus...",
        phSubOcio: "ej: Cine, Netflix, Concierto...",
        phSubSalud: "ej: Farmacia, Médico, Gimnasio...",
        phSubEducacion: "ej: Libros, Universidad, Curso...",
        phSubViajes: "ej: Vuelos, Hotel, Maletas...",
        phSubMascotas: "ej: Comida, Veterinario, Juguetes...",
        phSubOtra: "ej: Escribe tu detalle...",

        btnAgregarGasto: "+ Agregar gasto", btnAgregarIngreso: "+ Agregar ingreso",
        razonIngreso: "Razón del ingreso",

        thCategoria: "Categoría", thSubcategoria: "Subcategoría",
        thFecha: "Fecha", thMonto: "Valor", thRazon: "Razón del ingreso",
        thAnio: "Año", thMes: "Mes", thIngresoBase: "Ingreso base",
        thTotalGastos: "Total Gastos", thTotalIngresos: "Total Ingresos",
        thSaldoNeto: "Saldo Neto",

        cardIngresoBase: "Ingreso base<br><span class='sub-etiqueta'>mes actual</span>",
        cardIngresos: "Total ingresos<br><span class='sub-etiqueta'>del mes</span>",
        cardGastos: "Gastos<br><span class='sub-etiqueta'>del mes</span>",
        cardDisponible: "Saldo<br><span class='sub-etiqueta'>disponible</span>",

        distribucionTitulo: "Distribución de gastos del mes 🔒",
        otrasCategorias: "Otras categorías",
        vacioDistribucion: "Sin gastos este mes para mostrar",

        vacioGastos: "✨ No hay gastos registrados este mes",
        vacioGastosFiltro: "🔍 No hay gastos en ese rango de fechas",
        vacioIngresos: "💰 No hay otros ingresos registrados",
        anio: "📅 Año:",
        totalAnio: "Total {0}",

        btnReiniciar: "🗑️ Reiniciar todo",
        btnEliminar: "🗑️ Eliminar", btnEditar: "✏️ Editar",
        btnGuardarCambios: "💾 Guardar cambios",
        btnCancelarEdicion: "✕ Cancelar edición",

        filtroTitulo: "Filtrar tabla 🔒",
        desde: "Desde", hasta: "Hasta",
        btnLimpiarFiltro: "✕ Limpiar filtro",

        datosTitulo: "💾 Copia de seguridad",
        datosSubtitulo: "Protege tus datos o pásalos a otro dispositivo",
        datosAyudaTitulo: "<strong>¿Para qué sirven estos botones?</strong>",
        datosPaso1: "🛡️ <strong>Guardar copia:</strong> Descarga un archivo en tu PC. No lo abras, solo guárdalo por si acaso (en una USB, en el Drive, etc.).",
        datosPaso2: "⏪ <strong>Restaurar datos 🔒:</strong> Si perdiste la información o estás en otro PC, busca ese archivo y la app recuperará todo.",
        zonaPeligro: "Zona peligrosa",
        btnGuardarCopia: "Guardar copia de seguridad",
        ayudaGuardarCopia: "Se guardará en tu carpeta de Descargas",
        btnRestaurarCopia: "Restaurar datos 🔒",
        ayudaRestaurarCopia: "Busca el archivo que guardaste antes",
        btnExportarExcel: "Exportar a Excel 🔒",
        ayudaExportarExcel: "Para analizar o preparar tu declaración de renta",
        confirmImportar: "Se van a reemplazar TODOS los datos actuales por:\n\n• {0} gastos\n• {1} ingresos\n\n¿Continuar?",
        alertImportado: "✅ Importado: {0} gastos y {1} ingresos",
        alertCopiaGuardada: "✅ ¡Copia guardada con éxito!\n\nEl archivo se ha descargado en tu computador. Por favor, NO lo abras. Solo guárdalo en un lugar seguro (como una USB o en el Drive).",
        alertRestaurarExito: "✅ ¡Datos restaurados con éxito!\n\nSe han recuperado {0} gastos y {1} ingresos.",
        errImportar: "❌ No se pudo leer el archivo. Asegúrate de que sea un archivo de respaldo guardado desde esta app.",

        errFecha: "❌ Selecciona una fecha",
        errCategoria: "❌ Selecciona o escribe una categoría",
        errSubcategoria: "❌ Escribe una subcategoría",
        errMonto: "❌ Ingresa un valor válido mayor a 0",
        errConcepto: "❌ Escribe la razón del ingreso",
        confirmReiniciar: "⚠️ ¿Estás seguro? Esto borrará TODOS los gastos, ingresos y los ingresos base. No se puede deshacer.",
        alertReiniciado: "✅ Todos los datos han sido reiniciados",

        catHogar: "Hogar", catSupermercado: "Supermercado", catRestaurantes: "Restaurantes",
        catCompras: "Compras", catTransporte: "Transporte", catOcio: "Ocio",
        catSalud: "Salud", catEducacion: "Educación", catViajes: "Viajes",
        catMascotas: "Mascotas", catOtra: "Otra (personalizada)",

        exHipoteca: "Hipoteca/Alquiler", exComestibles: "Comestibles", exGasolina: "Gasolina",
        exNetflix: "Netflix", exGimnasio: "Gimnasio", exVuelos: "Vuelos",
        exAlimento: "Alimento", exBono: "Bono del trabajo", exVenta: "Venta de mueble",

        footer1: "💰 Puedes cambiar la moneda en cualquier momento. Todos los valores se convierten automáticamente.",
        footer2: "✏️ Después de cada registro, los campos se limpian y quedan listos para el siguiente.",
        footerCreditos: "© 2024 Desarrollado por Miguel I. Díaz C.",

        temaClaro: "Cambiar a modo claro", temaOscuro: "Cambiar a modo oscuro",

        premiumTitulo: "Hazte Premium",
        premiumDesc: "Has alcanzado el límite de 10 gastos al mes de la versión gratuita o has intentado usar una función avanzada.",
        premiumDesc2Titulo: "Al hacerte Premium obtienes:",
        premiumBen1: "✅ Gastos ilimitados",
        premiumBen2: "📊 Gráfica de barras (¿en qué gastas?)",
        premiumBen3: "📈 Resumen Anual completo",
        premiumBen4: "📄 Exporta a Excel - ideal para tu declaración de renta",
        premiumBen5: "🗓️ Filtros por fecha",
        premiumDesc3: "Sin suscripciones.",
        premiumPagoUnico: "PAGO ÚNICO",
        premiumBtnComprar: "Desbloquear Premium",

        btnAyuda: "Instrucciones",
        ayudaTitulo: "Instrucciones",
        ayudaPaso1Titulo: "Ingresa tu salario o base",
        ayudaPaso1Desc: "En la primera tarjeta morada, escribe el dinero con el que inicias este mes.",
        ayudaPaso2Titulo: "Registra tus gastos",
        ayudaPaso2Desc: "Usa el formulario de abajo. Selecciona la categoría, escribe la subcategoría, selecciona la fecha y escribe el valor. Luego presiona Enter o haz clic en 'Agregar Gasto'.<br><br>Verás que tu registro se guarda automáticamente en la tabla de abajo. Además, los campos se limpian solos y quedan en blanco, listos para hacer el siguiente registro.",
        ayudaPaso3Titulo: "Añade otros ingresos",
        ayudaPaso3Desc: "Si recibes un bono, una venta o un dinero extra, regístralo en la pestaña 'Otros Ingresos'.",
        ayudaPaso4Titulo: "Revisa tus cuentas",
        ayudaPaso4Desc: "Las tarjetas de colores se actualizan solas. Si quieres ver gráficos, tu historial, o preparar tu declaración de renta, desbloquea la versión Premium.",
        ayudaRecordatorio: "💡 Recuerda: si cierras esta ventana, siempre puedes volver a abrirla tocando el botón 'Instrucciones' en la parte superior.",
        ayudaBtnEntendido: "¡Entendido, a registrar gastos!"
    },
    en: {
        appTitle: "Expense Tracker",
        appSubtitulo: "Manage your expenses and income. Your data is saved in this browser.",
        tabGastos: "Expenses", tabIngresos: "Other Income", tabAnual: "Annual Summary 🔒",

        formGastoTitulo: "Expenses",
        formIngresoTitulo: "Other Income",

        categoria: "Category", catPersonalizada: "Custom category",
        subcategoria: "Subcategory", fecha: "Date", monto: "Amount",
        phMonto: "0.00",
        phSaldoBase: "0.00",
        phConceptoIngreso: "e.g. Bonus, Sale, Gift...",

        phSubHogar: "e.g. Rent, Electricity, Internet...",
        phSubSupermercado: "e.g. Walmart, Whole Foods, Bakery...",
        phSubRestaurantes: "e.g. Lunch, Coffee, Delivery...",
        phSubCompras: "e.g. Clothes, Shoes, Tech...",
        phSubTransporte: "e.g. Gas, Uber, Bus...",
        phSubOcio: "e.g. Movies, Netflix, Concert...",
        phSubSalud: "e.g. Pharmacy, Doctor, Gym...",
        phSubEducacion: "e.g. Books, University, Course...",
        phSubViajes: "e.g. Flights, Hotel, Luggage...",
        phSubMascotas: "e.g. Food, Vet, Toys...",
        phSubOtra: "e.g. Type your detail...",

        btnAgregarGasto: "+ Add expense", btnAgregarIngreso: "+ Add income",
        razonIngreso: "Income source",

        thCategoria: "Category", thSubcategoria: "Subcategory",
        thFecha: "Date", thMonto: "Amount", thRazon: "Income source",
        thAnio: "Year", thMes: "Month", thIngresoBase: "Base income",
        thTotalGastos: "Total Expenses", thTotalIngresos: "Total Income",
        thSaldoNeto: "Net Balance",

        cardIngresoBase: "Base income<br><span class='sub-etiqueta'>current month</span>",
        cardIngresos: "Total income<br><span class='sub-etiqueta'>this month</span>",
        cardGastos: "Expenses<br><span class='sub-etiqueta'>this month</span>",
        cardDisponible: "Available<br><span class='sub-etiqueta'>balance</span>",

        distribucionTitulo: "Expense distribution this month 🔒",
        otrasCategorias: "Other categories",
        vacioDistribucion: "No expenses this month to show",

        vacioGastos: "✨ No expenses registered this month",
        vacioGastosFiltro: "🔍 No expenses in that date range",
        vacioIngresos: "💰 No other income registered",
        anio: "📅 Year:",
        totalAnio: "Total {0}",

        btnReiniciar: "🗑️ Reset all",
        btnEliminar: "🗑️ Delete", btnEditar: "✏️ Edit",
        btnGuardarCambios: "💾 Save changes",
        btnCancelarEdicion: "✕ Cancel editing",

        filtroTitulo: "Filter table 🔒",
        desde: "From", hasta: "To",
        btnLimpiarFiltro: "✕ Clear filter",

        datosTitulo: "💾 Backup",
        datosSubtitulo: "Protect your data or move it to another device",
        datosAyudaTitulo: "<strong>What are these buttons for?</strong>",
        datosPaso1: "🛡️ <strong>Save backup:</strong> Downloads a file to your PC. Do not open it, just keep it safe (on a USB stick, in Google Drive, etc.).",
        datosPaso2: "⏪ <strong>Restore data 🔒:</strong> If you lost the information or are on another PC, find that file and the app will recover everything.",
        zonaPeligro: "Danger zone",
        btnGuardarCopia: "Save backup",
        ayudaGuardarCopia: "Will be saved in your Downloads folder",
        btnRestaurarCopia: "Restore data 🔒",
        ayudaRestaurarCopia: "Find the file you saved before",
        btnExportarExcel: "Export to Excel 🔒",
        ayudaExportarExcel: "To analyze or prepare your tax return",
        confirmImportar: "This will REPLACE ALL current data with:\n\n• {0} expenses\n• {1} income entries\n\nContinue?",
        alertImportado: "✅ Imported: {0} expenses and {1} income entries",
        alertCopiaGuardada: "✅ Backup saved successfully!\n\nThe file has been downloaded to your computer. Please DO NOT open it. Just keep it somewhere safe (like a USB stick or Google Drive).",
        alertRestaurarExito: "✅ Data restored successfully!\n\n{0} expenses and {1} income entries recovered.",
        errImportar: "❌ Could not read the file. Make sure it's a backup file saved from this app.",

        errFecha: "❌ Please select a date",
        errCategoria: "❌ Select or type a category",
        errSubcategoria: "❌ Type a subcategory",
        errMonto: "❌ Enter a valid amount greater than 0",
        errConcepto: "❌ Type the income source",
        confirmReiniciar: "⚠️ Are you sure? This will delete ALL expenses, income and base incomes. It cannot be undone.",
        alertReiniciado: "✅ All data has been reset",

        catHogar: "Home", catSupermercado: "Groceries", catRestaurantes: "Dining out",
        catCompras: "Shopping", catTransporte: "Transport", catOcio: "Leisure",
        catSalud: "Health", catEducacion: "Education", catViajes: "Travel",
        catMascotas: "Pets", catOtra: "Other (custom)",

        exHipoteca: "Mortgage/Rent", exComestibles: "Groceries", exGasolina: "Gas",
        exNetflix: "Netflix", exGimnasio: "Gym", exVuelos: "Flights",
        exAlimento: "Pet food", exBono: "Work bonus", exVenta: "Furniture sale",

        footer1: "💰 You can change the currency at any time. All values are converted automatically.",
        footer2: "✏️ After each entry, the fields are cleared and ready for the next one.",
        footerCreditos: "© 2024 Developed by Miguel I. Díaz C.",

        temaClaro: "Switch to light mode", temaOscuro: "Switch to dark mode",

        premiumTitulo: "Go Premium",
        premiumDesc: "You have reached the limit of 10 expenses per month in the free version or tried to use an advanced feature.",
        premiumDesc2Titulo: "Going Premium gives you:",
        premiumBen1: "✅ Unlimited expenses",
        premiumBen2: "📊 Bar chart (see where your money goes)",
        premiumBen3: "📈 Full Annual Summary",
        premiumBen4: "📄 Export to Excel - ideal for your tax return",
        premiumBen5: "🗓️ Date filters",
        premiumDesc3: "No subscriptions.",
        premiumPagoUnico: "ONE-TIME PAYMENT",
        premiumBtnComprar: "Unlock Premium",

        btnAyuda: "Instructions",
        ayudaTitulo: "Instructions",
        ayudaPaso1Titulo: "Enter your salary or base",
        ayudaPaso1Desc: "In the first purple card, type the money you are starting the month with.",
        ayudaPaso2Titulo: "Record your expenses",
        ayudaPaso2Desc: "Use the form below. Select the category, type the subcategory, choose the date, and type the amount. Then press Enter or click 'Add Expense'.<br><br>You'll see your entry saved automatically in the table below. Fields clear themselves and stay blank, ready for your next entry.",
        ayudaPaso3Titulo: "Add other income",
        ayudaPaso3Desc: "If you get a bonus, a sale, or extra money, record it in the 'Other Income' tab.",
        ayudaPaso4Titulo: "Check your accounts",
        ayudaPaso4Desc: "The colored cards update themselves. If you want to see charts, your history, or prepare your tax return, unlock the Premium version.",
        ayudaRecordatorio: "💡 Remember: if you close this window, you can always reopen it by tapping the 'Instructions' button at the top.",
        ayudaBtnEntendido: "Got it, let's record expenses!"
    }
};

let idioma = "es";
let tema = "light";

function t(clave) {
    const args = Array.prototype.slice.call(arguments, 1);
    let texto = (I18N[idioma] && I18N[idioma][clave]) || I18N.es[clave] || clave;
    args.forEach(function (valor, i) { texto = texto.replace("{" + i + "}", valor); });
    return texto;
}

function localeActual() {
    return idioma === "es" ? "es-ES" : "en-US";
}

const MAPA_TRADUCCION = {
    "Hogar": "catHogar", "Supermercado": "catSupermercado", "Restaurantes": "catRestaurantes",
    "Compras": "catCompras", "Transporte": "catTransporte", "Ocio": "catOcio",
    "Salud": "catSalud", "Educación": "catEducacion", "Viajes": "catViajes",
    "Mascotas": "catMascotas", "Otra": "catOtra",
    
    "Vida diaria": "catSupermercado", 
    "Entretenimiento": "catOcio",
    "Vacaciones": "catViajes",

    "Hipoteca/Alquiler": "exHipoteca", "Comestibles": "exComestibles",
    "Gasolina": "exGasolina", "Netflix": "exNetflix", "Gimnasio": "exGimnasio",
    "Vuelos": "exVuelos", "Alimento": "exAlimento",
    "Bono del trabajo": "exBono", "Venta de mueble": "exVenta"
};

const MAPA_PLACEHOLDERS = {
    "Hogar": "phSubHogar",
    "Supermercado": "phSubSupermercado",
    "Restaurantes": "phSubRestaurantes",
    "Compras": "phSubCompras",
    "Transporte": "phSubTransporte",
    "Ocio": "phSubOcio",
    "Salud": "phSubSalud",
    "Educación": "phSubEducacion",
    "Viajes": "phSubViajes",
    "Mascotas": "phSubMascotas",
    "OTRA": "phSubOtra"
};

function traducir(texto) {
    const clave = MAPA_TRADUCCION[texto];
    return clave ? t(clave) : texto;
}

/* ==================== PREMIUM & LÍMITES ==================== */
let esPremium = localStorage.getItem("esPremium") === "true";
const LIMITE_GASTOS_GRATIS = 10;

function actualizarEstadoPremium() {
    if (esPremium) {
        document.body.classList.add("es-premium");
    } else {
        document.body.classList.remove("es-premium");
    }
}

function abrirModalPremium() {
    document.getElementById("modalPremium").classList.add("activo");
}

function cerrarModalPremium() {
    document.getElementById("modalPremium").classList.remove("activo");
}

function simularCompra() {
    esPremium = true;
    localStorage.setItem("esPremium", "true");
    actualizarEstadoPremium();
    cerrarModalPremium();
    actualizarTodo();
    alert("✅ ¡Gracias por tu compra! Funciones Premium desbloqueadas.");
}

function reiniciarPremium() {
    esPremium = false;
    localStorage.setItem("esPremium", "false");
    actualizarEstadoPremium();
    cerrarModalPremium();
    actualizarTodo();
}

function abrirModalAyuda() {
    document.getElementById("modalAyuda").classList.add("activo");
    localStorage.setItem("haVistoInstrucciones", "true");
}

function cerrarModalAyuda() {
    document.getElementById("modalAyuda").classList.remove("activo");
}

/* ==================== CONVERSIÓN DE MONEDAS ==================== */
const TASAS = { EUR: 1, USD: 1.09, COP: 4500 };

let monedaActual = "EUR";
let gastos = [];
let ingresos = [];
let ingresosBaseMes = {};

let editandoGastoId = null;
let editandoIngresoId = null;

function convertirDesdeEUR(montoEUR, aMoneda) {
    if (montoEUR === null || montoEUR === undefined || isNaN(montoEUR)) return 0;
    if (aMoneda === "EUR") return montoEUR;
    if (aMoneda === "USD") return montoEUR * TASAS.USD;
    if (aMoneda === "COP") return montoEUR * TASAS.COP;
    return montoEUR;
}

function convertirAEUR(monto, desdeMoneda) {
    if (monto === null || monto === undefined || isNaN(monto)) return 0;
    if (desdeMoneda === "EUR") return monto;
    if (desdeMoneda === "USD") return monto / TASAS.USD;
    if (desdeMoneda === "COP") return monto / TASAS.COP;
    return monto;
}

function formatearMonto(montoEUR) {
    if (montoEUR === null || montoEUR === undefined || isNaN(montoEUR)) montoEUR = 0;
    const montoConvertido = convertirDesdeEUR(montoEUR, monedaActual);
    const simbolo = monedaActual === "COP" ? "$" : (monedaActual === "USD" ? "US$" : "€");
    let formateado;
    if (monedaActual === "COP") {
        const loc = idioma === "es" ? "es-CO" : "en-US";
        formateado = Math.round(montoConvertido).toLocaleString(loc);
    } else {
        formateado = montoConvertido.toLocaleString(localeActual(), {
            minimumFractionDigits: 2, maximumFractionDigits: 2
        });
    }
    return simbolo + " " + formateado;
}

/* ==================== FECHAS ==================== */
function parseFecha(fechaStr) {
    return new Date(fechaStr + "T00:00:00");
}

function hoyISO() {
    const d = new Date();
    return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}

function getCurrentMonthKey() {
    const d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0");
}

function getMonthKey(fechaStr) {
    const d = parseFecha(fechaStr);
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0");
}

function formatearFecha(fechaStr) {
    return parseFecha(fechaStr).toLocaleDateString(localeActual(), {
        day: "2-digit", month: "2-digit", year: "numeric"
    });
}

/* ==================== INGRESO BASE POR MES ==================== */
function getIngresoBaseMes(mesKey) {
    return ingresosBaseMes[mesKey] || 0;
}

function setIngresoBaseMes(mesKey, valorEUR) {
    if (valorEUR === null || valorEUR === undefined || isNaN(valorEUR)) return;
    if (valorEUR < 0) return;
    ingresosBaseMes[mesKey] = valorEUR;
}

function removeIngresoBaseMes(mesKey) {
    delete ingresosBaseMes[mesKey];
}

function getTotalIngresosMesConBaseEUR(mesKey) {
    let total = getIngresoBaseMes(mesKey);
    for (let i of ingresos) {
        if (getMonthKey(i.fecha) === mesKey) total += i.montoEUR;
    }
    return total;
}

/* ==================== TOTALES ==================== */
function getTotalGastosMesEUR() {
    const mesActual = getCurrentMonthKey();
    let total = 0;
    for (let g of gastos) {
        if (getMonthKey(g.fecha) === mesActual) total += g.montoEUR;
    }
    return total;
}

function getSaldoDisponibleEUR() {
    const mesActual = getCurrentMonthKey();
    return getTotalIngresosMesConBaseEUR(mesActual) - getTotalGastosMesEUR();
}

/* ==================== PERSISTENCIA ==================== */
function guardarDatos() {
    localStorage.setItem("moneda_actual_final", monedaActual);
    localStorage.setItem("gastos_app_final", JSON.stringify(gastos));
    localStorage.setItem("ingresos_app_final", JSON.stringify(ingresos));
    localStorage.setItem("ingresos_base_mes_final", JSON.stringify(ingresosBaseMes));
}

function cargarDatos() {
    const moneda = localStorage.getItem("moneda_actual_final");
    if (moneda && (moneda === "COP" || moneda === "USD" || moneda === "EUR")) {
        monedaActual = moneda;
    }
    const g = localStorage.getItem("gastos_app_final");
    if (g) gastos = JSON.parse(g);
    const i = localStorage.getItem("ingresos_app_final");
    if (i) ingresos = JSON.parse(i);

    const storedMeses = localStorage.getItem("ingresos_base_mes_final");
    if (storedMeses) {
        try { ingresosBaseMes = JSON.parse(storedMeses) || {}; } catch (e) { ingresosBaseMes = {}; }
    }

    const oldSaldo = localStorage.getItem("saldo_base_eur_final");
    if (oldSaldo && oldSaldo !== "null") {
        const oldValor = parseFloat(oldSaldo);
        if (!isNaN(oldValor) && oldValor > 0 && Object.keys(ingresosBaseMes).length === 0) {
            ingresosBaseMes[getCurrentMonthKey()] = oldValor;
        }
        localStorage.removeItem("saldo_base_eur_final");
    }
    localStorage.removeItem("ingreso_base_default_final");

    document.getElementById("monedaSelector").value = monedaActual;
    actualizarInputSaldoBase();
    guardarDatos();
}

function actualizarInputSaldoBase() {
    const input = document.getElementById("saldoInicialInput");
    if (!input) return;
    if (document.activeElement === input) return;
    
    const valorEUR = getIngresoBaseMes(getCurrentMonthKey());
    if (valorEUR > 0) {
        const valorConv = convertirDesdeEUR(valorEUR, monedaActual);
        input.value = valorConv.toLocaleString(localeActual(), {
            minimumFractionDigits: 2, maximumFractionDigits: 2
        });
    } else {
        input.value = "";
    }
}

/* ==================== SALDO BASE (INPUT) ==================== */
function guardarSaldoBaseDesdeInput() {
    const input = document.getElementById("saldoInicialInput");
    let valor = input.value.trim();
    const mesActual = getCurrentMonthKey();

    if (valor === "") {
        removeIngresoBaseMes(mesActual);
        guardarDatos();
        actualizarTodo();
        return;
    }

    if (idioma === "es") {
        valor = valor.replace(/\./g, "").replace(",", ".");
    } else {
        valor = valor.replace(/,/g, "");
    }

    const num = parseFloat(valor);
    if (isNaN(num) || num < 0) {
        actualizarInputSaldoBase();
        return;
    }

    setIngresoBaseMes(mesActual, convertirAEUR(num, monedaActual));
    guardarDatos();
    actualizarTodo();
}

/* ==================== ACCIONES ==================== */
function reiniciarTodo() {
    if (confirm(t("confirmReiniciar"))) {
        monedaActual = "EUR";
        gastos = [];
        ingresos = [];
        ingresosBaseMes = {};
        editandoGastoId = null;
        editandoIngresoId = null;
        guardarDatos();
        
        localStorage.removeItem("haVistoInstrucciones");

        document.getElementById("monedaSelector").value = monedaActual;
        document.getElementById("saldoInicialInput").value = "";
        cancelarEdicionGasto();
        cancelarEdicionIngreso();
        actualizarTodo();
        
        alert(t("alertReiniciado"));
        
        abrirModalAyuda();
    }
}

function cambiarMoneda() {
    monedaActual = document.getElementById("monedaSelector").value;
    guardarDatos();
    actualizarTodo();
    if (document.getElementById("vistaAnual").style.display !== "none") renderizarAnual();
}

function limpiarCamposGasto() {
    document.getElementById("catGastoSelect").value = "Hogar";
    document.getElementById("categoriaPersonalizadaDiv").style.display = "none";
    document.getElementById("catGastoPersonalizado").value = "";
    document.getElementById("subcatGasto").value = "";
    document.getElementById("montoGasto").value = "";
    document.getElementById("fechaGasto").value = hoyISO();
    
    document.getElementById("subcatGasto").placeholder = t(MAPA_PLACEHOLDERS["Hogar"]);
}

function limpiarCamposIngreso() {
    document.getElementById("conceptoIngreso").value = "";
    document.getElementById("montoIngreso").value = "";
    document.getElementById("fechaIngreso").value = hoyISO();
}

function agregarGasto() {
    if (!esPremium) {
        const mesActual = getCurrentMonthKey();
        const gastosMesCount = gastos.filter(g => getMonthKey(g.fecha) === mesActual).length;
        if (gastosMesCount >= LIMITE_GASTOS_GRATIS && editandoGastoId === null) {
            abrirModalPremium();
            return; 
        }
    }

    const categoria = getCategoriaValue();
    const subcategoria = document.getElementById("subcatGasto").value.trim();
    const fecha = document.getElementById("fechaGasto").value;
    const montoEnMonedaActual = parseFloat(document.getElementById("montoGasto").value);

    if (!fecha) { alert(t("errFecha")); return; }
    if (!categoria) { alert(t("errCategoria")); return; }
    if (!subcategoria) { alert(t("errSubcategoria")); return; }
    if (isNaN(montoEnMonedaActual) || montoEnMonedaActual <= 0) { alert(t("errMonto")); return; }

    const montoEUR = convertirAEUR(montoEnMonedaActual, monedaActual);

    if (editandoGastoId !== null) {
        const idx = gastos.findIndex(function (g) { return g.id === editandoGastoId; });
        if (idx !== -1) {
            gastos[idx].categoria = categoria;
            gastos[idx].subcategoria = subcategoria;
            gastos[idx].fecha = fecha;
            gastos[idx].montoEUR = montoEUR;
        }
        editandoGastoId = null;
        guardarDatos();
        actualizarTodo();
        cancelarEdicionGasto();
        return;
    }

    gastos.push({
        id: Date.now() + Math.random(),
        categoria: categoria,
        subcategoria: subcategoria,
        fecha: fecha,
        montoEUR: montoEUR
    });
    guardarDatos();
    actualizarTodo();
    limpiarCamposGasto();
    document.getElementById("subcatGasto").focus();
}

function eliminarGasto(id) {
    gastos = gastos.filter(function (g) { return g.id !== id; });
    if (editandoGastoId === id) cancelarEdicionGasto();
    guardarDatos();
    actualizarTodo();
}

function agregarIngreso() {
    const concepto = document.getElementById("conceptoIngreso").value.trim();
    const fecha = document.getElementById("fechaIngreso").value;
    const montoEnMonedaActual = parseFloat(document.getElementById("montoIngreso").value);

    if (!fecha) { alert(t("errFecha")); return; }
    if (!concepto) { alert(t("errConcepto")); return; }
    if (isNaN(montoEnMonedaActual) || montoEnMonedaActual <= 0) { alert(t("errMonto")); return; }

    const montoEUR = convertirAEUR(montoEnMonedaActual, monedaActual);

    if (editandoIngresoId !== null) {
        const idx = ingresos.findIndex(function (i) { return i.id === editandoIngresoId; });
        if (idx !== -1) {
            ingresos[idx].concepto = concepto;
            ingresos[idx].fecha = fecha;
            ingresos[idx].montoEUR = montoEUR;
        }
        editandoIngresoId = null;
        guardarDatos();
        actualizarTodo();
        cancelarEdicionIngreso();
        return;
    }

    ingresos.push({
        id: Date.now() + Math.random(),
        concepto: concepto,
        fecha: fecha,
        montoEUR: montoEUR
    });
    guardarDatos();
    actualizarTodo();
    limpiarCamposIngreso();
    document.getElementById("conceptoIngreso").focus();
}

function eliminarIngreso(id) {
    ingresos = ingresos.filter(function (i) { return i.id !== id; });
    if (editandoIngresoId === id) cancelarEdicionIngreso();
    guardarDatos();
    actualizarTodo();
}

/* ==================== EDICIÓN ==================== */
function iniciarEdicionGasto(id) {
    const g = gastos.find(function (x) { return x.id === id; });
    if (!g) return;
    editandoGastoId = id;

    const selectCat = document.getElementById("catGastoSelect");
    const divPersonalizado = document.getElementById("categoriaPersonalizadaDiv");
    const catPersonalizado = document.getElementById("catGastoPersonalizado");

    const existeEnSelect = Array.from(selectCat.options).some(function (o) {
        return o.value === g.categoria && o.value !== "OTRA";
    });

    if (existeEnSelect) {
        selectCat.value = g.categoria;
        divPersonalizado.style.display = "none";
        catPersonalizado.value = "";
    } else {
        selectCat.value = "OTRA";
        divPersonalizado.style.display = "block";
        catPersonalizado.value = g.categoria;
    }

    document.getElementById("subcatGasto").value = g.subcategoria;
    document.getElementById("fechaGasto").value = g.fecha;
    document.getElementById("montoGasto").value = convertirDesdeEUR(g.montoEUR, monedaActual).toFixed(2);

    const catVal = selectCat.value;
    const phKey = MAPA_PLACEHOLDERS[catVal] || "phSubOtra";
    document.getElementById("subcatGasto").placeholder = t(phKey);

    actualizarBotonesEdicion();

    const form = document.getElementById("formGasto");
    if (form && form.scrollIntoView) form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelarEdicionGasto() {
    editandoGastoId = null;
    limpiarCamposGasto();
    actualizarBotonesEdicion();
}

function iniciarEdicionIngreso(id) {
    const i = ingresos.find(function (x) { return x.id === id; });
    if (!i) return;
    editandoIngresoId = id;

    document.getElementById("conceptoIngreso").value = i.concepto;
    document.getElementById("fechaIngreso").value = i.fecha;
    document.getElementById("montoIngreso").value = convertirDesdeEUR(i.montoEUR, monedaActual).toFixed(2);

    actualizarBotonesEdicion();

    const form = document.getElementById("formIngreso");
    if (form && form.scrollIntoView) form.scrollIntoView({ behavior: "smooth", block: "center" });
}

function cancelarEdicionIngreso() {
    editandoIngresoId = null;
    limpiarCamposIngreso();
    actualizarBotonesEdicion();
}

function actualizarBotonesEdicion() {
    const btnG = document.getElementById("btnAgregarGasto");
    const btnCG = document.getElementById("btnCancelarEdicionGasto");
    if (editandoGastoId !== null) {
        btnG.textContent = t("btnGuardarCambios");
        btnG.classList.add("modo-edicion");
        btnCG.style.display = "block";
        btnCG.textContent = t("btnCancelarEdicion");
    } else {
        btnG.textContent = t("btnAgregarGasto");
        btnG.classList.remove("modo-edicion");
        btnCG.style.display = "none";
    }

    const btnI = document.getElementById("btnAgregarIngreso");
    const btnCI = document.getElementById("btnCancelarEdicionIngreso");
    if (editandoIngresoId !== null) {
        btnI.textContent = t("btnGuardarCambios");
        btnI.classList.add("modo-edicion");
        btnCI.style.display = "block";
        btnCI.textContent = t("btnCancelarEdicion");
    } else {
        btnI.textContent = t("btnAgregarIngreso");
        btnI.classList.remove("modo-edicion");
        btnCI.style.display = "none";
    }
}

/* ==================== CATEGORÍA PERSONALIZADA ==================== */
function actualizarPlaceholderSubcategoria() {
    const selectCat = document.getElementById("catGastoSelect");
    const catVal = selectCat.value;
    const phKey = MAPA_PLACEHOLDERS[catVal] || "phSubOtra";
    document.getElementById("subcatGasto").placeholder = t(phKey);
}

function initCategoriaPersonalizada() {
    const selectCat = document.getElementById("catGastoSelect");
    const divPersonalizado = document.getElementById("categoriaPersonalizadaDiv");
    
    selectCat.addEventListener("change", function () {
        if (this.value === "OTRA") {
            divPersonalizado.style.display = "block";
            document.getElementById("catGastoPersonalizado").focus();
        } else {
            divPersonalizado.style.display = "none";
        }
        actualizarPlaceholderSubcategoria();
    });
}

function getCategoriaValue() {
    const selectCat = document.getElementById("catGastoSelect");
    if (selectCat.value === "OTRA") {
        const personalizado = document.getElementById("catGastoPersonalizado").value.trim();
        return personalizado || "Otra";
    }
    return selectCat.value;
}

/* ==================== EXPORTAR / IMPORTAR ==================== */
function descargarBlob(blob, nombreArchivo) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = nombreArchivo;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
}

function exportarJSON() {
    const datos = {
        version: 3,
        exportadoEn: new Date().toISOString(),
        monedaActual: monedaActual,
        ingresosBaseMes: ingresosBaseMes,
        gastos: gastos,
        ingresos: ingresos
    };
    const blob = new Blob([JSON.stringify(datos, null, 2)], { type: "application/json" });
    descargarBlob(blob, "gastos-" + hoyISO() + ".json");
    
    setTimeout(function() {
        alert(t("alertCopiaGuardada"));
    }, 500);
}

function exportarCSV() {
    if (!esPremium) { abrirModalPremium(); return; }

    const esES = (idioma === "es");
    const sep = esES ? ";" : ",";
    const decimal = esES ? "," : ".";

    const formatoNum = function (n) {
        const v = Number(Number(n).toFixed(2));
        return String(v).replace(".", decimal);
    };

    const cabecera = ["Tipo", "Fecha", "Categoría", "Subcategoría/Concepto", "Valor", "Moneda"];
    const filas = [];

    for (let g of gastos) {
        const montoConv = convertirDesdeEUR(g.montoEUR, monedaActual);
        filas.push(["Gasto", g.fecha, g.categoria, g.subcategoria, formatoNum(montoConv), monedaActual]);
    }
    for (let i of ingresos) {
        const montoConv = convertirDesdeEUR(i.montoEUR, monedaActual);
        filas.push(["Ingreso", i.fecha, "", i.concepto, formatoNum(montoConv), monedaActual]);
    }

    filas.sort(function (a, b) { return b[1].localeCompare(a[1]); });

    const escaparCelda = function (c) {
        const s = String(c === null || c === undefined ? "" : c);
        if (s.indexOf(sep) !== -1 || s.indexOf('"') !== -1 ||
            s.indexOf("\n") !== -1 || s.indexOf("\r") !== -1) {
            return '"' + s.replace(/"/g, '""') + '"';
        }
        return s;
    };

    const lineas = [cabecera].concat(filas).map(function (row) {
        return row.map(escaparCelda).join(sep);
    });

    const contenido = "\uFEFF" + lineas.join("\r\n");

    descargarBlob(
        new Blob([contenido], { type: "text/csv;charset=utf-8" }),
        "gastos-" + hoyISO() + ".csv"
    );
}

function importarJSON(event) {
    if (!esPremium) { 
        abrirModalPremium(); 
        event.target.value = "";
        return; 
    }

    const archivo = event.target.files[0];
    if (!archivo) return;

    const lector = new FileReader();
    lector.onload = function (e) {
        try {
            const datos = JSON.parse(e.target.result);

            if (!datos || typeof datos !== "object") throw new Error("invalid");
            if (!Array.isArray(datos.gastos) || !Array.isArray(datos.ingresos)) {
                throw new Error("invalid_format");
            }

            if (!confirm(t("confirmImportar", datos.gastos.length, datos.ingresos.length))) {
                event.target.value = "";
                return;
            }

            gastos = datos.gastos.map(function (g) {
                return {
                    id: (g && g.id !== undefined && g.id !== null) ? g.id : Date.now() + Math.random(),
                    categoria: (g && g.categoria) || "Otra",
                    subcategoria: (g && g.subcategoria) || "",
                    fecha: (g && g.fecha) || hoyISO(),
                    montoEUR: (g && typeof g.montoEUR === "number" && !isNaN(g.montoEUR)) ? g.montoEUR : 0
                };
            });

            ingresos = datos.ingresos.map(function (i) {
                return {
                    id: (i && i.id !== undefined && i.id !== null) ? i.id : Date.now() + Math.random(),
                    concepto: (i && i.concepto) || "",
                    fecha: (i && i.fecha) || hoyISO(),
                    montoEUR: (i && typeof i.montoEUR === "number" && !isNaN(i.montoEUR)) ? i.montoEUR : 0
                };
            });

            ingresosBaseMes = (datos.ingresosBaseMes && typeof datos.ingresosBaseMes === "object" && !Array.isArray(datos.ingresosBaseMes))
                ? datos.ingresosBaseMes : {};

            if (typeof datos.ingresoBaseDefault === "number" && !isNaN(datos.ingresoBaseDefault) && Object.keys(ingresosBaseMes).length === 0) {
                ingresosBaseMes[getCurrentMonthKey()] = datos.ingresoBaseDefault;
            } else if (typeof datos.saldoBaseEUR === "number" && !isNaN(datos.saldoBaseEUR) && Object.keys(ingresosBaseMes).length === 0) {
                ingresosBaseMes[getCurrentMonthKey()] = datos.saldoBaseEUR;
            }

            if (datos.monedaActual === "EUR" || datos.monedaActual === "USD" || datos.monedaActual === "COP") {
                monedaActual = datos.monedaActual;
                document.getElementById("monedaSelector").value = monedaActual;
            }

            cancelarEdicionGasto();
            cancelarEdicionIngreso();

            guardarDatos();
            actualizarTodo();
            alert(t("alertRestaurarExito", gastos.length, ingresos.length));

        } catch (err) {
            alert(t("errImportar"));
        } finally {
            event.target.value = "";
        }
    };
    lector.readAsText(archivo);
}

/* ==================== RENDERIZADO ==================== */
function renderizarGastos() {
    const tbody = document.getElementById("tablaGastosBody");

    const desdeInput = document.getElementById("filtroDesde");
    const hastaInput = document.getElementById("filtroHasta");
    const desde = desdeInput ? desdeInput.value : "";
    const hasta = hastaInput ? hastaInput.value : "";
    const filtroActivo = !!(desde || hasta);

    let lista;
    if (filtroActivo) {
        lista = gastos.filter(function (g) {
            if (desde && g.fecha < desde) return false;
            if (hasta && g.fecha > hasta) return false;
            return true;
        });
    } else {
        const mesActual = getCurrentMonthKey();
        lista = gastos.filter(function (g) { return getMonthKey(g.fecha) === mesActual; });
    }

    lista.sort(function (a, b) { return parseFecha(b.fecha) - parseFecha(a.fecha); });

    if (lista.length === 0) {
        const msg = filtroActivo ? t("vacioGastosFiltro") : t("vacioGastos");
        tbody.innerHTML = '<tr class="vacio"><td colspan="5">' + escapeHtml(msg) + '</td></tr>';
        return;
    }

    tbody.innerHTML = "";
    for (let g of lista) {
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = '<span class="badge-categoria">' + escapeHtml(traducir(g.categoria)) + '</span>';
        row.insertCell(1).innerHTML = escapeHtml(traducir(g.subcategoria));
        row.insertCell(2).innerHTML = formatearFecha(g.fecha);
        row.insertCell(3).innerHTML = "<strong>" + formatearMonto(g.montoEUR) + "</strong>";

        const cellAcciones = row.insertCell(4);
        const wrap = document.createElement("div");
        wrap.className = "acciones-fila";

        const btnEditar = document.createElement("button");
        btnEditar.textContent = "✏️";
        btnEditar.className = "btn-editar";
        btnEditar.title = t("btnEditar");
        btnEditar.onclick = (function (id) { return function () { iniciarEdicionGasto(id); }; })(g.id);

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "🗑️";
        btnEliminar.className = "btn-eliminar";
        btnEliminar.title = t("btnEliminar");
        btnEliminar.onclick = (function (id) { return function () { eliminarGasto(id); }; })(g.id);

        wrap.appendChild(btnEditar);
        wrap.appendChild(btnEliminar);
        cellAcciones.appendChild(wrap);
    }
}

function renderizarIngresos() {
    const tbody = document.getElementById("tablaIngresosBody");
    const mesActual = getCurrentMonthKey();
    const ingresosMes = ingresos
        .filter(function (i) { return getMonthKey(i.fecha) === mesActual; })
        .sort(function (a, b) { return parseFecha(b.fecha) - parseFecha(a.fecha); });

    if (ingresosMes.length === 0) {
        tbody.innerHTML = '<tr class="vacio"><td colspan="4">' + escapeHtml(t("vacioIngresos")) + '</td></tr>';
        return;
    }

    tbody.innerHTML = "";
    for (let i of ingresosMes) {
        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = '<span class="badge-ingreso">' + escapeHtml(traducir(i.concepto)) + '</span>';
        row.insertCell(1).innerHTML = formatearFecha(i.fecha);
        row.insertCell(2).innerHTML = '<strong class="positivo">+' + formatearMonto(i.montoEUR) + "</strong>";

        const cellAcciones = row.insertCell(3);
        const wrap = document.createElement("div");
        wrap.className = "acciones-fila";

        const btnEditar = document.createElement("button");
        btnEditar.textContent = "✏️";
        btnEditar.className = "btn-editar";
        btnEditar.title = t("btnEditar");
        btnEditar.onclick = (function (id) { return function () { iniciarEdicionIngreso(id); }; })(i.id);

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "🗑️";
        btnEliminar.className = "btn-eliminar";
        btnEliminar.title = t("btnEliminar");
        btnEliminar.onclick = (function (id) { return function () { eliminarIngreso(id); }; })(i.id);

        wrap.appendChild(btnEditar);
        wrap.appendChild(btnEliminar);
        cellAcciones.appendChild(wrap);
    }
}

/* ==================== FILTRO ==================== */
function limpiarFiltroGastos() {
    if (!esPremium) { abrirModalPremium(); return; }
    document.getElementById("filtroDesde").value = "";
    document.getElementById("filtroHasta").value = "";
    renderizarGastos();
}

/* ==================== DISTRIBUCIÓN ==================== */
const PALETA_BARRAS = ['#6366f1', '#10b981', '#f59e0b', '#ec4899', '#06b6d4', '#8b5cf6'];
const COLOR_OTRAS = '#94a3b8';
const TOP_CATEGORIAS = 6;
const SENTINEL_OTRAS = '__OTRAS__';

function renderizarDistribucion() {
    const contenedor = document.getElementById("distribucionBarras");
    if (!contenedor) return;

    const panel = document.getElementById("panelDistribucion");
    if (!esPremium) {
        panel.classList.add("feature-lock");
        panel.onclick = abrirModalPremium;
        contenedor.innerHTML = "";
        return;
    } else {
        panel.classList.remove("feature-lock");
        panel.onclick = null;
    }

    const mesActual = getCurrentMonthKey();
    const gastosMes = gastos.filter(function (g) { return getMonthKey(g.fecha) === mesActual; });

    const porCategoria = {};
    for (let g of gastosMes) {
        porCategoria[g.categoria] = (porCategoria[g.categoria] || 0) + g.montoEUR;
    }

    const entradas = Object.keys(porCategoria)
        .map(function (k) { return [k, porCategoria[k]]; })
        .sort(function (a, b) { return b[1] - a[1]; });

    if (entradas.length === 0) {
        contenedor.innerHTML = '<p class="vacio-distribucion">' + escapeHtml(t("vacioDistribucion")) + '</p>';
        return;
    }

    let mostrar = entradas;
    if (entradas.length > TOP_CATEGORIAS) {
        const top = entradas.slice(0, TOP_CATEGORIAS);
        const resto = entradas.slice(TOP_CATEGORIAS).reduce(function (s, e) { return s + e[1]; }, 0);
        mostrar = top;
        if (resto > 0) mostrar.push([SENTINEL_OTRAS, resto]);
    }

    const total = mostrar.reduce(function (s, e) { return s + e[1]; }, 0);
    const maximo = mostrar.reduce(function (m, e) { return e[1] > m ? e[1] : m; }, 0);

    contenedor.innerHTML = "";

    mostrar.forEach(function (par, idx) {
        const nombre = par[0];
        const montoEUR = par[1];
        const pct = total > 0 ? (montoEUR / total * 100) : 0;
        const ancho = maximo > 0 ? (montoEUR / maximo * 100) : 0;

        const esOtras = nombre === SENTINEL_OTRAS;
        const nombreTrad = esOtras ? t("otrasCategorias") : traducir(nombre);
        const color = esOtras ? COLOR_OTRAS : PALETA_BARRAS[idx % PALETA_BARRAS.length];

        const fila = document.createElement("div");
        fila.className = "barra-fila";
        fila.innerHTML =
            '<div class="barra-cabecera">' +
                '<span class="barra-nombre" title="' + escapeHtml(nombreTrad) + '">' + escapeHtml(nombreTrad) + '</span>' +
                '<span class="barra-valor">' + formatearMonto(montoEUR) +
                    '<span class="barra-pct">(' + pct.toFixed(1) + '%)</span>' +
                '</span>' +
            '</div>' +
            '<div class="barra-pista">' +
                '<div class="barra-relleno" style="background:' + color + '"></div>' +
            '</div>';
        contenedor.appendChild(fila);

        const relleno = fila.querySelector(".barra-relleno");
        requestAnimationFrame(function () {
            requestAnimationFrame(function () {
                relleno.style.width = ancho + "%";
            });
        });
    });
}

/* ==================== TARJETAS ==================== */
function actualizarTarjetas() {
    const mesActual = getCurrentMonthKey();
    const totalGastosEUR = getTotalGastosMesEUR();
    const totalIngresosEUR = getTotalIngresosMesConBaseEUR(mesActual);
    const disponibleEUR = getSaldoDisponibleEUR();

    document.getElementById("totalIngresosValor").innerHTML = formatearMonto(totalIngresosEUR);
    document.getElementById("totalGastosValor").innerHTML = formatearMonto(totalGastosEUR);

    const saldoSpan = document.getElementById("saldoDisponible");
    saldoSpan.innerHTML = formatearMonto(disponibleEUR);
    saldoSpan.style.color = (disponibleEUR !== null && disponibleEUR < 0) ? "#facc15" : "white";

    actualizarInputSaldoBase();
}

/* ==================== TABLA ANUAL ==================== */
let anioSeleccionado = new Date().getFullYear();

function guardarIngresoBaseAnual(event) {
    const input = event.target;
    const mesStr = input.dataset.mes;
    let valor = input.value.trim();

    if (valor === "") {
        removeIngresoBaseMes(mesStr);
    } else {
        if (idioma === "es") {
            valor = valor.replace(/\./g, "").replace(",", ".");
        } else {
            valor = valor.replace(/,/g, "");
        }
        
        const num = parseFloat(valor);
        if (isNaN(num) || num < 0) {
            renderizarAnual();
            return;
        }
        setIngresoBaseMes(mesStr, convertirAEUR(num, monedaActual));
    }
    guardarDatos();
    actualizarTodo();
    renderizarAnual();
}

function renderizarAnual() {
    if (!esPremium) { return; }

    const tbody = document.getElementById("tablaAnualBody");
    const tfoot = document.getElementById("tablaAnualFoot");
    tbody.innerHTML = "";
    tfoot.innerHTML = "";

    const todos = gastos.concat(ingresos);
    const anios = [];
    todos.forEach(function (item) {
        const a = parseFecha(item.fecha).getFullYear();
        if (anios.indexOf(a) === -1) anios.push(a);
    });
    if (anios.indexOf(anioSeleccionado) === -1) anios.push(anioSeleccionado);
    anios.sort(function (a, b) { return b - a; });

    const selector = document.getElementById("selectorAnio");
    selector.innerHTML = "";
    for (let a of anios) {
        const opt = document.createElement("option");
        opt.value = a;
        opt.textContent = a;
        if (a === anioSeleccionado) opt.selected = true;
        selector.appendChild(opt);
    }

    let totIngresoBaseAnio = 0;
    let totGastosAnio = 0;
    let totIngresosAnio = 0;

    for (let mes = 1; mes <= 12; mes++) {
        const mesStr = anioSeleccionado + "-" + String(mes).padStart(2, "0");
        let totalGastosEUR = 0;
        for (let g of gastos) {
            if (getMonthKey(g.fecha) === mesStr) totalGastosEUR += g.montoEUR;
        }
        const ingresoBaseEUR = getIngresoBaseMes(mesStr);
        const totalIngresosEUR = getTotalIngresosMesConBaseEUR(mesStr);

        totIngresoBaseAnio += ingresoBaseEUR;
        totGastosAnio += totalGastosEUR;
        totIngresosAnio += totalIngresosEUR;

        const saldoNetoEUR = totalIngresosEUR - totalGastosEUR;
        const nombreMes = new Date(anioSeleccionado, mes - 1, 1)
            .toLocaleString(localeActual(), { month: "long" });
        const nombreCap = nombreMes.charAt(0).toUpperCase() + nombreMes.slice(1);

        const row = tbody.insertRow();
        row.insertCell(0).innerHTML = anioSeleccionado;
        row.insertCell(1).innerHTML = nombreCap;

        const cellBase = row.insertCell(2);
        const inputBase = document.createElement("input");
        inputBase.type = "text";
        inputBase.inputMode = "decimal";
        inputBase.className = "input-ingreso-base-anual";
        inputBase.placeholder = "0.00";
        inputBase.dataset.mes = mesStr;
        const baseConv = convertirDesdeEUR(ingresoBaseEUR, monedaActual);
        inputBase.value = baseConv > 0 ? baseConv.toLocaleString(localeActual(), { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "";
        inputBase.addEventListener("blur", guardarIngresoBaseAnual);
        inputBase.addEventListener("keydown", function (e) {
            if (e.key === "Enter") { e.preventDefault(); this.blur(); }
        });
        cellBase.appendChild(inputBase);

        row.insertCell(3).innerHTML = '<span class="negativo">' + formatearMonto(totalGastosEUR) + "</span>";
        row.insertCell(4).innerHTML = '<span class="positivo">+' + formatearMonto(totalIngresosEUR) + "</span>";
        row.insertCell(5).innerHTML = '<strong style="color:' + (saldoNetoEUR >= 0 ? "#10b981" : "#dc2626") + '">' +
            formatearMonto(saldoNetoEUR) + "</strong>";
    }

    const totNeto = totIngresosAnio - totGastosAnio;
    const filaTotal = document.createElement("tr");
    filaTotal.className = "fila-total";
    filaTotal.innerHTML =
        '<td colspan="2">' + escapeHtml(t("totalAnio", anioSeleccionado)) + '</td>' +
        '<td>' + formatearMonto(totIngresoBaseAnio) + '</td>' +
        '<td><span class="negativo">' + formatearMonto(totGastosAnio) + '</span></td>' +
        '<td><span class="positivo">+' + formatearMonto(totIngresosAnio) + '</span></td>' +
        '<td><strong style="color:' + (totNeto >= 0 ? "#10b981" : "#dc2626") + '">' + formatearMonto(totNeto) + '</strong></td>';
    tfoot.appendChild(filaTotal);
}

function actualizarTodo() {
    renderizarGastos();
    renderizarIngresos();
    actualizarTarjetas();
    renderizarDistribucion();
    if (document.getElementById("vistaAnual").style.display !== "none") renderizarAnual();
    actualizarEstadoPremium();
}

function escapeHtml(str) {
    if (!str) return "";
    return String(str).replace(/[&<>"]/g, function (m) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m];
    });
}

function cambiarVista(vista) {
    if (vista === "anual" && !esPremium) {
        abrirModalPremium();
        return;
    }

    document.getElementById("vistaGastos").style.display = "none";
    document.getElementById("vistaIngresos").style.display = "none";
    document.getElementById("vistaAnual").style.display = "none";
    if (vista === "gastos") document.getElementById("vistaGastos").style.display = "block";
    else if (vista === "ingresos") document.getElementById("vistaIngresos").style.display = "block";
    else { document.getElementById("vistaAnual").style.display = "block"; renderizarAnual(); }
}

/* ==================== IDIOMA Y TEMA ==================== */
function aplicarIdioma() {
    document.documentElement.lang = idioma;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        el.innerHTML = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
        el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
    });
    
    const btnIdioma = document.getElementById("btnIdioma");
    if (btnIdioma) {
        btnIdioma.textContent = idioma.toUpperCase();
    }

    actualizarPlaceholderSubcategoria();

    actualizarTodo();
    actualizarBotonesEdicion();

    if (document.getElementById("vistaAnual").style.display !== "none") renderizarAnual();
    actualizarTituloTema();
}

function cambiarIdioma(nuevo) {
    if (nuevo === idioma) return;
    idioma = nuevo;
    localStorage.setItem("idioma_app", idioma);
    aplicarIdioma();
}

function aplicarTema() {
    document.documentElement.setAttribute("data-theme", tema);
    actualizarTituloTema();
}

function actualizarTituloTema() {
    const btn = document.getElementById("btnTema");
    if (!btn) return;
    btn.textContent = tema === "dark" ? "☀️" : "🌙";
    btn.title = tema === "dark" ? t("temaClaro") : t("temaOscuro");
}

function alternarTema() {
    tema = (tema === "dark") ? "light" : "dark";
    localStorage.setItem("tema_app", tema);
    aplicarTema();
}

/* ==================== INICIALIZACIÓN ==================== */
function init() {
    tema = document.documentElement.getAttribute("data-theme") || "light";

    const idiomaGuardado = localStorage.getItem("idioma_app");
    if (idiomaGuardado === "es" || idiomaGuardado === "en") {
        idioma = idiomaGuardado;
    } else if ((navigator.language || "").toLowerCase().indexOf("en") === 0) {
        idioma = "en";
    }

    cargarDatos();
    initCategoriaPersonalizada();
    aplicarTema();
    aplicarIdioma();

    document.getElementById("fechaGasto").value = hoyISO();
    document.getElementById("fechaIngreso").value = hoyISO();

    document.getElementById("btnAgregarGasto").onclick = agregarGasto;
    document.getElementById("btnAgregarIngreso").onclick = agregarIngreso;
    document.getElementById("btnReiniciar").onclick = reiniciarTodo;
    document.getElementById("monedaSelector").onchange = cambiarMoneda;
    document.getElementById("btnTema").onclick = alternarTema;
    document.getElementById("btnAyuda").onclick = abrirModalAyuda;

    document.getElementById("btnIdioma").addEventListener("click", function() {
        cambiarIdioma(idioma === "es" ? "en" : "es");
    });

    const btnPremium = document.getElementById("btnPremiumTop");
    if (btnPremium) {
        btnPremium.onclick = function() {
            document.querySelector('.tab[data-tab="gastos"]').click();
            abrirModalPremium();
        };
    }

    document.getElementById("btnExportarJSON").onclick = exportarJSON;
    document.getElementById("btnExportarCSV").onclick = exportarCSV;
    document.getElementById("btnImportar").onclick = function () {
        if (!esPremium) { abrirModalPremium(); return; }
        document.getElementById("inputImportarJSON").click();
    };
    document.getElementById("inputImportarJSON").onchange = importarJSON;

    document.getElementById("btnCancelarEdicionGasto").onclick = cancelarEdicionGasto;
    document.getElementById("btnCancelarEdicionIngreso").onclick = cancelarEdicionIngreso;

    document.getElementById("filtroDesde").onchange = function() {
        if (!esPremium) { abrirModalPremium(); this.value=""; return; }
        renderizarGastos();
    };
    document.getElementById("filtroHasta").onchange = function() {
        if (!esPremium) { abrirModalPremium(); this.value=""; return; }
        renderizarGastos();
    };
    document.getElementById("btnLimpiarFiltro").onclick = limpiarFiltroGastos;

    const inputSaldo = document.getElementById("saldoInicialInput");
    inputSaldo.addEventListener("blur", guardarSaldoBaseDesdeInput);
    inputSaldo.addEventListener("keydown", function (e) {
        if (e.key === "Enter") { e.preventDefault(); this.blur(); }
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            if (e.target.tagName === "TEXTAREA" || e.target.tagName === "BUTTON") return;
            if (e.target.closest("#formGasto")) {
                e.preventDefault();
                agregarGasto();
            }
            else if (e.target.closest("#formIngreso")) {
                e.preventDefault();
                agregarIngreso();
            }
        }
    });

    document.querySelectorAll(".tab").forEach(function (tab) {
        tab.onclick = function () {
            if (tab.dataset.tab === "anual" && !esPremium) {
                abrirModalPremium();
                return;
            }
            document.querySelectorAll(".tab").forEach(function (otro) { otro.classList.remove("activo"); });
            tab.classList.add("activo");
            cambiarVista(tab.dataset.tab);
        };
    });

    document.getElementById("selectorAnio").onchange = function (e) {
        anioSeleccionado = parseInt(e.target.value);
        renderizarAnual();
    };

    actualizarEstadoPremium();
    actualizarPlaceholderSubcategoria();
    renderizarAnual();

    const estaVacia = (gastos.length === 0 && ingresos.length === 0 && saldoBaseEUR === null);
    const yaLaVio = localStorage.getItem("haVistoInstrucciones") === "true";

    if (estaVacia && !yaLaVio) {
        setTimeout(function() {
            abrirModalAyuda();
        }, 1500);
    }
}

init();