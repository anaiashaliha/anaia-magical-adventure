/* ==========================================
   ANAIA'S MAGICAL ADVENTURE WORLD
   Main Game Application
   ========================================== */

class AnaiaAdventureGame {
    constructor() {
        this.gameContainer = document.getElementById('game-container');
        this.currentScreen = null;
        this.currentWorld = null;
        this.gameState = {
            starsEarned: 0,
            gamesCompleted: [],
            lastPlayedWorld: null
        };
        
        this.init();
    }

    init() {
        console.log("✨ Anaia's Magical Adventure World Initializing...");
        this.loadGameState();
        this.showMenuScreen();
        anaia.greetPlayer();
    }

    // ===== Screen Management =====
    clearContainer() {
        this.gameContainer.innerHTML = '';
    }

    showMenuScreen() {
        this.currentScreen = 'menu';
        this.clearContainer();
        
        const menuHTML = `
            <div class="menu-screen">
                <div class="menu-content">
                    <h1 class="game-title">✨ ANAIA'S MAGICAL ✨</h1>
                    <h1 class="game-title">ADVENTURE WORLD</h1>
                    
                    <div class="anaia-welcome">
                        <p class="anaia-message">Hi! I'm Anaia.</p>
                        <p class="anaia-message">Help me save my magical worlds!</p>
                    </div>
                    
                    <div class="menu-buttons">
                        <button class="btn-primary" id="play-btn">Play with Anaia</button>
                        <button class="btn-secondary" id="help-btn">Help</button>
                    </div>
                    
                    <p class="footer-text">Made with ❤️ for magical learning adventures</p>
                </div>
            </div>
        `;
        
        this.gameContainer.innerHTML = menuHTML;
        this.attachMenuListeners();
    }

    showWorldMapScreen() {
        this.currentScreen = 'world-map';
        this.clearContainer();
        
        const worldCardsHTML = GAME_CONFIG.worlds.map(world => `
            <div class="world-card" data-world-id="${world.id}">
                <div class="world-icon">${world.emoji}</div>
                <h2>${world.name}</h2>
                <p>${world.companion}</p>
            </div>
        `).join('');
        
        const worldMapHTML = `
            <button class="btn-back" id="back-btn">← BACK</button>
            
            <div class="world-map-screen">
                <div class="world-map-content">
                    <h1 class="page-title">Anaia's Worlds</h1>
                    
                    <div class="worlds-grid">
                        ${worldCardsHTML}
                    </div>
                </div>
            </div>
        `;
        
        this.gameContainer.innerHTML = worldMapHTML;
        this.attachWorldMapListeners();
    }

    showGameSelectionScreen(worldId) {
        this.currentScreen = 'game-selection';
        this.currentWorld = worldId;
        this.clearContainer();
        
        const world = getWorldById(worldId);
        if (!world) return;
        
        const gameCardsHTML = world.games.map(game => `
            <div class="game-card" data-game-id="${game.id}">
                <div class="game-icon">${game.emoji}</div>
                <h3>${game.name}</h3>
            </div>
        `).join('');
        
        const gameSelectionHTML = `
            <button class="btn-back" id="back-btn">← BACK</button>
            
            <div class="game-selection-screen">
                <div class="game-selection-content">
                    <h1 class="page-title">${world.emoji} ${world.name}</h1>
                    
                    <div class="games-grid">
                        ${gameCardsHTML}
                    </div>
                </div>
            </div>
        `;
        
        this.gameContainer.innerHTML = gameSelectionHTML;
        this.attachGameSelectionListeners();
    }

    showGameIntroScreen(worldId, gameId) {
        this.currentScreen = 'game-intro';
        
        const world = getWorldById(worldId);
        const game = getGameById(worldId, gameId);
        
        if (!world || !game) return;
        
        const introHTML = `
            <div class="game-intro-screen">
                <div class="intro-content">
                    <h1 class="intro-title">${world.emoji} ${world.name}</h1>
                    
                    <div class="intro-message">
                        <p class="anaia-dialog">
                            Hi! This is <strong>${game.name}</strong>
                        </p>
                        <p class="anaia-dialog">
                            ${anaia.getEncouragement()}
                        </p>
                    </div>
                    
                    <button class="btn-primary" id="start-game-btn">Start Game!</button>
                    <button class="btn-secondary" id="cancel-game-btn">Go Back</button>
                </div>
            </div>
        `;
        
        this.gameContainer.innerHTML = introHTML;
        
        document.getElementById('start-game-btn').addEventListener('click', () => {
            this.showGameScreen(worldId, gameId);
        });
        
        document.getElementById('cancel-game-btn').addEventListener('click', () => {
            this.showGameSelectionScreen(worldId);
        });
    }

    showGameScreen(worldId, gameId) {
        this.currentScreen = 'game';
        
        const world = getWorldById(worldId);
        const game = getGameById(worldId, gameId);
        
        if (!world || !game) return;
        
        // Placeholder for actual game implementation
        const gameHTML = `
            <div class="game-screen">
                <div class="game-header">
                    <span class="world-indicator">${world.emoji}</span>
                    <h2>${game.name}</h2>
                    <button class="btn-small" id="pause-btn">⏸ Pause</button>
                </div>
                
                <div class="game-area" id="game-area">
                    <p style="text-align: center; margin-top: 50px; font-size: 24px;">
                        🚧 ${game.name} coming soon! 🚧
                    </p>
                </div>
                
                <div class="game-footer">
                    <p id="game-stars">⭐ Stars: 0</p>
                </div>
            </div>
        `;
        
        this.gameContainer.innerHTML = gameHTML;
        
        document.getElementById('pause-btn').addEventListener('click', () => {
            this.showGameSelectionScreen(worldId);
        });
    }

    // ===== Event Listeners =====
    attachMenuListeners() {
        document.getElementById('play-btn').addEventListener('click', () => {
            this.showWorldMapScreen();
        });
        
        document.getElementById('help-btn').addEventListener('click', () => {
            alert('Help: Choose a world and play games with Anaia to learn!');
        });
    }

    attachWorldMapListeners() {
        document.getElementById('back-btn').addEventListener('click', () => {
            this.showMenuScreen();
        });
        
        document.querySelectorAll('.world-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const worldId = card.dataset.worldId;
                this.showGameSelectionScreen(worldId);
            });
        });
    }

    attachGameSelectionListeners() {
        document.getElementById('back-btn').addEventListener('click', () => {
            this.showWorldMapScreen();
        });
        
        document.querySelectorAll('.game-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const gameId = card.dataset.gameId;
                this.showGameIntroScreen(this.currentWorld, gameId);
            });
        });
    }

    // ===== Game State Management =====
    saveGameState() {
        localStorage.setItem('anaiaGameState', JSON.stringify(this.gameState));
    }

    loadGameState() {
        const saved = localStorage.getItem('anaiaGameState');
        if (saved) {
            this.gameState = JSON.parse(saved);
        }
    }

    addStars(count) {
        this.gameState.starsEarned += count;
        this.saveGameState();
    }

    completeGame(worldId, gameId) {
        const gameKey = `${worldId}-${gameId}`;
        if (!this.gameState.gamesCompleted.includes(gameKey)) {
            this.gameState.gamesCompleted.push(gameKey);
            this.saveGameState();
        }
    }

    // ===== Utility Functions =====
    log(message) {
        console.log(`🎮 [Game] ${message}`);
    }
}

// Initialize game when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌟 DOM Loaded, starting Anaia\'s Adventure...');
    window.game = new AnaiaAdventureGame();
});
