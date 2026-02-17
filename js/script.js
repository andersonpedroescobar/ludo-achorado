// --- CONFIGURACIÓN ---
const gameState = {
    jugadores: [],
    turnoActual: 0,
    fase: 'ESPERANDO',
    modoTiro: 'NORMAL',
    totalJugadores: 0,
    pasosPendientes: 0,
    ultimoValorDado: 0
};

const opcionesSlot = [1, 2, 7];

// --- ZONAS SEGURAS (ESTRELLAS DE COLOR) ---
// Estas son las casillas de SALIDA de cada color.
// Si alguien está aquí, NO puede ser comido.
const ZONAS_SEGURAS = [
    {c: 2, r: 7},  // Estrella Roja
    {c: 14, r: 2}, // Estrella Verde (Corregido según tu imagen, salida verde es 14,2 aprox o ajusta si es diferente)
    {c: 14, r: 9}, // Estrella Amarilla
    {c: 7, r: 14}  // Estrella Azul
];
// NOTA: Si en tu tablero la salida verde es {c:9, r:2}, cambia la segunda coordenada arriba.
// Basado en tu imagen anterior, la salida roja es {c:2, r:7}.

// --- RUTAS ---
const rutaRoja = [
    {c: 2, r: 7}, {c: 3, r: 7}, {c: 4, r: 7}, {c: 5, r: 7}, {c: 6, r: 7}, 
    {c: 7, r: 6}, {c: 7, r: 5}, {c: 7, r: 4}, {c: 7, r: 3}, {c: 7, r: 2}, {c: 7, r: 1},
    {c: 8, r: 1}, {c: 9, r: 1},
    {c: 9, r: 2}, {c: 9, r: 3}, {c: 9, r: 4}, {c: 9, r: 5}, {c: 9, r: 6},
    {c: 10, r: 7}, {c: 11, r: 7}, {c: 12, r: 7}, {c: 13, r: 7}, {c: 14, r: 7}, {c: 15, r: 7},
    {c: 15, r: 8}, {c: 15, r: 9},
    {c: 14, r: 9}, {c: 13, r: 9}, {c: 12, r: 9}, {c: 11, r: 9}, {c: 10, r: 9},
    {c: 9, r: 10}, {c: 9, r: 11}, {c: 9, r: 12}, {c: 9, r: 13}, {c: 9, r: 14}, {c: 9, r: 15},
    {c: 8, r: 15}, {c: 7, r: 15},
    {c: 7, r: 14}, {c: 7, r: 13}, {c: 7, r: 12}, {c: 7, r: 11}, {c: 7, r: 10},
    {c: 6, r: 9}, {c: 5, r: 9}, {c: 4, r: 9}, {c: 3, r: 9}, {c: 2, r: 9}, {c: 1, r: 9},
    {c: 1, r: 8}, {c: 2, r: 8}, {c: 3, r: 8}, {c: 4, r: 8}, {c: 5, r: 8}, {c: 6, r: 8}, {c: 7, r: 8} 
];

// Reutilizamos la misma estructura de coordenadas para los otros colores
// (Asegúrate de que estas coincidan con las que pusimos en la respuesta anterior para salida correcta)
const rutaVerde = [
    {c: 9, r: 2}, {c: 9, r: 3}, {c: 9, r: 4}, {c: 9, r: 5}, {c: 9, r: 6},
    {c: 10, r: 7}, {c: 11, r: 7}, {c: 12, r: 7}, {c: 13, r: 7}, {c: 14, r: 7}, {c: 15, r: 7},
    {c: 15, r: 8}, {c: 15, r: 9},
    {c: 14, r: 9}, {c: 13, r: 9}, {c: 12, r: 9}, {c: 11, r: 9}, {c: 10, r: 9},
    {c: 9, r: 10}, {c: 9, r: 11}, {c: 9, r: 12}, {c: 9, r: 13}, {c: 9, r: 14}, {c: 9, r: 15},
    {c: 8, r: 15}, {c: 7, r: 15},
    {c: 7, r: 14}, {c: 7, r: 13}, {c: 7, r: 12}, {c: 7, r: 11}, {c: 7, r: 10},
    {c: 6, r: 9}, {c: 5, r: 9}, {c: 4, r: 9}, {c: 3, r: 9}, {c: 2, r: 9}, {c: 1, r: 9},
    {c: 1, r: 8}, {c: 1, r: 7},
    {c: 2, r: 7}, {c: 3, r: 7}, {c: 4, r: 7}, {c: 5, r: 7}, {c: 6, r: 7},
    {c: 7, r: 6}, {c: 7, r: 5}, {c: 7, r: 4}, {c: 7, r: 3}, {c: 7, r: 2}, {c: 7, r: 1},
    {c: 8, r: 1}, {c: 8, r: 2}, {c: 8, r: 3}, {c: 8, r: 4}, {c: 8, r: 5}, {c: 8, r: 6}, {c: 8, r: 7}
];

