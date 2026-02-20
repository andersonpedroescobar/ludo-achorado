// --- CONFIGURACIÓN GLOBAL ---
const gameState = {
    jugadores: [],
    turnoActual: 0,
    turnosGlobales: 0,
    fase: 'ESPERANDO',
    modoTiro: 'NORMAL',
    totalJugadores: 0,
    pasosPendientes: 0,
    ultimoValorDado: 1,
    regalos: []
};

let miIdentidad = null; 

const opcionesSlot = [1, 2, 7];
const ZONAS_SEGURAS = [
    {c: 2, r: 7}, {c: 14, r: 2}, {c: 14, r: 9}, {c: 7, r: 14}
];

// --- RUTAS Y MAPA ---
const rutaRoja = [{c: 2, r: 7}, {c: 3, r: 7}, {c: 4, r: 7}, {c: 5, r: 7}, {c: 6, r: 7}, {c: 7, r: 6}, {c: 7, r: 5}, {c: 7, r: 4}, {c: 7, r: 3}, {c: 7, r: 2}, {c: 7, r: 1}, {c: 8, r: 1}, {c: 9, r: 1}, {c: 9, r: 2}, {c: 9, r: 3}, {c: 9, r: 4}, {c: 9, r: 5}, {c: 9, r: 6}, {c: 10, r: 7}, {c: 11, r: 7}, {c: 12, r: 7}, {c: 13, r: 7}, {c: 14, r: 7}, {c: 15, r: 7}, {c: 15, r: 8}, {c: 15, r: 9}, {c: 14, r: 9}, {c: 13, r: 9}, {c: 12, r: 9}, {c: 11, r: 9}, {c: 10, r: 9}, {c: 9, r: 10}, {c: 9, r: 11}, {c: 9, r: 12}, {c: 9, r: 13}, {c: 9, r: 14}, {c: 9, r: 15}, {c: 8, r: 15}, {c: 7, r: 15}, {c: 7, r: 14}, {c: 7, r: 13}, {c: 7, r: 12}, {c: 7, r: 11}, {c: 7, r: 10}, {c: 6, r: 9}, {c: 5, r: 9}, {c: 4, r: 9}, {c: 3, r: 9}, {c: 2, r: 9}, {c: 1, r: 9}, {c: 1, r: 8}, {c: 2, r: 8}, {c: 3, r: 8}, {c: 4, r: 8}, {c: 5, r: 8}, {c: 6, r: 8}, {c: 7, r: 8}];
const MAPA_REGALOS = rutaRoja.slice(0, 51); 

