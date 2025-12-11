// Datos de los silabarios (incluidos directamente para evitar problemas de CORS)
const japaneseData = {
  "hiragana": {
    "basic": [
      {"char": "あ", "romaji": "a", "row": "vowels"},
      {"char": "い", "romaji": "i", "row": "vowels"},
      {"char": "う", "romaji": "u", "row": "vowels"},
      {"char": "え", "romaji": "e", "row": "vowels"},
      {"char": "お", "romaji": "o", "row": "vowels"},
      {"char": "か", "romaji": "ka", "row": "k"},
      {"char": "き", "romaji": "ki", "row": "k"},
      {"char": "く", "romaji": "ku", "row": "k"},
      {"char": "け", "romaji": "ke", "row": "k"},
      {"char": "こ", "romaji": "ko", "row": "k"},
      {"char": "さ", "romaji": "sa", "row": "s"},
      {"char": "し", "romaji": "shi", "row": "s"},
      {"char": "す", "romaji": "su", "row": "s"},
      {"char": "せ", "romaji": "se", "row": "s"},
      {"char": "そ", "romaji": "so", "row": "s"},
      {"char": "た", "romaji": "ta", "row": "t"},
      {"char": "ち", "romaji": "chi", "row": "t"},
      {"char": "つ", "romaji": "tsu", "row": "t"},
      {"char": "て", "romaji": "te", "row": "t"},
      {"char": "と", "romaji": "to", "row": "t"},
      {"char": "な", "romaji": "na", "row": "n"},
      {"char": "に", "romaji": "ni", "row": "n"},
      {"char": "ぬ", "romaji": "nu", "row": "n"},
      {"char": "ね", "romaji": "ne", "row": "n"},
      {"char": "の", "romaji": "no", "row": "n"},
      {"char": "は", "romaji": "ha", "row": "h"},
      {"char": "ひ", "romaji": "hi", "row": "h"},
      {"char": "ふ", "romaji": "fu", "row": "h"},
      {"char": "へ", "romaji": "he", "row": "h"},
      {"char": "ほ", "romaji": "ho", "row": "h"},
      {"char": "ま", "romaji": "ma", "row": "m"},
      {"char": "み", "romaji": "mi", "row": "m"},
      {"char": "む", "romaji": "mu", "row": "m"},
      {"char": "め", "romaji": "me", "row": "m"},
      {"char": "も", "romaji": "mo", "row": "m"},
      {"char": "や", "romaji": "ya", "row": "y"},
      {"char": "ゆ", "romaji": "yu", "row": "y"},
      {"char": "よ", "romaji": "yo", "row": "y"},
      {"char": "ら", "romaji": "ra", "row": "r"},
      {"char": "り", "romaji": "ri", "row": "r"},
      {"char": "る", "romaji": "ru", "row": "r"},
      {"char": "れ", "romaji": "re", "row": "r"},
      {"char": "ろ", "romaji": "ro", "row": "r"},
      {"char": "わ", "romaji": "wa", "row": "w"},
      {"char": "を", "romaji": "wo", "row": "w"},
      {"char": "ん", "romaji": "n", "row": "n-special"}
    ],
    "dakuten": [
      {"char": "が", "romaji": "ga", "row": "g"},
      {"char": "ぎ", "romaji": "gi", "row": "g"},
      {"char": "ぐ", "romaji": "gu", "row": "g"},
      {"char": "げ", "romaji": "ge", "row": "g"},
      {"char": "ご", "romaji": "go", "row": "g"},
      {"char": "ざ", "romaji": "za", "row": "z"},
      {"char": "じ", "romaji": "ji", "row": "z"},
      {"char": "ず", "romaji": "zu", "row": "z"},
      {"char": "ぜ", "romaji": "ze", "row": "z"},
      {"char": "ぞ", "romaji": "zo", "row": "z"},
      {"char": "だ", "romaji": "da", "row": "d"},
      {"char": "ぢ", "romaji": "ji", "row": "d"},
      {"char": "づ", "romaji": "zu", "row": "d"},
      {"char": "で", "romaji": "de", "row": "d"},
      {"char": "ど", "romaji": "do", "row": "d"},
      {"char": "ば", "romaji": "ba", "row": "b"},
      {"char": "び", "romaji": "bi", "row": "b"},
      {"char": "ぶ", "romaji": "bu", "row": "b"},
      {"char": "べ", "romaji": "be", "row": "b"},
      {"char": "ぼ", "romaji": "bo", "row": "b"}
    ],
    "handakuten": [
      {"char": "ぱ", "romaji": "pa", "row": "p"},
      {"char": "ぴ", "romaji": "pi", "row": "p"},
      {"char": "ぷ", "romaji": "pu", "row": "p"},
      {"char": "ぺ", "romaji": "pe", "row": "p"},
      {"char": "ぽ", "romaji": "po", "row": "p"}
    ],
    "yoon": [
      {"char": "きゃ", "romaji": "kya", "row": "ky"},
      {"char": "きゅ", "romaji": "kyu", "row": "ky"},
      {"char": "きょ", "romaji": "kyo", "row": "ky"},
      {"char": "しゃ", "romaji": "sha", "row": "sh"},
      {"char": "しゅ", "romaji": "shu", "row": "sh"},
      {"char": "しょ", "romaji": "sho", "row": "sh"},
      {"char": "ちゃ", "romaji": "cha", "row": "ch"},
      {"char": "ちゅ", "romaji": "chu", "row": "ch"},
      {"char": "ちょ", "romaji": "cho", "row": "ch"},
      {"char": "にゃ", "romaji": "nya", "row": "ny"},
      {"char": "にゅ", "romaji": "nyu", "row": "ny"},
      {"char": "にょ", "romaji": "nyo", "row": "ny"},
      {"char": "ひゃ", "romaji": "hya", "row": "hy"},
      {"char": "ひゅ", "romaji": "hyu", "row": "hy"},
      {"char": "ひょ", "romaji": "hyo", "row": "hy"},
      {"char": "みゃ", "romaji": "mya", "row": "my"},
      {"char": "みゅ", "romaji": "myu", "row": "my"},
      {"char": "みょ", "romaji": "myo", "row": "my"},
      {"char": "りゃ", "romaji": "rya", "row": "ry"},
      {"char": "りゅ", "romaji": "ryu", "row": "ry"},
      {"char": "りょ", "romaji": "ryo", "row": "ry"},
      {"char": "ぎゃ", "romaji": "gya", "row": "gy"},
      {"char": "ぎゅ", "romaji": "gyu", "row": "gy"},
      {"char": "ぎょ", "romaji": "gyo", "row": "gy"},
      {"char": "じゃ", "romaji": "ja", "row": "j"},
      {"char": "じゅ", "romaji": "ju", "row": "j"},
      {"char": "じょ", "romaji": "jo", "row": "j"},
      {"char": "ぢゃ", "romaji": "ja", "row": "dj"},
      {"char": "ぢゅ", "romaji": "ju", "row": "dj"},
      {"char": "ぢょ", "romaji": "jo", "row": "dj"},
      {"char": "びゃ", "romaji": "bya", "row": "by"},
      {"char": "びゅ", "romaji": "byu", "row": "by"},
      {"char": "びょ", "romaji": "byo", "row": "by"},
      {"char": "ぴゃ", "romaji": "pya", "row": "py"},
      {"char": "ぴゅ", "romaji": "pyu", "row": "py"},
      {"char": "ぴょ", "romaji": "pyo", "row": "py"}
    ]
  },
  "katakana": {
    "basic": [
      {"char": "ア", "romaji": "a", "row": "vowels"},
      {"char": "イ", "romaji": "i", "row": "vowels"},
      {"char": "ウ", "romaji": "u", "row": "vowels"},
      {"char": "エ", "romaji": "e", "row": "vowels"},
      {"char": "オ", "romaji": "o", "row": "vowels"},
      {"char": "カ", "romaji": "ka", "row": "k"},
      {"char": "キ", "romaji": "ki", "row": "k"},
      {"char": "ク", "romaji": "ku", "row": "k"},
      {"char": "ケ", "romaji": "ke", "row": "k"},
      {"char": "コ", "romaji": "ko", "row": "k"},
      {"char": "サ", "romaji": "sa", "row": "s"},
      {"char": "シ", "romaji": "shi", "row": "s"},
      {"char": "ス", "romaji": "su", "row": "s"},
      {"char": "セ", "romaji": "se", "row": "s"},
      {"char": "ソ", "romaji": "so", "row": "s"},
      {"char": "タ", "romaji": "ta", "row": "t"},
      {"char": "チ", "romaji": "chi", "row": "t"},
      {"char": "ツ", "romaji": "tsu", "row": "t"},
      {"char": "テ", "romaji": "te", "row": "t"},
      {"char": "ト", "romaji": "to", "row": "t"},
      {"char": "ナ", "romaji": "na", "row": "n"},
      {"char": "ニ", "romaji": "ni", "row": "n"},
      {"char": "ヌ", "romaji": "nu", "row": "n"},
      {"char": "ネ", "romaji": "ne", "row": "n"},
      {"char": "ノ", "romaji": "no", "row": "n"},
      {"char": "ハ", "romaji": "ha", "row": "h"},
      {"char": "ヒ", "romaji": "hi", "row": "h"},
      {"char": "フ", "romaji": "fu", "row": "h"},
      {"char": "ヘ", "romaji": "he", "row": "h"},
      {"char": "ホ", "romaji": "ho", "row": "h"},
      {"char": "マ", "romaji": "ma", "row": "m"},
      {"char": "ミ", "romaji": "mi", "row": "m"},
      {"char": "ム", "romaji": "mu", "row": "m"},
      {"char": "メ", "romaji": "me", "row": "m"},
      {"char": "モ", "romaji": "mo", "row": "m"},
      {"char": "ヤ", "romaji": "ya", "row": "y"},
      {"char": "ユ", "romaji": "yu", "row": "y"},
      {"char": "ヨ", "romaji": "yo", "row": "y"},
      {"char": "ラ", "romaji": "ra", "row": "r"},
      {"char": "リ", "romaji": "ri", "row": "r"},
      {"char": "ル", "romaji": "ru", "row": "r"},
      {"char": "レ", "romaji": "re", "row": "r"},
      {"char": "ロ", "romaji": "ro", "row": "r"},
      {"char": "ワ", "romaji": "wa", "row": "w"},
      {"char": "ヲ", "romaji": "wo", "row": "w"},
      {"char": "ン", "romaji": "n", "row": "n-special"}
    ],
    "dakuten": [
      {"char": "ガ", "romaji": "ga", "row": "g"},
      {"char": "ギ", "romaji": "gi", "row": "g"},
      {"char": "グ", "romaji": "gu", "row": "g"},
      {"char": "ゲ", "romaji": "ge", "row": "g"},
      {"char": "ゴ", "romaji": "go", "row": "g"},
      {"char": "ザ", "romaji": "za", "row": "z"},
      {"char": "ジ", "romaji": "ji", "row": "z"},
      {"char": "ズ", "romaji": "zu", "row": "z"},
      {"char": "ゼ", "romaji": "ze", "row": "z"},
      {"char": "ゾ", "romaji": "zo", "row": "z"},
      {"char": "ダ", "romaji": "da", "row": "d"},
      {"char": "ヂ", "romaji": "ji", "row": "d"},
      {"char": "ヅ", "romaji": "zu", "row": "d"},
      {"char": "デ", "romaji": "de", "row": "d"},
      {"char": "ド", "romaji": "do", "row": "d"},
      {"char": "バ", "romaji": "ba", "row": "b"},
      {"char": "ビ", "romaji": "bi", "row": "b"},
      {"char": "ブ", "romaji": "bu", "row": "b"},
      {"char": "ベ", "romaji": "be", "row": "b"},
      {"char": "ボ", "romaji": "bo", "row": "b"}
    ],
    "handakuten": [
      {"char": "パ", "romaji": "pa", "row": "p"},
      {"char": "ピ", "romaji": "pi", "row": "p"},
      {"char": "プ", "romaji": "pu", "row": "p"},
      {"char": "ペ", "romaji": "pe", "row": "p"},
      {"char": "ポ", "romaji": "po", "row": "p"}
    ],
    "yoon": [
      {"char": "キャ", "romaji": "kya", "row": "ky"},
      {"char": "キュ", "romaji": "kyu", "row": "ky"},
      {"char": "キョ", "romaji": "kyo", "row": "ky"},
      {"char": "シャ", "romaji": "sha", "row": "sh"},
      {"char": "シュ", "romaji": "shu", "row": "sh"},
      {"char": "ショ", "romaji": "sho", "row": "sh"},
      {"char": "チャ", "romaji": "cha", "row": "ch"},
      {"char": "チュ", "romaji": "chu", "row": "ch"},
      {"char": "チョ", "romaji": "cho", "row": "ch"},
      {"char": "ニャ", "romaji": "nya", "row": "ny"},
      {"char": "ニュ", "romaji": "nyu", "row": "ny"},
      {"char": "ニョ", "romaji": "nyo", "row": "ny"},
      {"char": "ヒャ", "romaji": "hya", "row": "hy"},
      {"char": "ヒュ", "romaji": "hyu", "row": "hy"},
      {"char": "ヒョ", "romaji": "hyo", "row": "hy"},
      {"char": "ミャ", "romaji": "mya", "row": "my"},
      {"char": "ミュ", "romaji": "myu", "row": "my"},
      {"char": "ミョ", "romaji": "myo", "row": "my"},
      {"char": "リャ", "romaji": "rya", "row": "ry"},
      {"char": "リュ", "romaji": "ryu", "row": "ry"},
      {"char": "リョ", "romaji": "ryo", "row": "ry"},
      {"char": "ギャ", "romaji": "gya", "row": "gy"},
      {"char": "ギュ", "romaji": "gyu", "row": "gy"},
      {"char": "ギョ", "romaji": "gyo", "row": "gy"},
      {"char": "ジャ", "romaji": "ja", "row": "j"},
      {"char": "ジュ", "romaji": "ju", "row": "j"},
      {"char": "ジョ", "romaji": "jo", "row": "j"},
      {"char": "ヂャ", "romaji": "ja", "row": "dj"},
      {"char": "ヂュ", "romaji": "ju", "row": "dj"},
      {"char": "ヂョ", "romaji": "jo", "row": "dj"},
      {"char": "ビャ", "romaji": "bya", "row": "by"},
      {"char": "ビュ", "romaji": "byu", "row": "by"},
      {"char": "ビョ", "romaji": "byo", "row": "by"},
      {"char": "ピャ", "romaji": "pya", "row": "py"},
      {"char": "ピュ", "romaji": "pyu", "row": "py"},
      {"char": "ピョ", "romaji": "pyo", "row": "py"}
    ]
  }
};

