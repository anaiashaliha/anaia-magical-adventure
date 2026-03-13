/* ==========================================
   ANAIA'S MAGICAL ADVENTURE WORLD
   Game Configuration
   ========================================== */

const GAME_CONFIG = {
    // Game metadata
    gameName: "Anaia's Magical Adventure World",
    version: "0.1.0",
    targetAge: 5,
    
    // Worlds configuration
    worlds: [
        {
            id: 'farm',
            name: 'Farm Kingdom',
            emoji: '🌾',
            companion: 'Bella the Rabbit',
            companionEmoji: '🐰',
            games: [
                { id: 'feed-animals', name: 'Feed the Animals', emoji: '🐄' },
                { id: 'catch-apples', name: 'Catch Falling Apples', emoji: '🍎' },
                { id: 'sort-vegetables', name: 'Vegetable Sorting', emoji: '🥕' },
                { id: 'hay-puzzle', name: 'Hay Stack Puzzle', emoji: '🌾' },
                { id: 'egg-collection', name: 'Egg Collection', emoji: '🥚' }
            ]
        },
        {
            id: 'jungle',
            name: 'Enchanted Jungle',
            emoji: '🌴',
            companion: 'Miko the Monkey',
            companionEmoji: '🐵',
            games: [
                { id: 'monkey-toss', name: 'Monkey Fruit Toss', emoji: '🐵' },
                { id: 'animal-sounds', name: 'Animal Sound Match', emoji: '🦁' },
                { id: 'vine-puzzle', name: 'Vine Puzzle', emoji: '🌿' },
                { id: 'paint-parrot', name: 'Paint the Parrot', emoji: '🦜' },
                { id: 'spotted-pattern', name: 'Spotted Pattern', emoji: '🐆' }
            ]
        },
        {
            id: 'ocean',
            name: 'Crystal Ocean',
            emoji: '🌊',
            companion: 'Marina the Dolphin',
            companionEmoji: '🐬',
            games: [
                { id: 'fish-feeding', name: 'Fish Feeding', emoji: '🐠' },
                { id: 'bubble-pop', name: 'Bubble Pop Numbers', emoji: '🫧' },
                { id: 'coral-sorting', name: 'Coral Sorting', emoji: '🪸' },
                { id: 'submarine-memory', name: 'Submarine Memory', emoji: '🚢' },
                { id: 'shape-shells', name: 'Shape Shells', emoji: '🐚' }
            ]
        },
        {
            id: 'castle',
            name: 'Starlight Castle',
            emoji: '⭐',
            companion: 'Luna the Unicorn',
            companionEmoji: '🦄',
            games: [
                { id: 'planet-landing', name: 'Planet Landing', emoji: '🪐' },
                { id: 'star-collection', name: 'Star Collection', emoji: '⭐' },
                { id: 'moon-phases', name: 'Moon Phases', emoji: '🌙' },
                { id: 'dress-up-anaia', name: 'Dress Up Anaia', emoji: '👗' },
                { id: 'magic-spell', name: 'Magic Spell Drawing', emoji: '✨' }
            ]
        }
    ],

    // Anaia character configuration
    anaia: {
        name: 'Anaia',
        title: 'Princess',
        personality: {
            intelligent: true,
            brave: true,
            kind: true,
            magical: true
        },
        greeting: "Hi! I'm Anaia. Help me save my magical worlds!",
        sayings: {
            encouragement: [
                "You're so smart!",
                "Great job!",
                "Excellent!",
                "Perfect!",
                "You did it!",
                "Amazing!"
            ],
            gentle_retry: [
                "Oops! Let's try again!",
                "Don't worry, I believe in you!",
                "Almost! Try the next one!",
                "Keep trying! You can do it!"
            ],
            victory: [
                "We did it!",
                "You're the bravest adventurer I know!",
                "Thank you so much for helping!",
                "You're amazing!"
            ]
        }
    },

    // Game settings
    settings: {
        soundEnabled: true,
        musicEnabled: true,
        voiceEnabled: true,
        autoPlay: false,
        difficulty: 'easy' // easy, medium, hard
    },

    // Colors
    colors: {
        primary_purple: '#D4A5FF',
        primary_pink: '#FF99DD',
        primary_blue: '#87CEEB',
        secondary_teal: '#4ECDC4',
        accent_gold: '#FFD700',
        accent_orange: '#FFA500',
        text_dark: '#2C3E50',
        text_light: '#FFFFFF',
        bg_light: '#FFF9E6',
        success_green: '#66BB6A',
        warning_orange: '#FFA726'
    }
};

// Helper function to get world by ID
function getWorldById(worldId) {
    return GAME_CONFIG.worlds.find(world => world.id === worldId);
}

// Helper function to get game by ID
function getGameById(worldId, gameId) {
    const world = getWorldById(worldId);
    if (world) {
        return world.games.find(game => game.id === gameId);
    }
    return null;
}