const rutaVerde = [{c: 9, r: 2}, {c: 9, r: 3}, {c: 9, r: 4}, {c: 9, r: 5}, {c: 9, r: 6}, {c: 10, r: 7}, {c: 11, r: 7}, {c: 12, r: 7}, {c: 13, r: 7}, {c: 14, r: 7}, {c: 15, r: 7}, {c: 15, r: 8}, {c: 15, r: 9}, {c: 14, r: 9}, {c: 13, r: 9}, {c: 12, r: 9}, {c: 11, r: 9}, {c: 10, r: 9}, {c: 9, r: 10}, {c: 9, r: 11}, {c: 9, r: 12}, {c: 9, r: 13}, {c: 9, r: 14}, {c: 9, r: 15}, {c: 8, r: 15}, {c: 7, r: 15}, {c: 7, r: 14}, {c: 7, r: 13}, {c: 7, r: 12}, {c: 7, r: 11}, {c: 7, r: 10}, {c: 6, r: 9}, {c: 5, r: 9}, {c: 4, r: 9}, {c: 3, r: 9}, {c: 2, r: 9}, {c: 1, r: 9}, {c: 1, r: 8}, {c: 1, r: 7}, {c: 2, r: 7}, {c: 3, r: 7}, {c: 4, r: 7}, {c: 5, r: 7}, {c: 6, r: 7}, {c: 7, r: 6}, {c: 7, r: 5}, {c: 7, r: 4}, {c: 7, r: 3}, {c: 7, r: 2}, {c: 7, r: 1}, {c: 8, r: 1}, {c: 8, r: 2}, {c: 8, r: 3}, {c: 8, r: 4}, {c: 8, r: 5}, {c: 8, r: 6}, {c: 8, r: 7}];
const rutaAmarilla = [{c: 14, r: 9}, {c: 13, r: 9}, {c: 12, r: 9}, {c: 11, r: 9}, {c: 10, r: 9}, {c: 9, r: 10}, {c: 9, r: 11}, {c: 9, r: 12}, {c: 9, r: 13}, {c: 9, r: 14}, {c: 9, r: 15}, {c: 8, r: 15}, {c: 7, r: 15}, {c: 7, r: 14}, {c: 7, r: 13}, {c: 7, r: 12}, {c: 7, r: 11}, {c: 7, r: 10}, {c: 6, r: 9}, {c: 5, r: 9}, {c: 4, r: 9}, {c: 3, r: 9}, {c: 2, r: 9}, {c: 1, r: 9}, {c: 1, r: 8}, {c: 1, r: 7}, {c: 2, r: 7}, {c: 3, r: 7}, {c: 4, r: 7}, {c: 5, r: 7}, {c: 6, r: 7}, {c: 7, r: 6}, {c: 7, r: 5}, {c: 7, r: 4}, {c: 7, r: 3}, {c: 7, r: 2}, {c: 7, r: 1}, {c: 8, r: 1}, {c: 9, r: 1}, {c: 9, r: 2}, {c: 9, r: 3}, {c: 9, r: 4}, {c: 9, r: 5}, {c: 9, r: 6}, {c: 10, r: 7}, {c: 11, r: 7}, {c: 12, r: 7}, {c: 13, r: 7}, {c: 14, r: 7}, {c: 15, r: 7}, {c: 15, r: 8}, {c: 14, r: 8}, {c: 13, r: 8}, {c: 12, r: 8}, {c: 11, r: 8}, {c: 10, r: 8}, {c: 9, r: 8}];
const rutaAzul = [{c: 7, r: 14}, {c: 7, r: 13}, {c: 7, r: 12}, {c: 7, r: 11}, {c: 7, r: 10}, {c: 6, r: 9}, {c: 5, r: 9}, {c: 4, r: 9}, {c: 3, r: 9}, {c: 2, r: 9}, {c: 1, r: 9}, {c: 1, r: 8}, {c: 1, r: 7}, {c: 2, r: 7}, {c: 3, r: 7}, {c: 4, r: 7}, {c: 5, r: 7}, {c: 6, r: 7}, {c: 7, r: 6}, {c: 7, r: 5}, {c: 7, r: 4}, {c: 7, r: 3}, {c: 7, r: 2}, {c: 7, r: 1}, {c: 8, r: 1}, {c: 9, r: 1}, {c: 9, r: 2}, {c: 9, r: 3}, {c: 9, r: 4}, {c: 9, r: 5}, {c: 9, r: 6}, {c: 10, r: 7}, {c: 11, r: 7}, {c: 12, r: 7}, {c: 13, r: 7}, {c: 14, r: 7}, {c: 15, r: 7}, {c: 15, r: 8}, {c: 15, r: 9}, {c: 14, r: 9}, {c: 13, r: 9}, {c: 12, r: 9}, {c: 11, r: 9}, {c: 10, r: 9}, {c: 9, r: 10}, {c: 9, r: 11}, {c: 9, r: 12}, {c: 9, r: 13}, {c: 9, r: 14}, {c: 9, r: 15}, {c: 8, r: 15}, {c: 8, r: 14}, {c: 8, r: 13}, {c: 8, r: 12}, {c: 8, r: 11}, {c: 8, r: 10}, {c: 8, r: 9}];

const BASES = [
    [{c: 2, r: 2}, {c: 3, r: 2}, {c: 2, r: 3}, {c: 3, r: 3}], 
    [{c: 13, r: 2}, {c: 14, r: 2}, {c: 13, r: 3}, {c: 14, r: 3}], 
    [{c: 13, r: 13}, {c: 14, r: 13}, {c: 13, r: 14}, {c: 14, r: 14}], 
    [{c: 2, r: 13}, {c: 3, r: 13}, {c: 2, r: 14}, {c: 3, r: 14}] 
];

