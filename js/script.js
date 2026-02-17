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

// --- INICIALIZACIÓN ---
function iniciarJuego(numJugadores) {
    gameState.totalJugadores = numJugadores;
    gameState.jugadores = [];
    
    const colores = ['red', 'green', 'yellow', 'blue'];
    const nombres = ['Rojo', 'Verde', 'Amarillo', 'Azul'];
    const rutas = [rutaRoja, rutaVerde, rutaAmarilla, rutaAzul];
    
    // Coordenadas bases (4 esquinas)
    const bases = [
        [{c: 2, r: 2}, {c: 3, r: 2}, {c: 2, r: 3}, {c: 3, r: 3}],
        [{c: 13, r: 2}, {c: 14, r: 2}, {c: 13, r: 3}, {c: 14, r: 3}],
        [{c: 13, r: 13}, {c: 14, r: 13}, {c: 13, r: 14}, {c: 14, r: 14}],
        [{c: 2, r: 13}, {c: 3, r: 13}, {c: 2, r: 14}, {c: 3, r: 14}]
    ];

    const container = document.getElementById('tokens-container');
    container.innerHTML = '';

    for (let i = 0; i < numJugadores; i++) {
        let fichasJugador = [];
        for (let f = 0; f < 4; f++) {
            const div = document.createElement('div');
            div.id = `token-${i}-${f}`;
            div.className = `token ${colores[i]}`;
            div.onclick = () => seleccionarFicha(i, f);
            container.appendChild(div);
            moverFichaCSS(div, bases[i][f].c, bases[i][f].r);

            fichasJugador.push({ id: f, posIndex: -1, baseCoord: bases[i][f] });
        }
        gameState.jugadores.push({
            id: i, nombre: nombres[i], color: colores[i],
            fichas: fichasJugador, ruta: rutas[i]
        });
    }

    document.getElementById('start-screen').style.display = 'none';
    actualizarUI();




    // --- 1. ESCUCHA CONSTANTE (Debe ir afuera de cualquier función) ---
if (window.onValue) {
    window.onValue(window.ref(window.db, 'partida/'), (snapshot) => {
        const data = snapshot.val();
        if (!data) return;

        // 🔥 NUEVO: Si alguien tiró el dado, actualizar la imagen del dado para todos
    if (data.ultimoValorDado) {
        document.getElementById('dice-img').src = `img/dado${data.ultimoValorDado}.jpg`;
        document.getElementById('game-msg').innerText = "Salió un: " + data.ultimoValorDado;
    }

        // A. Si el juego no ha arrancado en mi pantalla pero ya hay datos en la nube
        if (gameState.jugadores.length === 0 && data.totalJugadores) {
            console.log("🔥 Detectada partida en curso. Iniciando tablero...");
            iniciarTableroLocal(data.totalJugadores);
        }

        // B. Sincronizar datos básicos
        gameState.turnoActual = data.turnoActual;
        gameState.fase = data.fase;
        gameState.pasosPendientes = data.pasosPendientes || 0;

        // C. Sincronizar fichas (Solo si el tablero ya existe)
        if (gameState.jugadores.length > 0) {
            data.jugadores.forEach((jData, jIdx) => {
                jData.fichas.forEach((fData, fIdx) => {
                    const fichaLocal = gameState.jugadores[jIdx].fichas[fIdx];
                    
                    // Solo movemos si la posición en Firebase es distinta a la nuestra
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
            actualizarUI();
        }
    });
}

// --- 2. FUNCIÓN PARA CREAR EL TABLERO (Solo visual) ---
function iniciarTableroLocal(numJugadores) {
    gameState.totalJugadores = numJugadores;
    gameState.jugadores = [];
    
    const colores = ['red', 'green', 'yellow', 'blue'];
    const nombres = ['Rojo', 'Verde', 'Amarillo', 'Azul'];
    const rutas = [rutaRoja, rutaVerde, rutaAmarilla, rutaAzul];
    const bases = [
        [{c: 2, r: 2}, {c: 3, r: 2}, {c: 2, r: 3}, {c: 3, r: 3}],
        [{c: 13, r: 2}, {c: 14, r: 2}, {c: 13, r: 3}, {c: 14, r: 3}],
        [{c: 13, r: 13}, {c: 14, r: 13}, {c: 13, r: 14}, {c: 14, r: 14}],
        [{c: 2, r: 13}, {c: 3, r: 13}, {c: 2, r: 14}, {c: 3, r: 14}]
    ];

    const container = document.getElementById('tokens-container');
    container.innerHTML = '';

    for (let i = 0; i < numJugadores; i++) {
        let fichasJugador = [];
        for (let f = 0; f < 4; f++) {
            const div = document.createElement('div');
            div.id = `token-${i}-${f}`;
            div.className = `token ${colores[i]}`;
            div.onclick = () => seleccionarFicha(i, f);
            container.appendChild(div);
            moverFichaCSS(div, bases[i][f].c, bases[i][f].r);

            fichasJugador.push({ id: f, posIndex: -1, baseCoord: bases[i][f] });
        }
        gameState.jugadores.push({
            id: i, nombre: nombres[i], color: colores[i],
            fichas: fichasJugador, ruta: rutas[i]
        });
    }
    document.getElementById('start-screen').style.display = 'none';
}

// --- 3. BOTÓN DE INICIO (El que presiona el primer jugador) ---
function iniciarJuego(numJugadores) {
    // Creamos el tablero localmente primero
    iniciarTableroLocal(numJugadores);

    // SUBIMOS el estado inicial a Firebase para que los demás lo vean
    if (window.set) {
        window.set(window.ref(window.db, 'partida/'), {
            totalJugadores: numJugadores,
            turnoActual: 0,
            fase: 'ESPERANDO',
            jugadores: gameState.jugadores.map(j => ({
                id: j.id,
                fichas: j.fichas.map(f => ({ id: f.id, posIndex: f.posIndex }))
            }))
        });
    }
}
    

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