// Estado de la aplicación
const state = {
    data: japaneseData,
    practiceMode: false,
    showRomaji: true,
    currentFilter: 'all',
    searchTerm: ''
};

// Cargar datos (ahora sincrónico ya que están embebidos)
const loadData = () => {
    renderSyllabaries();
};

// Renderizar silabarios
const renderSyllabaries = () => {
    renderSyllabary('hiragana', state.data.hiragana, 'hiragana');
    renderSyllabary('katakana', state.data.katakana, 'katakana');
    setupEventListeners();
};

// Renderizar un silabario
const renderSyllabary = (id, data, type) => {
    const container = document.getElementById(id);
    if (!container) return;

    container.innerHTML = '';

    // Título
    const title = document.createElement('h3');
    title.className = `keyboard-title ${type}`;
    title.textContent = type === 'hiragana' ? 'Hiragana' : 'Katakana';
    title.id = type;
    container.appendChild(title);

    // Secciones
    const sections = [
        { key: 'basic', title: 'Básicos' },
        { key: 'dakuten', title: 'Dakuten (゛)' },
        { key: 'handakuten', title: 'Handakuten (゜)' },
        { key: 'yoon', title: 'Combinaciones con Y' }
    ];

    sections.forEach(section => {
        if (data[section.key] && data[section.key].length > 0) {
            const sectionTitle = document.createElement('div');
            sectionTitle.className = 'section-title';
            sectionTitle.textContent = section.title;
            container.appendChild(sectionTitle);

            // Agrupar caracteres por fila (row)
            const rowsMap = new Map();
            data[section.key].forEach(char => {
                const rowKey = char.row || 'other';
                if (!rowsMap.has(rowKey)) {
                    rowsMap.set(rowKey, []);
                }
                rowsMap.get(rowKey).push(char);
            });

            // Orden de las filas (orden tradicional japonés)
            const rowOrder = ['vowels', 'k', 's', 't', 'n', 'h', 'm', 'y', 'r', 'w', 'n-special', 'g', 'z', 'd', 'b', 'p', 'ky', 'sh', 'ch', 'ny', 'hy', 'my', 'ry', 'gy', 'j', 'dj', 'by', 'py', 'other'];
            
            // Crear una fila para cada grupo en el orden correcto
            const sortedRows = Array.from(rowsMap.entries()).sort((a, b) => {
                const indexA = rowOrder.indexOf(a[0]);
                const indexB = rowOrder.indexOf(b[0]);
                if (indexA === -1 && indexB === -1) return 0;
                if (indexA === -1) return 1;
                if (indexB === -1) return -1;
                return indexA - indexB;
            });

            sortedRows.forEach(([rowKey, chars]) => {
                const row = document.createElement('div');
                row.className = 'character-row';
                row.setAttribute('data-row', rowKey);
                row.setAttribute('data-section', section.key);

                chars.forEach(char => {
                    const card = createCharCard(char, type);
                    row.appendChild(card);
                });

                container.appendChild(row);
            });
        }
    });
};