const RUTAS_JUGADORES = [rutaRoja, rutaVerde, rutaAmarilla, rutaAzul];
const NOMBRES = ['Rojo', 'Verde', 'Amarillo', 'Azul'];
const COLORES = ['red', 'green', 'yellow', 'blue'];

// ============================================
// ESCUCHAR A FIREBASE (El Cerebro)
// ============================================

function conectarConFirebase() {
    if (!window.onValue || !window.db) { setTimeout(conectarConFirebase, 100); return; }

    window.onValue(window.ref(window.db, 'partida/'), (snapshot) => {
        const data = snapshot.val();
        if (!data) {
            document.getElementById('start-screen').style.display = 'flex';
            document.getElementById('tokens-container').innerHTML = ''; 
            return;
        }
        document.getElementById('start-screen').style.display = 'none';

        // Sincronizar estado
        gameState.turnoActual = data.turnoActual;
        gameState.fase = data.fase;
        gameState.totalJugadores = data.totalJugadores;
        gameState.pasosPendientes = data.pasosPendientes;
        gameState.ultimoValorDado = data.ultimoValorDado;
        gameState.turnosGlobales = data.turnosGlobales || 0;
        gameState.regalos = data.regalos || [];

        // Inicializar si es necesario
        const container = document.getElementById('tokens-container');
        if (container.children.length === 0) iniciarTableroLocal(data.totalJugadores);

        // Actualizar UI
        actualizarInterfazGlobal();
        dibujarRegalos(); 

        // Sincronizar Fichas
        if (data.jugadores) {
            data.jugadores.forEach((jData, jIdx) => {
                if(!jData.fichas) return;
                const isFrozen = (jData.sanciones > 0);
                jData.fichas.forEach((fData, fIdx) => {
                    const div = document.getElementById(`token-${jIdx}-${fIdx}`);
                    if(div) {
                        const coord = (fData.posIndex === -1) 
                            ? BASES[jIdx][fIdx] 
                            : RUTAS_JUGADORES[jIdx][fData.posIndex];
                        moverFichaCSS(div, coord.c, coord.r);
                        if(isFrozen) div.classList.add('ice-token');
                        else div.classList.remove('ice-token');
                        if(gameState.jugadores[jIdx]) gameState.jugadores[jIdx].fichas[fIdx].posIndex = fData.posIndex;
                    }
                });
            });
        }

        if (gameState.fase === 'SELECCIONANDO') iluminarFichasMovibles();
    });
}

// ============================================
// LÓGICA LOCAL
// ============================================

function iniciarTableroLocal(num) {
    gameState.totalJugadores = num;
    const container = document.getElementById('tokens-container');
    container.innerHTML = ''; 
    gameState.jugadores = []; 

    for (let i = 0; i < num; i++) {
        let fichasLocales = [];
        for (let f = 0; f < 4; f++) {
            const div = document.createElement('div');
            div.id = `token-${i}-${f}`;
            div.className = `token ${COLORES[i]}`;
            div.onclick = () => intentarMoverFicha(i, f);
            container.appendChild(div);
            fichasLocales.push({ id: f, posIndex: -1 });
        }
        gameState.jugadores.push({
            id: i, nombre: NOMBRES[i], color: COLORES[i],
            ruta: RUTAS_JUGADORES[i], fichas: fichasLocales
        });
    }
}

