// Anaia Character Module

const Anaia = {
    name: 'Anaia',
    position: { x: 0, y: 0 },
    
    move: function(x, y) {
        this.position.x = x;
        this.position.y = y;
    },
    
    speak: function(message) {
        console.log(this.name + ' says: ' + message);
    }
};