const rutaAmarilla = [
    {c: 14, r: 9}, {c: 13, r: 9}, {c: 12, r: 9}, {c: 11, r: 9}, {c: 10, r: 9},
    {c: 9, r: 10}, {c: 9, r: 11}, {c: 9, r: 12}, {c: 9, r: 13}, {c: 9, r: 14}, {c: 9, r: 15},
    {c: 8, r: 15}, {c: 7, r: 15},
    {c: 7, r: 14}, {c: 7, r: 13}, {c: 7, r: 12}, {c: 7, r: 11}, {c: 7, r: 10},
    {c: 6, r: 9}, {c: 5, r: 9}, {c: 4, r: 9}, {c: 3, r: 9}, {c: 2, r: 9}, {c: 1, r: 9},
    {c: 1, r: 8}, {c: 1, r: 7},
    {c: 2, r: 7}, {c: 3, r: 7}, {c: 4, r: 7}, {c: 5, r: 7}, {c: 6, r: 7},
    {c: 7, r: 6}, {c: 7, r: 5}, {c: 7, r: 4}, {c: 7, r: 3}, {c: 7, r: 2}, {c: 7, r: 1},
    {c: 8, r: 1}, {c: 9, r: 1},
    {c: 9, r: 2}, {c: 9, r: 3}, {c: 9, r: 4}, {c: 9, r: 5}, {c: 9, r: 6},
    {c: 10, r: 7}, {c: 11, r: 7}, {c: 12, r: 7}, {c: 13, r: 7}, {c: 14, r: 7}, {c: 15, r: 7},
    {c: 15, r: 8}, {c: 14, r: 8}, {c: 13, r: 8}, {c: 12, r: 8}, {c: 11, r: 8}, {c: 10, r: 8}, {c: 9, r: 8}
];

const rutaAzul = [
    {c: 7, r: 14}, {c: 7, r: 13}, {c: 7, r: 12}, {c: 7, r: 11}, {c: 7, r: 10},
    {c: 6, r: 9}, {c: 5, r: 9}, {c: 4, r: 9}, {c: 3, r: 9}, {c: 2, r: 9}, {c: 1, r: 9},
    {c: 1, r: 8}, {c: 1, r: 7},
    {c: 2, r: 7}, {c: 3, r: 7}, {c: 4, r: 7}, {c: 5, r: 7}, {c: 6, r: 7},
    {c: 7, r: 6}, {c: 7, r: 5}, {c: 7, r: 4}, {c: 7, r: 3}, {c: 7, r: 2}, {c: 7, r: 1},
    {c: 8, r: 1}, {c: 9, r: 1},
    {c: 9, r: 2}, {c: 9, r: 3}, {c: 9, r: 4}, {c: 9, r: 5}, {c: 9, r: 6},
    {c: 10, r: 7}, {c: 11, r: 7}, {c: 12, r: 7}, {c: 13, r: 7}, {c: 14, r: 7}, {c: 15, r: 7},
    {c: 15, r: 8}, {c: 15, r: 9},
    {c: 14, r: 9}, {c: 13, r: 9}, {c: 12, r: 9}, {c: 11, r: 9}, {c: 10, r: 9},
    {c: 9, r: 10}, {c: 9, r: 11}, {c: 9, r: 12}, {c: 9, r: 13}, {c: 9, r: 14}, {c: 9, r: 15},
    {c: 8, r: 15}, {c: 8, r: 14}, {c: 8, r: 13}, {c: 8, r: 12}, {c: 8, r: 11}, {c: 8, r: 10}, {c: 8, r: 9}
];


    // --- 1. CONFIGURACIÓN INICIAL Y ESCUCHA (FUERA DE TODO) ---
const gameState = {
    jugadores: [],
    turnoActual: 0,
    fase: 'ESPERANDO',
    modoTiro: 'NORMAL',
    totalJugadores: 0,
    pasosPendientes: 0,
    ultimoValorDado: 0
};