function actualizarInterfazGlobal() {
    const j = gameState.jugadores[gameState.turnoActual];
    if(!j) return;

    const ind = document.getElementById('turn-indicator');
    ind.innerText = `Turno: ${j.nombre}`;
    ind.style.color = getHexColor(j.color);
    document.getElementById('global-turn-count').innerText = gameState.turnosGlobales;
    document.getElementById('dice-img').src = `img/dado${gameState.ultimoValorDado}.jpg`;

    const msg = document.getElementById('game-msg');
    const btnText = document.getElementById('btn-text');

    if (miIdentidad === gameState.turnoActual) {
        if (gameState.fase === 'ESPERANDO') {
            msg.innerText = (gameState.modoTiro === 'NORMAL') ? "¡TU TURNO!" : "¡DADO EXTRA!";
            btnText.innerText = (gameState.modoTiro === 'NORMAL') ? "GIRAR SLOT" : "¡DADO EXTRA!";
            btnText.style.color = (gameState.modoTiro === 'NORMAL') ? "gold" : "cyan";
        } else if (gameState.fase === 'SELECCIONANDO') {
            msg.innerText = "👈 ¡Elige ficha!";
        } else {
            msg.innerText = "🎲 Girando...";
        }
    } else {
        msg.innerText = `Esperando a ${j.nombre}...`;
        btnText.innerText = "ESPERANDO...";
        btnText.style.color = "#777";
    }
}

function dibujarRegalos() {
    const layer = document.getElementById('gifts-container');
    layer.innerHTML = '';
    gameState.regalos.forEach(coord => {
        const gift = document.createElement('div');
        gift.className = 'gift';
        moverFichaCSS(gift, coord.c, coord.r);
        layer.appendChild(gift);
    });
}

function iluminarFichasMovibles() {
    document.querySelectorAll('.token').forEach(t => t.classList.remove('selectable'));
    if (miIdentidad !== gameState.turnoActual) return;

    const jugador = gameState.jugadores[gameState.turnoActual];
    const pasos = gameState.pasosPendientes;
    const dado = gameState.ultimoValorDado;
    let hayMovimientos = false;

    jugador.fichas.forEach((ficha, fIdx) => {
        let puede = false;
        if (ficha.posIndex === -1) {
            if (dado === 6) puede = true;
        } else {
            if (ficha.posIndex + pasos < jugador.ruta.length) puede = true;
        }
        if (puede) {
            const div = document.getElementById(`token-${gameState.turnoActual}-${fIdx}`);
            if(div) div.classList.add('selectable');
            hayMovimientos = true;
        }
    });

    if (!hayMovimientos) {
        document.getElementById('game-msg').innerText = "🚫 Sin movimientos. Pasando turno...";
        // CORRECCIÓN: Llamada robusta a pasar turno
        setTimeout(() => { if (miIdentidad === gameState.turnoActual) pasarTurnoEnNube(); }, 2000);
    }
}

// ============================================
// FUNCIONES CLAVE DE SINCRONIZACIÓN
// ============================================

function pasarTurnoEnNube() {
    const sigTurno = (gameState.turnoActual + 1) % gameState.totalJugadores;
    const nuevosTurnosGlobales = (gameState.turnosGlobales || 0) + 1;
    
    const updates = {};
    updates['partida/turnoActual'] = sigTurno;
    updates['partida/turnosGlobales'] = nuevosTurnosGlobales;
    updates['partida/fase'] = 'ESPERANDO';
    updates['partida/modoTiro'] = 'NORMAL';
    updates['partida/pasosPendientes'] = 0;

    // Regenerar regalos cada 10 turnos
    if (nuevosTurnosGlobales % 10 === 0) {
        updates['partida/regalos'] = generarNuevosRegalos();
    }

    window.update(window.ref(window.db), updates);
}

function decidirSiguienteTurno(updates) {
    if (gameState.ultimoValorDado === 6) {
        updates['partida/fase'] = 'ESPERANDO';
        updates['partida/modoTiro'] = 'EXTRA';
    } else {
        const sigTurno = (gameState.turnoActual + 1) % gameState.totalJugadores;
        const nuevosTurnos = (gameState.turnosGlobales || 0) + 1;
        
        updates['partida/turnosGlobales'] = nuevosTurnos;
        updates['partida/turnoActual'] = sigTurno;
        updates['partida/fase'] = 'ESPERANDO';
        updates['partida/modoTiro'] = 'NORMAL';

        if (nuevosTurnos % 10 === 0) {
            updates['partida/regalos'] = generarNuevosRegalos();
        }
    }
    updates['partida/pasosPendientes'] = 0;
}

// ============================================
// ACCIONES DE JUEGO
// ============================================

