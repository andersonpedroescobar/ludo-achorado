// --- CONFIGURACIÓN GLOBAL ---
const gameState = {
    jugadores: [],
    turnoActual: 0,
    fase: 'ESPERANDO',
    modoTiro: 'NORMAL',
    totalJugadores: 0,
    pasosPendientes: 0,
    ultimoValorDado: 1
};

const opcionesSlot = [1, 2, 7];
const ZONAS_SEGURAS = [
    {c: 2, r: 7}, {c: 14, r: 2}, {c: 14, r: 9}, {c: 7, r: 14}
];

// --- RUTAS (Caminos de cada color) ---
const rutaRoja = [{c: 2, r: 7}, {c: 3, r: 7}, {c: 4, r: 7}, {c: 5, r: 7}, {c: 6, r: 7}, {c: 7, r: 6}, {c: 7, r: 5}, {c: 7, r: 4}, {c: 7, r: 3}, {c: 7, r: 2}, {c: 7, r: 1}, {c: 8, r: 1}, {c: 9, r: 1}, {c: 9, r: 2}, {c: 9, r: 3}, {c: 9, r: 4}, {c: 9, r: 5}, {c: 9, r: 6}, {c: 10, r: 7}, {c: 11, r: 7}, {c: 12, r: 7}, {c: 13, r: 7}, {c: 14, r: 7}, {c: 15, r: 7}, {c: 15, r: 8}, {c: 15, r: 9}, {c: 14, r: 9}, {c: 13, r: 9}, {c: 12, r: 9}, {c: 11, r: 9}, {c: 10, r: 9}, {c: 9, r: 10}, {c: 9, r: 11}, {c: 9, r: 12}, {c: 9, r: 13}, {c: 9, r: 14}, {c: 9, r: 15}, {c: 8, r: 15}, {c: 7, r: 15}, {c: 7, r: 14}, {c: 7, r: 13}, {c: 7, r: 12}, {c: 7, r: 11}, {c: 7, r: 10}, {c: 6, r: 9}, {c: 5, r: 9}, {c: 4, r: 9}, {c: 3, r: 9}, {c: 2, r: 9}, {c: 1, r: 9}, {c: 1, r: 8}, {c: 2, r: 8}, {c: 3, r: 8}, {c: 4, r: 8}, {c: 5, r: 8}, {c: 6, r: 8}, {c: 7, r: 8}];
const rutaVerde = [{c: 9, r: 2}, {c: 9, r: 3}, {c: 9, r: 4}, {c: 9, r: 5}, {c: 9, r: 6}, {c: 10, r: 7}, {c: 11, r: 7}, {c: 12, r: 7}, {c: 13, r: 7}, {c: 14, r: 7}, {c: 15, r: 7}, {c: 15, r: 8}, {c: 15, r: 9}, {c: 14, r: 9}, {c: 13, r: 9}, {c: 12, r: 9}, {c: 11, r: 9}, {c: 10, r: 9}, {c: 9, r: 10}, {c: 9, r: 11}, {c: 9, r: 12}, {c: 9, r: 13}, {c: 9, r: 14}, {c: 9, r: 15}, {c: 8, r: 15}, {c: 7, r: 15}, {c: 7, r: 14}, {c: 7, r: 13}, {c: 7, r: 12}, {c: 7, r: 11}, {c: 7, r: 10}, {c: 6, r: 9}, {c: 5, r: 9}, {c: 4, r: 9}, {c: 3, r: 9}, {c: 2, r: 9}, {c: 1, r: 9}, {c: 1, r: 8}, {c: 1, r: 7}, {c: 2, r: 7}, {c: 3, r: 7}, {c: 4, r: 7}, {c: 5, r: 7}, {c: 6, r: 7}, {c: 7, r: 6}, {c: 7, r: 5}, {c: 7, r: 4}, {c: 7, r: 3}, {c: 7, r: 2}, {c: 7, r: 1}, {c: 8, r: 1}, {c: 8, r: 2}, {c: 8, r: 3}, {c: 8, r: 4}, {c: 8, r: 5}, {c: 8, r: 6}, {c: 8, r: 7}];
const rutaAmarilla = [{c: 14, r: 9}, {c: 13, r: 9}, {c: 12, r: 9}, {c: 11, r: 9}, {c: 10, r: 9}, {c: 9, r: 10}, {c: 9, r: 11}, {c: 9, r: 12}, {c: 9, r: 13}, {c: 9, r: 14}, {c: 9, r: 15}, {c: 8, r: 15}, {c: 7, r: 15}, {c: 7, r: 14}, {c: 7, r: 13}, {c: 7, r: 12}, {c: 7, r: 11}, {c: 7, r: 10}, {c: 6, r: 9}, {c: 5, r: 9}, {c: 4, r: 9}, {c: 3, r: 9}, {c: 2, r: 9}, {c: 1, r: 9}, {c: 1, r: 8}, {c: 1, r: 7}, {c: 2, r: 7}, {c: 3, r: 7}, {c: 4, r: 7}, {c: 5, r: 7}, {c: 6, r: 7}, {c: 7, r: 6}, {c: 7, r: 5}, {c: 7, r: 4}, {c: 7, r: 3}, {c: 7, r: 2}, {c: 7, r: 1}, {c: 8, r: 1}, {c: 9, r: 1}, {c: 9, r: 2}, {c: 9, r: 3}, {c: 9, r: 4}, {c: 9, r: 5}, {c: 9, r: 6}, {c: 10, r: 7}, {c: 11, r: 7}, {c: 12, r: 7}, {c: 13, r: 7}, {c: 14, r: 7}, {c: 15, r: 7}, {c: 15, r: 8}, {c: 14, r: 8}, {c: 13, r: 8}, {c: 12, r: 8}, {c: 11, r: 8}, {c: 10, r: 8}, {c: 9, r: 8}];
const rutaAzul = [{c: 7, r: 14}, {c: 7, r: 13}, {c: 7, r: 12}, {c: 7, r: 11}, {c: 7, r: 10}, {c: 6, r: 9}, {c: 5, r: 9}, {c: 4, r: 9}, {c: 3, r: 9}, {c: 2, r: 9}, {c: 1, r: 9}, {c: 1, r: 8}, {c: 1, r: 7}, {c: 2, r: 7}, {c: 3, r: 7}, {c: 4, r: 7}, {c: 5, r: 7}, {c: 6, r: 7}, {c: 7, r: 6}, {c: 7, r: 5}, {c: 7, r: 4}, {c: 7, r: 3}, {c: 7, r: 2}, {c: 7, r: 1}, {c: 8, r: 1}, {c: 9, r: 1}, {c: 9, r: 2}, {c: 9, r: 3}, {c: 9, r: 4}, {c: 9, r: 5}, {c: 9, r: 6}, {c: 10, r: 7}, {c: 11, r: 7}, {c: 12, r: 7}, {c: 13, r: 7}, {c: 14, r: 7}, {c: 15, r: 7}, {c: 15, r: 8}, {c: 15, r: 9}, {c: 14, r: 9}, {c: 13, r: 9}, {c: 12, r: 9}, {c: 11, r: 9}, {c: 10, r: 9}, {c: 9, r: 10}, {c: 9, r: 11}, {c: 9, r: 12}, {c: 9, r: 13}, {c: 9, r: 14}, {c: 9, r: 15}, {c: 8, r: 15}, {c: 8, r: 14}, {c: 8, r: 13}, {c: 8, r: 12}, {c: 8, r: 11}, {c: 8, r: 10}, {c: 8, r: 9}];

