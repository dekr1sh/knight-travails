function knightMoves(start, end) {
    const moves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];

    function isWithinBounds(x, y) {
        return x >= 0 && x < 8 && y >= 0 && y < 8;
    }

    function toKey(position) {
        return `(${position[0]},${position[1]})`;
    }

    let queue = [[start, [start]]];   // Each array element consists of currentPos and the path so far
    let visited = new Set();

    while (queue.length > 0) {
        const [currentPos, path] = queue.shift();
        
        if (currentPos[0] === end[0] && currentPos[1] === end[1]) {
            console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
            path.forEach(pos => console.log(pos));
            return;
        }

        for (let move of moves) {
            const newX = currentPos[0] + move[0];
            const newY = currentPos[1] + move[1];
            const newPos = [newX, newY];

            if (isWithinBounds(newX, newY) && !visited.has(toKey(newPos))) {
                visited.add(toKey(newPos));
                queue.push([newPos, path.concat([newPos])]);
            }
        }
    }
}

knightMoves([0, 0], [3, 3]);
knightMoves([0,0],[7,7]);