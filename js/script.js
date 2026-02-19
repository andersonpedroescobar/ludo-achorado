// --- CONFIGURACIÓN GLOBAL ---
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
const ZONAS_SEGURAS = [
    {c: 2, r: 7}, {c: 14, r: 2}, {c: 14, r: 9}, {c: 7, r: 14}
];

// --- RUTAS (Copiadas de tu lógica original) ---
const rutaRoja = [{c: 2, r: 7}, {c: 3, r: 7}, {c: 4, r: 7}, {c: 5, r: 7}, {c: 6, r: 7}, {c: 7, r: 6}, {c: 7, r: 5}, {c: 7, r: 4}, {c: 7, r: 3}, {c: 7, r: 2}, {c: 7, r: 1}, {c: 8, r: 1}, {c: 9, r: 1}, {c: 9, r: 2}, {c: 9, r: 3}, {c: 9, r: 4}, {c: 9, r: 5}, {c: 9, r: 6}, {c: 10, r: 7}, {c: 11, r: 7}, {c: 12, r: 7}, {c: 13, r: 7}, {c: 14, r: 7}, {c: 15, r: 7}, {c: 15, r: 8}, {c: 15, r: 9}, {c: 14, r: 9}, {c: 13, r: 9}, {c: 12, r: 9}, {c: 11, r: 9}, {c: 10, r: 9}, {c: 9, r: 10}, {c: 9, r: 11}, {c: 9, r: 12}, {c: 9, r: 13}, {c: 9, r: 14}, {c: 9, r: 15}, {c: 8, r: 15}, {c: 7, r: 15}, {c: 7, r: 14}, {c: 7, r: 13}, {c: 7, r: 12}, {c: 7, r: 11}, {c: 7, r: 10}, {c: 6, r: 9}, {c: 5, r: 9}, {c: 4, r: 9}, {c: 3, r: 9}, {c: 2, r: 9}, {c: 1, r: 9}, {c: 1, r: 8}, {c: 2, r: 8}, {c: 3, r: 8}, {c: 4, r: 8}, {c: 5, r: 8}, {c: 6, r: 8}, {c: 7, r: 8}];
const rutaVerde = [{c: 9, r: 2}, {c: 9, r: 3}, {c: 9, r: 4}, {c: 9, r: 5}, {c: 9, r: 6}, {c: 10, r: 7}, {c: 11, r: 7}, {c: 12, r: 7}, {c: 13, r: 7}, {c: 14, r: 7}, {c: 15, r: 7}, {c: 15, r: 8}, {c: 15, r: 9}, {c: 14, r: 9}, {c: 13, r: 9}, {c: 12, r: 9}, {c: 11, r: 9}, {c: 10, r: 9}, {c: 9, r: 10}, {c: 9, r: 11}, {c: 9, r: 12}, {c: 9, r: 13}, {c: 9, r: 14}, {c: 9, r: 15}, {c: 8, r: 15}, {c: 7, r: 15}, {c: 7, r: 14}, {c: 7, r: 13}, {c: 7, r: 12}, {c: 7, r: 11}, {c: 7, r: 10}, {c: 6, r: 9}, {c: 5, r: 9}, {c: 4, r: 9}, {c: 3, r: 9}, {c: 2, r: 9}, {c: 1, r: 9}, {c: 1, r: 8}, {c: 1, r: 7}, {c: 2, r: 7}, {c: 3, r: 7}, {c: 4, r: 7}, {c: 5, r: 7}, {c: 6, r: 7}, {c: 7, r: 6}, {c: 7, r: 5}, {c: 7, r: 4}, {c: 7, r: 3}, {c: 7, r: 2}, {c: 7, r: 1}, {c: 8, r: 1}, {c: 8, r: 2}, {c: 8, r: 3}, {c: 8, r: 4}, {c: 8, r: 5}, {c: 8, r: 6}, {c: 8, r: 7}];
const rutaAmarilla = [{c: 14, r: 9}, {c: 13, r: 9}, {c: 12, r: 9}, {c: 11, r: 9}, {c: 10, r: 9}, {c: 9, r: 10}, {c: 9, r: 11}, {c: 9, r: 12}, {c: 9, r: 13}, {c: 9, r: 14}, {c: 9, r: 15}, {c: 8, r: 15}, {c: 7, r: 15}, {c: 7, r: 14}, {c: 7, r: 13}, {c: 7, r: 12}, {c: 7, r: 11}, {c: 7, r: 10}, {c: 6, r: 9}, {c: 5, r: 9}, {c: 4, r: 9}, {c: 3, r: 9}, {c: 2, r: 9}, {c: 1, r: 9}, {c: 1, r: 8}, {c: 1, r: 7}, {c: 2, r: 7}, {c: 3, r: 7}, {c: 4, r: 7}, {c: 5, r: 7}, {c: 6, r: 7}, {c: 7, r: 6}, {c: 7, r: 5}, {c: 7, r: 4}, {c: 7, r: 3}, {c: 7, r: 2}, {c: 7, r: 1}, {c: 8, r: 1}, {c: 9, r: 1}, {c: 9, r: 2}, {c: 9, r: 3}, {c: 9, r: 4}, {c: 9, r: 5}, {c: 9, r: 6}, {c: 10, r: 7}, {c: 11, r: 7}, {c: 12, r: 7}, {c: 13, r: 7}, {c: 14, r: 7}, {c: 15, r: 7}, {c: 15, r: 8}, {c: 14, r: 8}, {c: 13, r: 8}, {c: 12, r: 8}, {c: 11, r: 8}, {c: 10, r: 8}, {c: 9, r: 8}];
const rutaAzul = [{c: 7, r: 14}, {c: 7, r: 13}, {c: 7, r: 12}, {c: 7, r: 11}, {c: 7, r: 10}, {c: 6, r: 9}, {c: 5, r: 9}, {c: 4, r: 9}, {c: 3, r: 9}, {c: 2, r: 9}, {c: 1, r: 9}, {c: 1, r: 8}, {c: 1, r: 7}, {c: 2, r: 7}, {c: 3, r: 7}, {c: 4, r: 7}, {c: 5, r: 7}, {c: 6, r: 7}, {c: 7, r: 6}, {c: 7, r: 5}, {c: 7, r: 4}, {c: 7, r: 3}, {c: 7, r: 2}, {c: 7, r: 1}, {c: 8, r: 1}, {c: 9, r: 1}, {c: 9, r: 2}, {c: 9, r: 3}, {c: 9, r: 4}, {c: 9, r: 5}, {c: 9, r: 6}, {c: 10, r: 7}, {c: 11, r: 7}, {c: 12, r: 7}, {c: 13, r: 7}, {c: 14, r: 7}, {c: 15, r: 7}, {c: 15, r: 8}, {c: 15, r: 9}, {c: 14, r: 9}, {c: 13, r: 9}, {c: 12, r: 9}, {c: 11, r: 9}, {c: 10, r: 9}, {c: 9, r: 10}, {c: 9, r: 11}, {c: 9, r: 12}, {c: 9, r: 13}, {c: 9, r: 14}, {c: 9, r: 15}, {c: 8, r: 15}, {c: 8, r: 14}, {c: 8, r: 13}, {c: 8, r: 12}, {c: 8, r: 11}, {c: 8, r: 10}, {c: 8, r: 9}];