// Coordenadas bases (4 esquinas)
const BASES = [
    [{c: 2, r: 2}, {c: 3, r: 2}, {c: 2, r: 3}, {c: 3, r: 3}], // Rojo
    [{c: 13, r: 2}, {c: 14, r: 2}, {c: 13, r: 3}, {c: 14, r: 3}], // Verde
    [{c: 13, r: 13}, {c: 14, r: 13}, {c: 13, r: 14}, {c: 14, r: 14}], // Amarillo
    [{c: 2, r: 13}, {c: 3, r: 13}, {c: 2, r: 14}, {c: 3, r: 14}] // Azul
];

const RUTAS_JUGADORES = [rutaRoja, rutaVerde, rutaAmarilla, rutaAzul];
const NOMBRES = ['Rojo', 'Verde', 'Amarillo', 'Azul'];
const COLORES = ['red', 'green', 'yellow', 'blue'];

// ============================================
// ESCUCHAR A FIREBASE (El Cerebro)
// ============================================

// Creamos una función que insiste hasta conectarse
function conectarConFirebase() {
    // 1. Preguntamos: ¿Firebase ya cargó?
    if (!window.onValue || !window.db) {
        // Si NO ha cargado, esperamos 100ms y volvemos a intentar
        console.log("Esperando a Firebase...");
        setTimeout(conectarConFirebase, 100);
        return;
    }

    // 2. Si YA cargó, activamos la escucha (Sin el if de antes)
    console.log("¡Conectado exitosamente!");
    
    window.onValue(window.ref(window.db, 'partida/'), (snapshot) => {
        const data = snapshot.val();

        // 1. Si no hay datos, mostrar menú inicio
        if (!data) {
            document.getElementById('start-screen').style.display = 'flex';
            document.getElementById('tokens-container').innerHTML = ''; 
            return;
        }

        // 2. Si hay datos, ocultar menú
        document.getElementById('start-screen').style.display = 'none';

        // 3. Sincronizar Variables
        gameState.turnoActual = data.turnoActual;
        gameState.fase = data.fase;
        gameState.totalJugadores = data.totalJugadores;
        gameState.pasosPendientes = data.pasosPendientes;
        gameState.ultimoValorDado = data.ultimoValorDado;

        // 4. GENERAR FICHAS SI NO EXISTEN
        const container = document.getElementById('tokens-container');
        if (container.children.length === 0) {
            iniciarTableroLocal(data.totalJugadores);
        }

        // 5. Mover fichas visualmente
        if (data.jugadores) {
            data.jugadores.forEach((jData, jIdx) => {
                // Validación extra por si acaso
                if (!jData.fichas) return;

                jData.fichas.forEach((fData, fIdx) => {
                    const div = document.getElementById(`token-${jIdx}-${fIdx}`);
                    if(div) {
                        const coord = (fData.posIndex === -1) 
                            ? BASES[jIdx][fIdx] 
                            : RUTAS_JUGADORES[jIdx][fData.posIndex];
                        moverFichaCSS(div, coord.c, coord.r);
                        
                        // Sincronizar memoria local
                        if(gameState.jugadores[jIdx] && gameState.jugadores[jIdx].fichas[fIdx]) {
                            gameState.jugadores[jIdx].fichas[fIdx].posIndex = fData.posIndex;
                        }
                    }
                });
            });
        }

        // 6. Actualizar UI
        actualizarInterfazGlobal();

        // 7. Iluminar si toca seleccionar
        if (gameState.fase === 'SELECCIONANDO') {
            iluminarFichasMovibles();
        }
    });
}

