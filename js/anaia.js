/* ==========================================
   ANAIA CHARACTER SYSTEM
   Anaia's dialogues, behaviors, reactions
   ========================================== */

class Anaia {
    constructor() {
        this.name = GAME_CONFIG.anaia.name;
        this.greetings = GAME_CONFIG.anaia.greeting;
        this.sayings = GAME_CONFIG.anaia.sayings;
    }

    // Get random encouragement message
    getEncouragement() {
        const messages = this.sayings.encouragement;
        return messages[Math.floor(Math.random() * messages.length)];
    }

    // Get random gentle retry message
    getGentleRetry() {
        const messages = this.sayings.gentle_retry;
        return messages[Math.floor(Math.random() * messages.length)];
    }

    // Get random victory message
    getVictory() {
        const messages = this.sayings.victory;
        return messages[Math.floor(Math.random() * messages.length)];
    }

    // Display dialog
    speak(message) {
        console.log(`🌟 Anaia says: "${message}"`);
        // This will be used to show dialog in the UI
    }

    // Welcome dialog
    greetPlayer() {
        this.speak(this.greetings);
    }

    // Encourage after correct action
    encourageCorrect() {
        this.speak(this.getEncouragement());
    }

    // Encourage after mistake (gentle)
    encourageRetry() {
        this.speak(this.getGentleRetry());
    }

    // Celebrate victory
    celebrate() {
        this.speak(this.getVictory());
    }

    // World introduction
    introduceWorld(worldName, companionName) {
        const message = `Welcome to ${worldName}! Let me introduce you to my friend ${companionName}!`;
        this.speak(message);
    }
}

// Create Anaia instance
const anaia = new Anaia();