// ESTO DEBE ESTAR SIEMPRE ACTIVO
if (window.onValue) {
    window.onValue(window.ref(window.db, 'partida/'), (snapshot) => {
        const data = snapshot.val();
        if (!data) return;

        // A. Sincronizar Tablero si no existe
        if (gameState.jugadores.length === 0 && data.totalJugadores) {
            iniciarTableroLocal(data.totalJugadores);
        }

        // B. Sincronizar Estado Global
        gameState.turnoActual = data.turnoActual;
        gameState.fase = data.fase;
        gameState.pasosPendientes = data.pasosPendientes || 0;
        gameState.ultimoValorDado = data.ultimoValorDado || 1;

        // C. Actualizar Visuales (Dado y Mensajes)
        document.getElementById('dice-img').src = `img/dado${gameState.ultimoValorDado}.jpg`;
        actualizarUI();

        // D. Sincronizar Fichas
        if (gameState.jugadores.length > 0 && data.jugadores) {
            data.jugadores.forEach((jData, jIdx) => {
                jData.fichas.forEach((fData, fIdx) => {
                    const fichaLocal = gameState.jugadores[jIdx].fichas[fIdx];
                    if (fichaLocal.posIndex !== fData.posIndex) {
                        fichaLocal.posIndex = fData.posIndex;
                        const div = document.getElementById(`token-${jIdx}-${fIdx}`);
                        const coord = fData.posIndex === -1 
                            ? fichaLocal.baseCoord 
                            : gameState.jugadores[jIdx].ruta[fData.posIndex];
                        if (div) moverFichaCSS(div, coord.c, coord.r);
                    }
                });
            });
        }
        
        // E. Si la fase es SELECCIONANDO, habilitar las fichas para el jugador de turno
        if (gameState.fase === 'SELECCIONANDO') {
            verificarMovimientosLocales(gameState.pasosPendientes, gameState.ultimoValorDado);
        }
    });
}

// --- 2. FUNCIONES DE ACCIÓN (SUBEN DATOS A FIREBASE) ---

function accionPrincipal() {
    if (gameState.fase !== 'ESPERANDO') return;
    
    // Aquí puedes añadir: if (miColorAsignado !== colorDelTurno) return;

    // 1. Decidimos el resultado AQUÍ (una sola vez)
    const dadoEscogido = Math.floor(Math.random() * 6) + 1;
    const bonusEscogido = 0; // Aquí puedes sumar tu lógica de slots si quieres
    const total = dadoEscogido + bonusEscogido;

    // 2. Avisamos a todos los jugadores subiendo el dato
    window.update(window.ref(window.db, 'partida/'), {
        ultimoValorDado: dadoEscogido,
        pasosPendientes: total,
        fase: 'SELECCIONANDO' 
    });
}

// Esta función solo pone las lucecitas amarillas en las fichas
function verificarMovimientosLocales(pasos, dado) {
    const jugador = gameState.jugadores[gameState.turnoActual];
    let posibles = 0;

    jugador.fichas.forEach(ficha => {
        const div = document.getElementById(`token-${jugador.id}-${ficha.id}`);
        div.classList.remove('selectable');
        let puede = (ficha.posIndex === -1) ? (dado === 6) : (ficha.posIndex + pasos < jugador.ruta.length);

        if (puede) {
            div.classList.add('selectable');
            posibles++;
        }
    });

    document.getElementById('game-msg').innerText = posibles > 0 ? "¡Elige ficha!" : "No hay movimientos.";
    if (posibles === 0 && miColorAsignado === jugador.color) {
         setTimeout(pasarTurnoFirebase, 2000);
    }
}

function seleccionarFicha(jugadorId, fichaId) {
    if (gameState.fase !== 'SELECCIONANDO') return;
    if (jugadorId !== gameState.turnoActual) return;
    
    // 1. Mover localmente para feedback instantáneo
    moverFichaFirebase(fichaId);
}

function moverFichaFirebase(fichaId) {
    const jugador = gameState.jugadores[gameState.turnoActual];
    const ficha = jugador.fichas[fichaId];
    
    let nuevoIndice = (ficha.posIndex === -1) ? 0 : ficha.posIndex + gameState.pasosPendientes;
    
    // 2. Subir el movimiento a Firebase
    const updates = {};
    updates[`partida/jugadores/${gameState.turnoActual}/fichas/${fichaId}/posIndex`] = nuevoIndice;
    
    // Si no sacó 6, cambiar el turno
    if (gameState.ultimoValorDado !== 6) {
        updates['partida/turnoActual'] = (gameState.turnoActual + 1) % gameState.totalJugadores;
    }
    
    updates['partida/fase'] = 'ESPERANDO';
    window.update(window.ref(window.db), updates);
}



function toggleRules() {
    const modal = document.getElementById('rules-modal');
    modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
}