// Iniciamos el proceso de conexión
conectarConFirebase();


// ============================================
// LÓGICA LOCAL
// ============================================

// ESTA FUNCIÓN ES LA QUE CREA LOS DIVS DE COLORES
function iniciarTableroLocal(numJugadores) {
    gameState.totalJugadores = numJugadores;
    const container = document.getElementById('tokens-container');
    container.innerHTML = ''; 

    gameState.jugadores = []; // Reiniciar memoria local

    for (let i = 0; i < numJugadores; i++) {
        let fichasLocales = [];
        
        for (let f = 0; f < 4; f++) {
            // Crear DIV
            const div = document.createElement('div');
            div.id = `token-${i}-${f}`;
            div.className = `token ${COLORES[i]}`;
            div.onclick = () => intentarMoverFicha(i, f);
            
            container.appendChild(div);
            
            // Guardar en memoria
            fichasLocales.push({ id: f, posIndex: -1 });
        }

        gameState.jugadores.push({
            id: i,
            nombre: NOMBRES[i],
            color: COLORES[i],
            ruta: RUTAS_JUGADORES[i],
            fichas: fichasLocales
        });
    }
}

function actualizarInterfazGlobal() {
    const j = gameState.jugadores[gameState.turnoActual];
    if(!j) return;

    const ind = document.getElementById('turn-indicator');
    ind.innerText = `Turno: ${j.nombre}`;
    ind.style.color = getHexColor(j.color);

    document.getElementById('dice-img').src = `img/dado${gameState.ultimoValorDado}.jpg`;

    const msg = document.getElementById('game-msg');
    const btnText = document.getElementById('btn-text');

    if (gameState.fase === 'ESPERANDO') {
        msg.innerText = "¡Espera tu turno o Gira!";
        btnText.innerText = (gameState.modoTiro === 'NORMAL') ? "GIRAR SLOT" : "¡DADO EXTRA!";
        btnText.style.color = (gameState.modoTiro === 'NORMAL') ? "gold" : "cyan";
    } else if (gameState.fase === 'SELECCIONANDO') {
        msg.innerText = "👈 ¡Elige una ficha iluminada!";
    }
}

function iluminarFichasMovibles() {
    document.querySelectorAll('.token').forEach(t => t.classList.remove('selectable'));

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
        // Solo quien tenga el turno ejecuta el pase (para evitar duplicados)
        // En local todos son "dueños", así que usamos un timeout simple
        setTimeout(() => {
            // Verificamos si seguimos en la misma fase para no enviar doble
            if (gameState.fase === 'SELECCIONANDO') pasarTurnoEnNube();
        }, 2000);
    }
}