// Crear tarjeta de carácter
const createCharCard = (char, type) => {
    const card = document.createElement('button');
    card.className = `char-card ${type}`;
    card.setAttribute('aria-label', `Carácter ${char.char}, pronunciación ${char.romaji}`);
    card.setAttribute('tabindex', '0');
    card.setAttribute('data-char', char.char);
    card.setAttribute('data-romaji', char.romaji);
    card.setAttribute('data-type', type);

    const japanese = document.createElement('div');
    japanese.className = 'char-japanese';
    japanese.textContent = char.char;

    const romaji = document.createElement('div');
    romaji.className = 'char-romaji';
    romaji.textContent = char.romaji;

    card.appendChild(japanese);
    card.appendChild(romaji);

    // Event listeners
    card.addEventListener('click', () => handleCharClick(card));
    card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCharClick(card);
        }
    });

    return card;
};

// Manejar clic en carácter
const handleCharClick = (card) => {
    if (state.practiceMode) {
        card.classList.toggle('revealed');
        const japanese = card.querySelector('.char-japanese');
        const romaji = card.querySelector('.char-romaji');
        
        if (card.classList.contains('revealed')) {
            // Revelar: eliminar estilos inline para que el CSS tome control
            japanese.style.removeProperty('opacity');
            if (romaji) {
                romaji.style.removeProperty('opacity');
                romaji.style.removeProperty('visibility');
            }
        } else {
            // Ocultar: establecer opacity a 0
            japanese.style.opacity = '0';
            if (romaji) {
                romaji.style.opacity = '0';
                romaji.style.visibility = 'hidden';
            }
        }
    }
};