// --- ESCUCHA DE FIREBASE (EL CEREBRO) ---
if (window.onValue) {
    window.onValue(window.ref(window.db, 'partida/'), (snapshot) => {
        const data = snapshot.val();
        if (!data) return;

        // 1. Sincronizar tablero inicial si no existe
        if (gameState.jugadores.length === 0 && data.totalJugadores) {
            iniciarTableroLocal(data.totalJugadores);
        }

        // 2. Actualizar estado global desde la nube
        gameState.turnoActual = data.turnoActual;
        gameState.fase = data.fase;
        gameState.pasosPendientes = data.pasosPendientes || 0;
        gameState.ultimoValorDado = data.ultimoValorDado || 1;

        // 3. Actualizar UI y Dado para todos
        document.getElementById('dice-img').src = `img/dado${gameState.ultimoValorDado}.jpg`;
        actualizarUI();

        // 4. Mover fichas de otros jugadores
        if (gameState.jugadores.length > 0 && data.jugadores) {
            data.jugadores.forEach((jData, jIdx) => {
                jData.fichas.forEach((fData, fIdx) => {
                    const fichaLocal = gameState.jugadores[jIdx].fichas[fIdx];
                    if (fichaLocal.posIndex !== fData.posIndex) {
                        fichaLocal.posIndex = fData.posIndex;
                        const div = document.getElementById(`token-${jIdx}-${fIdx}`);
                        const coord = (fData.posIndex === -1) 
                            ? fichaLocal.baseCoord 
                            : gameState.jugadores[jIdx].ruta[fData.posIndex];
                        moverFichaCSS(div, coord.c, coord.r);
                    }
                });
            });
        }

        // 5. Si es fase de selección, iluminar fichas
        if (gameState.fase === 'SELECCIONANDO') {
            verificarMovimientos(gameState.pasosPendientes, gameState.ultimoValorDado);
        }
    });
}