// ============================================
// ACCIONES (ENVÍAN A FIREBASE)
// ============================================

window.iniciarJuego = function(num) {
    const jugadoresInit = [];
    for(let i=0; i<num; i++) {
        jugadoresInit.push({
            fichas: [{posIndex: -1}, {posIndex: -1}, {posIndex: -1}, {posIndex: -1}]
        });
    }

    window.set(window.ref(window.db, 'partida/'), {
        totalJugadores: num,
        turnoActual: 0,
        fase: 'ESPERANDO',
        ultimoValorDado: 1,
        pasosPendientes: 0,
        jugadores: jugadoresInit,
        modoTiro: 'NORMAL'
    });
};

window.accionPrincipal = function() {
    if (gameState.fase !== 'ESPERANDO') return;
    
    // Animación local
    gameState.fase = 'GIRANDO'; // Bloqueo temporal local
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
    
    let bonus = 0;
    let s1=1, s2=1, s3=1;

    if (gameState.modoTiro === 'NORMAL') {
        s1 = rndArr(opcionesSlot); s2 = rndArr(opcionesSlot); s3 = rndArr(opcionesSlot);
        bonus = calcularBonus(s1, s2, s3);
    }

    const dado = Math.floor(Math.random() * 6) + 1;
    const total = bonus + dado;

    if (dado === 6) mostrarCelebracion6();

    // Actualizar Firebase
    window.update(window.ref(window.db, 'partida/'), {
        ultimoValorDado: dado,
        pasosPendientes: total,
        fase: 'SELECCIONANDO'
    });
}

function intentarMoverFicha(jIdx, fIdx) {
    if (gameState.fase !== 'SELECCIONANDO') return;
    if (jIdx !== gameState.turnoActual) return;

    const div = document.getElementById(`token-${jIdx}-${fIdx}`);
    if (!div.classList.contains('selectable')) return;

    const jugador = gameState.jugadores[jIdx];
    const ficha = jugador.fichas[fIdx];
    let nuevoIndex = (ficha.posIndex === -1) ? 0 : ficha.posIndex + gameState.pasosPendientes;

    const updates = {};
    const coordDestino = jugador.ruta[nuevoIndex];
    verificarCaptura(jIdx, coordDestino, updates);

    updates[`partida/jugadores/${jIdx}/fichas/${fIdx}/posIndex`] = nuevoIndex;

    if (gameState.ultimoValorDado === 6) {
        updates['partida/fase'] = 'ESPERANDO';
        updates['partida/modoTiro'] = 'EXTRA';
    } else {
        updates['partida/fase'] = 'ESPERANDO';
        updates['partida/modoTiro'] = 'NORMAL';
        updates['partida/turnoActual'] = (gameState.turnoActual + 1) % gameState.totalJugadores;
    }

    window.update(window.ref(window.db), updates);
}

// ============================================
// UTILIDADES
// ============================================

function pasarTurnoEnNube() {
    window.update(window.ref(window.db, 'partida/'), {
        turnoActual: (gameState.turnoActual + 1) % gameState.totalJugadores,
        fase: 'ESPERANDO',
        modoTiro: 'NORMAL'
    });
}

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

function mostrarCelebracion6() {
    const m = document.getElementById('chikawa-modal');
    if(m) { m.style.display = 'flex'; setTimeout(() => m.style.display = 'none', 1500); }
}

function toggleRules() {
    const m = document.getElementById('rules-modal');
    m.style.display = (m.style.display === 'none') ? 'block' : 'none';
}

function calcularBonus(n1, n2, n3) {
    const arr = [n1, n2, n3];
    const u=arr.filter(x=>x===1).length, d=arr.filter(x=>x===2).length, s=arr.filter(x=>x===7).length;
    if (s===3) return 7; if (d===3) return 4; if (u===3) return 2; if (d===2) return 2; if (u===2) return 1; return 0;
}
function rndArr(a) { return a[Math.floor(Math.random()*a.length)]; }
function moverFichaCSS(el, c, r) { el.style.gridColumnStart = c; el.style.gridRowStart = r; }
function getHexColor(n) { const m={'red':'#e74c3c','green':'#2ecc71','yellow':'#f1c40f','blue':'#3498db'}; return m[n]||'#fff'; }
function amITheCurrentPlayer() { return true; } // Por ahora todos pueden mover

// Exponer globales
window.toggleRules = toggleRules;
window.accionPrincipal = accionPrincipal;