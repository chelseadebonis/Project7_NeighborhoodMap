let score = 0;


// Enemies our player must avoid

const Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

const Gems = function (x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/Gem Blue.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
//moves enemy across screen(500) and will reset back to beginning position if over 500
// You should multiply any movement by the dt parameter
// which will ensure the game runs at the same speed for
// all computers.
Enemy.prototype.update = function(dt) {
  if (this.x < 500) {
    this.x += this.speed * dt;
  } else {
    this.x = -101;
  }
};

Gems.prototype.update = function(dt) {
  if (this.x < 500) {
    this.x += this.speed * dt;
  } else {
    this.x = -101;
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Gems.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
class Princess {
  constructor() {
    this.column = 101;
    this.row = 83;
    this.startColumn = this.column * 2;
    this.startRow = this.row * 5;
    this.x = this.startColumn;
    this.y = this.startRow;
    this.sprite = 'images/char-princess-girl.png';
  }
// This class requires an update(), render()

  update() {
    //check for collisions, if yes, alert game over, if no game continues
    for (let enemy of allEnemies) {
      if (this.y === enemy.y && this.x < enemy.x + 50 && this.x + 50 > enemy.x) {
        this.x = this.startColumn;
        this.y = this.startRow;
        score -= 100;
      }
      if (this.y === 0) {
    //    alert game won
        this.x = this.startColumn;
        this.y = this.startRow;
        alert('Game Won! You now have ' + score + ' points!');
      }
    }
    for (let gem of allGems) {
       if (this.y === gem.y && gem.x < gem.x + 50 && this.x + 50 > gem.x) {
      //earn points
      score += 100;
      }

    }

  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
// a handleInput() method.
  handleInput(input) {
    switch(input) {
      case 'left':
      if (this.x > 0) {
      this.x -= this.column;
    }
      break;
      case 'up':
      if (this.y > 0) {
      this.y -= this.row;
    }
      break;
      case 'right':
      if (this.x < 404) {
      this.x += this.column;
    }
      break;
      case 'down':
      if (this.y < 400) {
      this.y += this.row;
    }
      break;
    }
  }
}


// Now instantiate your objects.
  // Place the player object in a variable called player
const player = new Princess();
  //create enemies and establish their locations and speeds
  // Place all enemy objects in an array called allEnemies
const enemy1 = new Enemy(-101, 0, 400);
const enemy2 = new Enemy(-101, 83, 100);
const enemy3 = new Enemy(-101, 166, 600);
const enemy4 = new Enemy(0, 249, 200);
const allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3, enemy4);
const gem = new Gems(-101, 166, 700);
const allGems = [];
allGems.push(gem);


// This listens for key presses and sends the keys to your
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

// Player.handleInput() method. You don't need to modify this.
    player.handleInput(allowedKeys[e.keyCode]);
});