// --- ACCIÓN DE GIRAR (SINCRONIZADA) ---
function accionPrincipal() {
    if (gameState.fase !== 'ESPERANDO') return;
    
    // Bloqueo de seguridad: solo el jugador de turno puede tirar
    // if (miColorAsignado !== gameState.jugadores[gameState.turnoActual].color) return;

    gameState.fase = 'GIRANDO'; // Estado local temporal
    document.getElementById('dice-img').classList.add('rolling');

    let iter = 0;
    const intervalo = setInterval(() => {
        // Animación visual de slots y dado
        document.getElementById('reel1').innerText = rndArr(opcionesSlot);
        document.getElementById('reel2').innerText = rndArr(opcionesSlot);
        document.getElementById('reel3').innerText = rndArr(opcionesSlot);
        const dTmp = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice-img').src = `img/dado${dTmp}.jpg`;
        
        iter++;
        if (iter > 12) {
            clearInterval(intervalo);
            finalizarTiro();
        }
    }, 100);
}

function finalizarTiro() {
    document.getElementById('dice-img').classList.remove('rolling');
    
    // 1. Calcular resultados finales
    const s1 = rndArr(opcionesSlot);
    const s2 = rndArr(opcionesSlot);
    const s3 = rndArr(opcionesSlot);
    const bonus = calcularBonus(s1, s2, s3);
    const dado = Math.floor(Math.random() * 6) + 1;
    const total = dado + bonus;

    // Mostrar en UI
    document.getElementById('reel1').innerText = s1;
    document.getElementById('reel2').innerText = s2;
    document.getElementById('reel3').innerText = s3;
    document.getElementById('math-result').innerHTML = `Slot (${bonus}) + Dado (${dado}) = <b>${total}</b>`;

    if (dado === 6) mostrarCelebracion6();

    // 2. Subir a Firebase para que todos vean lo mismo
    window.update(window.ref(window.db, 'partida/'), {
        ultimoValorDado: dado,
        pasosPendientes: total,
        fase: 'SELECCIONANDO'
    });
}