// --- BOTÓN GIRAR ---
function accionPrincipal() {
    if (gameState.fase === 'GIRANDO') return;
    if (gameState.fase === 'SELECCIONANDO') { alert("¡Elige una ficha!"); return; }

    gameState.fase = 'GIRANDO';
    document.getElementById('dice-img').classList.add('rolling');
    document.getElementById('game-msg').innerText = "🎲 ...";

    if (gameState.modoTiro === 'NORMAL') animarTiro(true);
    else animarTiro(false);
}

function animarTiro(incluirSlot) {
    let iter = 0;
    const intervalo = setInterval(() => {
        if (incluirSlot) {
            document.getElementById('reel1').innerText = rndArr(opcionesSlot);
            document.getElementById('reel2').innerText = rndArr(opcionesSlot);
            document.getElementById('reel3').innerText = rndArr(opcionesSlot);
        }
        const d = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice-img').src = `img/dado${d}.jpg`;
        iter++;
        if (iter > 15) {
            clearInterval(intervalo);
            calcularResultados(incluirSlot);
        }
    }, 100);
}

function calcularResultados(incluirSlot) {
    document.getElementById('dice-img').classList.remove('rolling');
    let bonus = 0;
    if (incluirSlot) {
        const s1 = rndArr(opcionesSlot);
        const s2 = rndArr(opcionesSlot);
        const s3 = rndArr(opcionesSlot);
        document.getElementById('reel1').innerText = s1;
        document.getElementById('reel2').innerText = s2;
        document.getElementById('reel3').innerText = s3;
        bonus = calcularBonus(s1, s2, s3);
    }
    const dado = Math.floor(Math.random() * 6) + 1;
    document.getElementById('dice-img').src = `img/dado${dado}.jpg`;
    gameState.ultimoValorDado = dado;

    // 🔥 ESTO ES LO NUEVO: Avisar a Firebase del resultado
    if (window.update) {
        window.update(window.ref(window.db, 'partida/'), {
            ultimoValorDado: dado,
            pasosPendientes: total,
            fase: 'SELECCIONANDO' // Esto le dirá a la pantalla de tu amigo que ya puede elegir ficha
        });
    }

    // --- AQUÍ ACTIVAMOS CHIKAWA SI SALE 6 ---
    if (dado === 6) {
        mostrarCelebracion6();
    }

    const total = bonus + dado;
    gameState.pasosPendientes = total;

    const txtSlot = incluirSlot ? `Slot (${bonus})` : `Slot (-)`;
    document.getElementById('math-result').innerHTML = `${txtSlot} + Dado (<span style="color:cyan">${dado}</span>) = <span style="font-size:1.5em; color:lime">${total}</span>`;

    // Retrasar un poquito la verificación para que se vea Chikawa
    setTimeout(() => {
        verificarMovimientos(total, dado);
    }, dado === 6 ? 2000 : 0);
}

// --- FUNCIÓN CHIKAWA ---
function mostrarCelebracion6() {
    const modal = document.getElementById('chikawa-modal');
    modal.style.display = 'flex';
    // Ocultar después de 2 segundos
    setTimeout(() => {
        modal.style.display = 'none';
    }, 2000);
}

// --- LÓGICA DE MOVIMIENTOS ---
function verificarMovimientos(pasos, dado) {
    const jugador = gameState.jugadores[gameState.turnoActual];
    let posibles = 0;

    jugador.fichas.forEach(ficha => {
        const div = document.getElementById(`token-${jugador.id}-${ficha.id}`);
        div.classList.remove('selectable');
        let puede = false;

        if (ficha.posIndex === -1) {
            if (dado === 6) puede = true;
        } else {
            if (ficha.posIndex + pasos < jugador.ruta.length) puede = true;
        }

        if (puede) {
            div.classList.add('selectable');
            posibles++;
        }
    });

    const msg = document.getElementById('game-msg');
    if (posibles > 0) {
        gameState.fase = 'SELECCIONANDO';
        msg.innerText = "👈 ¡Elige ficha!";
    } else {
        msg.innerText = "🚫 No puedes mover.";
        setTimeout(siguienteTurno, 2000);
    }
}

function seleccionarFicha(jugadorId, fichaId) {
    if (gameState.fase !== 'SELECCIONANDO') return;
    if (jugadorId !== gameState.turnoActual) return;
    const div = document.getElementById(`token-${jugadorId}-${fichaId}`);
    if (!div.classList.contains('selectable')) return;
    
    document.querySelectorAll('.token').forEach(t => t.classList.remove('selectable'));
    moverFicha(fichaId);
}