window.iniciarJuego = function(num) {
    const jugadoresInit = [];
    for(let i=0; i<num; i++) {
        jugadoresInit.push({
            fichas: [{posIndex: -1}, {posIndex: -1}, {posIndex: -1}, {posIndex: -1}],
            sanciones: 0
        });
    }
    window.set(window.ref(window.db, 'partida/'), {
        totalJugadores: num,
        turnoActual: 0,
        turnosGlobales: 1,
        fase: 'ESPERANDO',
        ultimoValorDado: 1,
        pasosPendientes: 0,
        jugadores: jugadoresInit,
        modoTiro: 'NORMAL',
        regalos: generarNuevosRegalos()
    });
};

window.accionPrincipal = function() {
    if (miIdentidad === null) { alert("⚠️ Elige tu color abajo."); return; }
    if (miIdentidad !== gameState.turnoActual) return;
    if (gameState.fase !== 'ESPERANDO') return;

    gameState.fase = 'GIRANDO'; 
    document.getElementById('dice-img').classList.add('rolling');
    
    let iter = 0;
    const intervalo = setInterval(() => {
        const d = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice-img').src = `img/dado${d}.jpg`;
        document.getElementById('reel1').innerText = rndArr(opcionesSlot);
        document.getElementById('reel2').innerText = rndArr(opcionesSlot);
        document.getElementById('reel3').innerText = rndArr(opcionesSlot);
        iter++;
        if (iter > 12) {
            clearInterval(intervalo);
            finalizarTiro();
        }
    }, 100);
};

function finalizarTiro() {
    document.getElementById('dice-img').classList.remove('rolling');
    let bonus = 0, s1=1, s2=1, s3=1;
    if (gameState.modoTiro === 'NORMAL') {
        s1 = rndArr(opcionesSlot); s2 = rndArr(opcionesSlot); s3 = rndArr(opcionesSlot);
        bonus = calcularBonus(s1, s2, s3);
    }
    const dado = Math.floor(Math.random() * 6) + 1;
    const total = bonus + dado;

    document.getElementById('reel1').innerText = s1;
    document.getElementById('reel2').innerText = s2;
    document.getElementById('reel3').innerText = s3;
    const txtSlot = (gameState.modoTiro === 'NORMAL') ? `Slot (${bonus})` : `Slot (-)`;
    document.getElementById('math-result').innerHTML = `${txtSlot} + Dado (${dado}) = Total (${total})`;

    if (dado === 6) mostrarModal('chikawa-modal');

    window.update(window.ref(window.db, 'partida/'), {
        ultimoValorDado: dado,
        pasosPendientes: total,
        fase: 'SELECCIONANDO'
    });
}

function intentarMoverFicha(jIdx, fIdx) {
    if (miIdentidad !== jIdx || miIdentidad !== gameState.turnoActual || gameState.fase !== 'SELECCIONANDO') return;
    const div = document.getElementById(`token-${jIdx}-${fIdx}`);
    if (!div.classList.contains('selectable')) return;

    const jugador = gameState.jugadores[jIdx];
    const ficha = jugador.fichas[fIdx];
    let nuevoIndex = (ficha.posIndex === -1) ? 0 : ficha.posIndex + gameState.pasosPendientes;

    const updates = {};
    const coordDestino = jugador.ruta[nuevoIndex];
    
    verificarCaptura(jIdx, coordDestino, updates);
    let poder = verificarRegalo(coordDestino);

    updates[`partida/jugadores/${jIdx}/fichas/${fIdx}/posIndex`] = nuevoIndex;

    if (poder) {
        mostrarPoderObtenido(poder);
        ejecutarPoder(poder, updates);
        const nuevosRegalos = gameState.regalos.filter(r => r.c !== coordDestino.c || r.r !== coordDestino.r);
        updates['partida/regalos'] = nuevosRegalos;
    } else {
        decidirSiguienteTurno(updates);
    }

    window.update(window.ref(window.db), updates);
}