// --- SELECCIÓN Y MOVIMIENTO ---
function seleccionarFicha(jugadorId, fichaId) {
    if (gameState.fase !== 'SELECCIONANDO') return;
    if (jugadorId !== gameState.turnoActual) return;
    
    const jugador = gameState.jugadores[jugadorId];
    const ficha = jugador.fichas[fichaId];
    
    // Calcular nueva posición
    let nuevoIndex = (ficha.posIndex === -1) ? 0 : ficha.posIndex + gameState.pasosPendientes;
    const coordDestino = jugador.ruta[nuevoIndex];

    // Lógica de Captura (Matar)
    verificarCaptura(jugador, coordDestino);

    // Preparar actualización para Firebase
    const updates = {};
    const pathBase = `partida/jugadores/${jugadorId}/fichas/${fichaId}`;
    updates[pathBase + '/posIndex'] = nuevoIndex;

    // Determinar siguiente turno
    if (gameState.ultimoValorDado !== 6) {
        updates['partida/turnoActual'] = (gameState.turnoActual + 1) % gameState.totalJugadores;
    }

    updates['partida/fase'] = 'ESPERANDO';
    updates['partida/pasosPendientes'] = 0;

    window.update(window.ref(window.db), updates);
}

function verificarCaptura(atacante, coordDestino) {
    // Si es zona segura, nadie muere
    const esSeguro = ZONAS_SEGURAS.some(z => z.c === coordDestino.c && z.r === coordDestino.r);
    if (esSeguro) return;

    gameState.jugadores.forEach((enemigo, eIdx) => {
        if (eIdx === gameState.turnoActual) return; // No se mata a sí mismo

        enemigo.fichas.forEach((fEnemiga, fIdx) => {
            if (fEnemiga.posIndex === -1) return;
            
            const coordE = enemigo.ruta[fEnemiga.posIndex];
            if (coordE.c === coordDestino.c && coordE.r === coordDestino.r) {
                // ¡Muerte! Actualizamos Firebase directamente para resetear al enemigo
                const pathEnemigo = `partida/jugadores/${eIdx}/fichas/${fIdx}/posIndex`;
                const up = {};
                up[pathEnemigo] = -1;
                window.update(window.ref(window.db), up);
                console.log("Ficha capturada!");
            }
        });
    });
}

// --- UTILS RESTANTES ---
function actualizarUI() {
    const j = gameState.jugadores[gameState.turnoActual];
    if(!j) return;
    const ind = document.getElementById('turn-indicator');
    ind.innerText = `Turno: ${j.nombre}`;
    ind.style.color = getHexColor(j.color);
    document.getElementById('game-msg').innerText = (gameState.fase === 'SELECCIONANDO') ? "¡Mueve una ficha!" : "Espera tu turno...";
}

function calcularBonus(n1, n2, n3) {
    const arr = [n1, n2, n3];
    const u=arr.filter(x=>x===1).length, d=arr.filter(x=>x===2).length, s=arr.filter(x=>x===7).length;
    if (s===3) return 7; if (d===3) return 4; if (u===3) return 2; 
    if (d===2) return 2; if (u===2) return 1; 
    return 0;
}

// --- DIBUJAR EL TABLERO Y CREAR FICHAS ---
function iniciarTableroLocal(cantidad) {
    gameState.totalJugadores = cantidad;
    const colores = ['red', 'green', 'yellow', 'blue'];
    const nombres = ['Rojo', 'Verde', 'Amarillo', 'Azul'];
    const rutas = [rutaRoja, rutaVerde, rutaAmarilla, rutaAzul];
    
    // Coordenadas de las casas (donde empiezan las fichas)
    const bases = [
        [{c:2, r:2}, {c:3, r:2}, {c:2, r:3}, {c:3, r:3}], // Rojo
        [{c:13, r:2}, {c:14, r:2}, {c:13, r:3}, {c:14, r:3}], // Verde
        [{c:13, r:13}, {c:14, r:13}, {c:13, r:14}, {c:14, r:14}], // Amarillo
        [{c:2, r:13}, {c:3, r:13}, {c:2, r:14}, {c:3, r:14}] // Azul
    ];

    gameState.jugadores = [];
    const board = document.getElementById('tokens-container');

    for (let i = 0; i < cantidad; i++) {
        let p = {
            id: i,
            nombre: nombres[i],
            color: colores[i],
            ruta: rutas[i],
            fichas: []
        };

        for (let f = 0; f < 4; f++) {
            const fID = `token-${i}-${f}`;
            // Crear el elemento HTML de la ficha si no existe
            if (!document.getElementById(fID)) {
                const div = document.createElement('div');
                div.id = fID;
                div.className = `token ${colores[i]}`;
                div.onclick = () => seleccionarFicha(i, f);
                board.appendChild(div);
            }

            p.fichas.push({
                id: f,
                posIndex: -1, // -1 significa en casa
                baseCoord: bases[i][f]
            });

            // Posición inicial visual
            const divFicha = document.getElementById(fID);
            moverFichaCSS(divFicha, bases[i][f].c, bases[i][f].r);
        }
        gameState.jugadores.push(p);
    }
}

