let turn = 0;
let grid = [
    [-1,-1,-1],
    [-1,-1,-1],
    [-1,-1,-1]
];

const player_won = (x, y) => {
    // console.log(grid);
    // x = Number(x);
    // y = Number(y);
    // console.log(x, y);
    // console.log(turn);
    if (grid[x][0] === turn && grid[x][1] === turn && grid[x][2] === turn)
        return true;
    if (grid[0][y] === turn && grid[1][y] === turn && grid[2][y] === turn)
        return true;
    if (grid[0][0] === turn && grid[1][1] === turn && grid[2][2] === turn)
        return true;
    if (grid[0][2] === turn && grid[1][1] === turn && grid[2][0] === turn)
        return true;
    return false;
}

const handleClick = e => {
    // console.log('clicked!!');
    if (e.target) {
        const id = e.target.dataset.item;
        // console.log(id);
        const ele = document.getElementById(id);
        // <div class="cross"></div>
        // <div class="circle"></div>
        let html = '<div class="cross"></div>';
        if (turn === 1)
            html = '<div class="circle"></div>'
        ele.insertAdjacentHTML('afterbegin', html);
        let loc = id.split('');
        // console.log(loc[1] + ', ' + loc[2]);
        grid[loc[1]][loc[2]] = turn;
        ele.removeEventListener('click', handleClick);
        let is_won = player_won(loc[1], loc[2]);
        console.log(is_won);
        if (is_won === true) {
            alert(`Player ${turn + 1} Won!!!`);
            let inputs = document.querySelectorAll('.grid-ele');
            const gridArr = Array.prototype.slice.call(inputs);
            gridArr.forEach(ele => ele.removeEventListener('click', handleClick));
        }
        turn = 1 - turn;
    }
}

const init = () => {
    // console.log('loaded');
    let inputs = document.querySelectorAll('.grid-ele');
    const gridArr = Array.prototype.slice.call(inputs);
    gridArr.forEach(ele => ele.addEventListener('click', handleClick));
}

const reset = () => {
    location.reload();
}

init();