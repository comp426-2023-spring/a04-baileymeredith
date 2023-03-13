export {rps, rpsls}

function rps(move) {
    // rock paper scissors exportable function

    // grabs random index from the possibleMoves list
    const possibleMoves = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * possibleMoves.length);

    if (move === undefined) {
        // returns a single 'shot' if no argument is passed
        return {
            player: possibleMoves[random]
        };
    } else if (!possibleMoves.includes(move)){
        // throws error if an out-of-range argument is used (not in possible moves)
        console.error('Error: Possible moves include rock, paper, or scissors.')
        throw new RangeError()
    } else {
        // convert move to lowercase so all text inputs will work
        move = move.toLowerCase();
        // assigns opponentMove to be the element at the random index found on line 8
        const opponentMove = possibleMoves[random]
        let result
        // player is rock:
        if (move === 'rock') {
            if (opponentMove === 'rock') {
                result = 'tie';
            } else if (opponentMove === 'paper') {
                result = 'lose';
            } else if (opponentMove === 'scissors') {
                result = 'win';
            }
        // player is paper:
        } else if (move === 'paper') {
            if (opponentMove === 'rock') {
                result = 'win';
            } else if (opponentMove === 'paper') {
                result = 'tie';
            } else if (opponentMove === 'scissors') {
                result = 'lose';
            }
        // player is scissors:
        } else if (move === 'scissors') {
            if (opponentMove === 'rock') {
                result = 'lose';
            } else if (opponentMove === 'paper') {
                result = 'win';
            } else if (opponentMove === 'scissors') {
                result = 'tie';
            }
        }
        return {
            player: move,
            opponent: opponentMove,
            result: result
        };
    }
}

function rpsls(move) {
    // rock paper scissors lizard spock exportable function

    // grabs random index from the possibleMoves list
    const possibleMoves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const random = Math.floor(Math.random() * possibleMoves.length);

    if (move === undefined) {
        // returns a single 'shot' if no argument is passed
        return {
            player: possibleMoves[random]
        };
    } else if (!possibleMoves.includes(move)) {
        // throws error if an out-of-range argument is used (not in possible moves)
        console.error('Error: Move must be rock, paper, scissors, lizard, or spock.')
        throw new RangeError();
    }
    else {
        // convert move to lowercase so all text inputs will work
        move = move.toLowerCase();
        // assigns opponentMove to be the element at the random index found on line 66
        const opponentMove = possibleMoves[random]
        let result
        // player is rock:
        if (move === 'rock') {
            if (opponentMove === 'rock') {
                result = 'tie';
            } else if (opponentMove === 'paper') {
                result = 'lose';
            } else if (opponentMove === 'scissors') {
                result = 'win';
            } else if (opponentMove === 'lizard') {
                result = 'win';
            } else if (opponentMove === 'spock') {
                result = 'lose';
            }
        // player is paper
        } else if (move === 'paper') {
            if (opponentMove === 'rock') {
                result = 'win';
            } else if (opponentMove === 'paper') {
                result = 'tie';
            } else if (opponentMove === 'scissors') {
                result = 'lose';
            } else if (opponentMove === 'lizard') {
                result = 'lose';
            } else if (opponentMove === 'spock') {
                result = 'win';
            }
        // player is scissors
        } else if (move === 'scissors') {
            if (opponentMove === 'rock') {
                result = 'lose';
            } else if (opponentMove === 'paper') {
                result = 'win';
            } else if (opponentMove === 'scissors') {
                result = 'tie';
            } else if (opponentMove === 'lizard') {
                result = 'win';
            } else if (opponentMove === 'spock') {
                result = 'lose';
            }
        // player is lizard
        } else if (move === 'lizard') {
            if (opponentMove === 'rock') {
                result = 'lose';
            } else if (opponentMove === 'paper') {
                result = 'win';
            } else if (opponentMove === 'scissors') {
                result = 'lose';
            } else if (opponentMove === 'lizard') {
                result = 'tie';
            } else if (opponentMove === 'spock') {
                result = 'win';
            }
        // player is spock
        } else if (move === 'spock') {
            if (opponentMove === 'rock') {
                result = 'lose';
            } else if (opponentMove === 'paper') {
                result = 'win';
            } else if (opponentMove === 'scissors') {
                result = 'win';
            } else if (opponentMove === 'lizard') {
                result = 'lose';
            } else if (opponentMove === 'spock') {
                result = 'tie';
            }
        }
        return {
            player: move,
            opponent: opponentMove,
            result: result
        };
    }
}