// --- VERIFICAR MOVIMIENTOS POSIBLES (ILUMINAR) ---
function verificarMovimientos(pasos, dado) {
    const jugador = gameState.jugadores[gameState.turnoActual];
    let posibles = 0;

    jugador.fichas.forEach(ficha => {
        const div = document.getElementById(`token-${jugador.id}-${ficha.id}`);
        div.classList.remove('selectable');
        
        let puede = false;
        if (ficha.posIndex === -1) {
            if (dado === 6) puede = true; // Solo sale con 6
        } else {
            // No puede pasarse de la meta (longitud de la ruta)
            if (ficha.posIndex + pasos < jugador.ruta.length) puede = true;
        }

        if (puede) {
            div.classList.add('selectable');
            posibles++;
        }
    });

    if (posibles === 0) {
        document.getElementById('game-msg').innerText = "Sin movimientos. Pasando turno...";
        // Si no hay movimientos, pasamos turno en Firebase tras 2 seg
        setTimeout(() => {
            const sigTurno = (gameState.turnoActual + 1) % gameState.totalJugadores;
            window.update(window.ref(window.db, 'partida/'), {
                turnoActual: sigTurno,
                fase: 'ESPERANDO'
            });
        }, 2000);
    }
}

// --- CELEBRACIÓN CHIKAWA ---
function mostrarCelebracion6() {
    const modal = document.getElementById('chikawa-modal');
    if(modal) {
        modal.style.display = 'flex';
        setTimeout(() => { modal.style.display = 'none'; }, 1800);
    }
}

// Auxiliar para mover visualmente
function moverFichaCSS(el, c, r) {
    if(!el) return;
    el.style.gridColumnStart = c;
    el.style.gridRowStart = r;
}

// Auxiliar colores hex
function getHexColor(n) {
    const m={'red':'#ff4d4d','green':'#2ecc71','yellow':'#f1c40f','blue':'#3498db'};
    return m[n]||'#fff';
}

// Auxiliar aleatorio
function rndArr(a) { return a[Math.floor(Math.random()*a.length)]; }

// --- FUNCIÓN PARA ARRANCAR EL JUEGO (BOTONES DEL MODAL) ---
window.iniciarJuego = function(num) {
    console.log("Iniciando para", num, "jugadores...");
    
    // 1. Ocultar el modal de inicio
    document.getElementById('start-screen').style.display = 'none';

    // 2. Crear la estructura inicial en Firebase
    // Esto hará que el "onValue" de todos los jugadores se active
    const jugadoresFirebase = [];
    for(let i=0; i<num; i++) {
        jugadoresFirebase.push({
            fichas: [
                {posIndex: -1}, {posIndex: -1}, {posIndex: -1}, {posIndex: -1}
            ]
        });
    }

    window.set(window.ref(window.db, 'partida/'), {
        totalJugadores: num,
        turnoActual: 0,
        fase: 'ESPERANDO',
        ultimoValorDado: 1,
        pasosPendientes: 0,
        jugadores: jugadoresFirebase
    });
}

function toggleRules() {
    const modal = document.getElementById('rules-modal');
    modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
}

// Asignar funciones globales para que el HTML las vea
window.accionPrincipal = accionPrincipal;
window.toggleRules = toggleRules;
window.seleccionarFicha = seleccionarFicha;