// Filtrar caracteres
const filterCharacters = () => {
    const allCards = document.querySelectorAll('.char-card');
    const searchLower = state.searchTerm.toLowerCase();

    allCards.forEach(card => {
        const char = card.getAttribute('data-char');
        const romaji = card.getAttribute('data-romaji');
        const type = card.getAttribute('data-type');

        let shouldShow = true;

        // Filtro de búsqueda
        if (state.searchTerm) {
            shouldShow = char.includes(searchLower) || 
                        romaji.toLowerCase().includes(searchLower);
        }

        // Filtro de tipo
        if (state.currentFilter !== 'all') {
            if (state.currentFilter === 'hiragana' && type !== 'hiragana') {
                shouldShow = false;
            } else if (state.currentFilter === 'katakana' && type !== 'katakana') {
                shouldShow = false;
            }
        }

        card.style.display = shouldShow ? 'flex' : 'none';
    });

    // Ocultar filas vacías
    const allRows = document.querySelectorAll('.character-row');
    allRows.forEach(row => {
        const visibleCards = Array.from(row.querySelectorAll('.char-card'))
            .filter(c => c.style.display !== 'none');
        row.style.display = visibleCards.length > 0 ? 'flex' : 'none';
    });

    // Ocultar secciones vacías
    const allSections = document.querySelectorAll('.section-title');
    allSections.forEach(sectionTitle => {
        const sectionRows = Array.from(sectionTitle.parentElement.querySelectorAll('.character-row'))
            .filter(row => row.style.display !== 'none');
        sectionTitle.style.display = sectionRows.length > 0 ? 'block' : 'none';
    });
};