function moverFicha(fichaId) {
    const jugador = gameState.jugadores[gameState.turnoActual];
    const ficha = jugador.fichas[fichaId];
    const div = document.getElementById(`token-${jugador.id}-${ficha.id}`);
    
    let nuevoIndice = 0;
    if (ficha.posIndex === -1) {
        nuevoIndice = 0; // Salir a inicio
    } else {
        nuevoIndice = ficha.posIndex + gameState.pasosPendientes;
    }

    // Actualizar posición lógica
    ficha.posIndex = nuevoIndice;
    const coordDestino = jugador.ruta[nuevoIndice];
    
    // VERIFICAR CAPTURA (COMER)
    verificarCaptura(jugador, ficha, coordDestino);

    // Mover visualmente
    moverFichaCSS(div, coordDestino.c, coordDestino.r);

    if (gameState.ultimoValorDado === 6) {
        setTimeout(prepararExtra, 1000);
    } else {
        setTimeout(siguienteTurno, 1000);
    }
}

// --- LÓGICA DE CAPTURA (MATAR) ---
function verificarCaptura(atacante, fichaAtacante, coordDestino) {
    // 1. ¿Es Zona Segura?
    const esSeguro = ZONAS_SEGURAS.some(z => z.c === coordDestino.c && z.r === coordDestino.r);
    
    if (esSeguro) {
        console.log("Zona segura, no se puede comer.");
        return; 
    }

    // 2. Buscar enemigos en esa casilla
    gameState.jugadores.forEach(enemigo => {
        if (enemigo.id !== atacante.id) { // No te comas a ti mismo
            enemigo.fichas.forEach(fichaEnemiga => {
                if (fichaEnemiga.posIndex !== -1) {
                    const coordEnemigo = enemigo.ruta[fichaEnemiga.posIndex];
                    
                    // Si están en la misma celda
                    if (coordEnemigo.c === coordDestino.c && coordEnemigo.r === coordDestino.r) {
                        // ¡MATAR!
                        console.log(`¡${atacante.nombre} se comió a una ficha de ${enemigo.nombre}!`);
                        document.getElementById('game-msg').innerText = `¡${atacante.nombre} SE COMIÓ AL ${enemigo.nombre}! ☠️`;
                        
                        // Regresar enemigo a base lógica
                        fichaEnemiga.posIndex = -1;
                        
                        // Regresar enemigo a base visual
                        const divEnemigo = document.getElementById(`token-${enemigo.id}-${fichaEnemiga.id}`);
                        moverFichaCSS(divEnemigo, fichaEnemiga.baseCoord.c, fichaEnemiga.baseCoord.r);
                    }
                }
            });
        }
    });
}

function prepararExtra() {
    gameState.fase = 'ESPERANDO';
    gameState.modoTiro = 'EXTRA';
    document.getElementById('btn-text').innerText = "¡DADO EXTRA!";
    document.getElementById('btn-text').style.color = "cyan";
    document.getElementById('game-msg').innerHTML = "¡Sacaste <b>6</b>! Tiras de nuevo.";
}

function siguienteTurno() {
    gameState.turnoActual++;
    if (gameState.turnoActual >= gameState.totalJugadores) gameState.turnoActual = 0;
    gameState.fase = 'ESPERANDO';
    gameState.modoTiro = 'NORMAL';
    gameState.pasosPendientes = 0;
    actualizarUI();
}

function actualizarUI() {
    const jugador = gameState.jugadores[gameState.turnoActual];
    const ind = document.getElementById('turn-indicator');
    ind.innerText = `Turno: ${jugador.nombre}`;
    ind.style.color = getHexColor(jugador.color);
    document.getElementById('btn-text').innerText = "GIRAR SLOT";
    document.getElementById('btn-text').style.color = "gold";
    document.getElementById('game-msg').innerText = "¡Tu turno!";
}

// Utils
function calcularBonus(n1, n2, n3) {
    const arr = [n1, n2, n3];
    const u=arr.filter(x=>x===1).length, d=arr.filter(x=>x===2).length, s=arr.filter(x=>x===7).length;
    if (s===3) return 7; if (d===3) return 4; if (u===3) return 2; if (d===2) return 2; if (u===2) return 1; return 0;
}
function rndArr(a) { return a[Math.floor(Math.random()*a.length)]; }
function moverFichaCSS(e, c, r) { e.style.gridColumnStart = c; e.style.gridRowStart = r; }
function getHexColor(n) { const m={'red':'#e74c3c','green':'#2ecc71','yellow':'#f1c40f','blue':'#3498db'}; return m[n]||'#fff'; }