// --- PODERES ---
function verificarRegalo(coord) {
    return gameState.regalos.find(r => r.c === coord.c && r.r === coord.r) ? obtenerPoderAleatorio() : null;
}
function obtenerPoderAleatorio() {
    const r = Math.random();
    if (r < 0.33) return 'FUEGO';
    if (r < 0.66) return 'HIELO';
    return 'EXTRA';
}
function ejecutarPoder(tipo, updates) {
    if (tipo === 'EXTRA') {
        updates['partida/fase'] = 'ESPERANDO';
        updates['partida/modoTiro'] = 'NORMAL';
        return;
    }
    if (tipo === 'HIELO') {
        const sig = (gameState.turnoActual + 1) % gameState.totalJugadores;
        updates[`partida/jugadores/${sig}/sanciones`] = 2;
    }
    if (tipo === 'FUEGO') {
        const victimaIdx = (gameState.turnoActual + 1) % gameState.totalJugadores;
        const fichasEnemigas = gameState.jugadores[victimaIdx].fichas.filter(f => f.posIndex > 0);
        if(fichasEnemigas.length > 0) {
            const fM = rndArr(fichasEnemigas);
            updates[`partida/jugadores/${victimaIdx}/fichas/${fM.id}/posIndex`] = -1;
        }
    }
    decidirSiguienteTurno(updates);
}

function generarNuevosRegalos() {
    const nuevos = [];
    while(nuevos.length < 3) {
        const r = rndArr(MAPA_REGALOS); 
        if (!nuevos.find(n => n.c === r.c && n.r === r.r)) nuevos.push(r);
    }
    return nuevos;
}

// --- UTILS ---
function verificarCaptura(miIdx, coordDestino, updatesRef) {
    if (ZONAS_SEGURAS.some(z => z.c === coordDestino.c && z.r === coordDestino.r)) return;
    gameState.jugadores.forEach((enemigo, eIdx) => {
        if (eIdx === miIdx) return;
        enemigo.fichas.forEach((fEnemiga, fIdx) => {
            if (fEnemiga.posIndex !== -1) {
                const cE = enemigo.ruta[fEnemiga.posIndex];
                if (cE.c === coordDestino.c && cE.r === coordDestino.r) {
                    updatesRef[`partida/jugadores/${eIdx}/fichas/${fIdx}/posIndex`] = -1;
                }
            }
        });
    });
}

function mostrarModal(id) {
    const m = document.getElementById(id);
    m.style.display = 'flex';
    setTimeout(() => m.style.display = 'none', 2500);
}
function mostrarPoderObtenido(tipo) {
    document.getElementById('power-title').innerText = tipo;
    document.getElementById('power-desc').innerText = "¡Poder activado!";
    mostrarModal('power-modal');
}

window.elegirIdentidad = (id) => {
    miIdentidad = id;
    document.getElementById('my-identity-display').innerText = `Soy: ${NOMBRES[id]}`;
    document.querySelectorAll('.btn-id').forEach((b, i) => b.classList.toggle('active', i===id));
    actualizarInterfazGlobal();
};
window.reiniciarPartida = () => { if(confirm("¿Reiniciar?")) window.set(window.ref(window.db, 'partida/'), null); location.reload(); };
window.toggleRules = () => { const m=document.getElementById('rules-modal'); m.style.display = (m.style.display==='none')?'block':'none'; };
window.togglePowerRules = () => { const m=document.getElementById('power-rules-modal'); m.style.display = (m.style.display==='none')?'block':'none'; };

function calcularBonus(n1, n2, n3) {
    const arr = [n1, n2, n3];
    const u=arr.filter(x=>x===1).length, d=arr.filter(x=>x===2).length, s=arr.filter(x=>x===7).length;
    if (s===3) return 7; if (d===3) return 4; if (u===3) return 2; if (d===2) return 2; if (u===2) return 1; return 0;
}
function rndArr(a) { return a[Math.floor(Math.random()*a.length)]; }
function moverFichaCSS(el, c, r) { el.style.gridColumnStart = c; el.style.gridRowStart = r; }
function getHexColor(n) { const m={'red':'#e74c3c','green':'#2ecc71','yellow':'#f1c40f','blue':'#3498db'}; return m[n]||'#fff'; }

conectarConFirebase();