// Toggle modo práctica
const togglePracticeMode = () => {
    state.practiceMode = !state.practiceMode;
    const button = document.getElementById('practiceBtn');
    const allCards = document.querySelectorAll('.char-card');
    
    if (state.practiceMode) {
        button.textContent = 'Salir del Modo Práctica';
        button.classList.add('active');
        allCards.forEach(card => {
            card.classList.add('hidden-char');
            card.classList.remove('revealed');
            const japanese = card.querySelector('.char-japanese');
            const romaji = card.querySelector('.char-romaji');
            japanese.style.opacity = '0';
            if (romaji) {
                romaji.style.opacity = '0';
                romaji.style.visibility = 'hidden';
            }
        });
    } else {
        button.textContent = 'Modo Práctica';
        button.classList.remove('active');
        allCards.forEach(card => {
            card.classList.remove('hidden-char', 'revealed');
            const japanese = card.querySelector('.char-japanese');
            const romaji = card.querySelector('.char-romaji');
            japanese.style.removeProperty('opacity');
            if (romaji) {
                romaji.style.removeProperty('opacity');
                romaji.style.removeProperty('visibility');
            }
        });
    }
};

// Toggle mostrar romaji
const toggleRomaji = () => {
    state.showRomaji = !state.showRomaji;
    const button = document.getElementById('romajiBtn');
    const allRomaji = document.querySelectorAll('.char-romaji');
    
    if (state.showRomaji) {
        button.textContent = 'Ocultar Romaji';
        button.classList.add('active');
        allRomaji.forEach(romaji => {
            romaji.style.display = 'block';
        });
    } else {
        button.textContent = 'Mostrar Romaji';
        button.classList.remove('active');
        allRomaji.forEach(romaji => {
            romaji.style.display = 'none';
        });
    }
};

// Inicializar estado de romaji (visible por defecto)
state.showRomaji = true;

// Configurar event listeners
const setupEventListeners = () => {
    // Botón modo práctica
    const practiceBtn = document.getElementById('practiceBtn');
    if (practiceBtn) {
        practiceBtn.addEventListener('click', togglePracticeMode);
    }

    // Botón toggle romaji
    const romajiBtn = document.getElementById('romajiBtn');
    if (romajiBtn) {
        romajiBtn.addEventListener('click', toggleRomaji);
    }

    // Búsqueda
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.searchTerm = e.target.value;
            filterCharacters();
        });
    }

    // Filtros
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            state.currentFilter = e.target.getAttribute('data-filter');
            filterCharacters();
        });
    });
};

// Inicializar aplicación
document.addEventListener('DOMContentLoaded', () => {
    loadData();
});

