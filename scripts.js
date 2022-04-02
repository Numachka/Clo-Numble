let globalEquation = ''; //Contains the equation to solve.
let globalSolution;
let currentEquation = ''; //Contains the equation entered by user.
let currentSolution;
let rowClassesArray = ['a_', 'b_', 'c_', 'd_', 'e_', 'f_', 'g_'];
let colClassesArray = ['1', '2', '3', '4', '5', '6', '7'];
let currentInputBoxCol = 0;
let currentInputBoxRow = 0;
let currentInputBoxId;

function generateEquation() {
    function getRandomNumber() {
        return Math.floor((Math.random() * 10)).toString();
    }

    function getRandomMathSign() {
        switch (Math.floor(Math.random() * 4)) {
            case 0:
                return '+';
            case 1:
                return '-';
            case 2:
                return '/';
            case 3:
                return '*';
        }
    }

    globalEquation = '';

    for (let i = 0; i < 7; i++) {
        let step;
        if (i % 2 == 0) {
            step = getRandomNumber();
            globalEquation += step;
            continue;
        }
        step = getRandomMathSign()
        globalEquation += step;
    }

    globalSolution = eval(globalEquation);

    if (globalSolution % 1 != 0 || globalSolution < -100 || globalSolution > 100) {
        generateEquation();
    }
}

function parseInput(event) {

    function checkPosition() {
        currentInputBoxId = document.getElementById(
            `${rowClassesArray[currentInputBoxRow] + colClassesArray[currentInputBoxCol]}`);
    }

    if (event.target.textContent == "<") {
        currentInputBoxCol--;
        if (currentInputBoxCol == -1) {
            currentInputBoxCol = 0;
        }
        checkPosition();
        currentInputBoxId.textContent = "";
        currentEquation = currentEquation.slice(0, -1);
        return;
    }
    checkPosition();
    currentInputBoxId.textContent = event.target.textContent;
    currentEquation += currentInputBoxId.textContent;
    currentInputBoxCol++;
    if (currentInputBoxCol == 8) {
        currentInputBoxCol = 7;
    }
}

function testInput(event) {

    function isSolution() {
        console.log(globalEquation);
        console.log(currentEquation);
        return globalEquation === currentEquation;
    }

    function parseEquationWithHints() {
        function colorExactExistingValue(i) {
            currentInputBoxId = document.getElementById(
                `${rowClassesArray[currentInputBoxRow] + colClassesArray[i]}`)
            currentInputBoxId.style.backgroundColor = '#55c069';
            currentInputBoxId.style.color = '#ffffff';
        }

        function colorWrongExistingValue(i) {
            currentInputBoxId = document.getElementById(
                `${rowClassesArray[currentInputBoxRow] + colClassesArray[i]}`)
            currentInputBoxId.style.backgroundColor = '#dec14a';
            currentInputBoxId.style.color = '#ffffff';
        }

        function colorWrongMissing(i) {
            currentInputBoxId = document.getElementById(
                `${rowClassesArray[currentInputBoxRow] + colClassesArray[i]}`)
            currentInputBoxId.style.backgroundColor = '#454343';
            currentInputBoxId.style.color = '#ffffff';
        }

        for (let i = 0; i < globalEquation.length; i++) {
            if (globalEquation.charAt(i) === currentEquation.charAt(i)) {
                colorExactExistingValue(i);
            } else if (globalEquation.includes(currentEquation.charAt(i))) {
                colorWrongExistingValue(i);
            } else {
                colorWrongMissing(i);
            }
        }
    }

    console.log(currentEquation);
    console.log(eval(currentEquation));

    currentSolution = eval(currentEquation)
    if (globalEquation.length === currentEquation.length
        && currentSolution === globalSolution) {
        parseEquationWithHints();
        currentInputBoxCol = 0;
        currentInputBoxRow++;
        if (isSolution()) {
            console.log("Right Equation! " + currentEquation);
            document.getElementById("successModal").style.display = "block";
        } else {
            currentEquation = "";
            console.log("Wrong equation!");
        }
        return;
    } else {
        let row = document.querySelectorAll(`[id^=${rowClassesArray[currentInputBoxRow]}]`);
        for (let i = 0; i < row.length; i++) {
            row[i].animate(
                [
                    {transform: 'translateY(2px)'},
                    {transform: 'translateX(2px)'},
                    {transform: 'translateY(-2px)'},
                    {transform: 'translateX(-2px)'}
                ],
                {
                    duration: 150,
                    iterations: 1
                })
        }
        document.getElementById('answer').animate(
            [
                {color: 'red'},
                {color: 'rgb(26, 25, 25);'},
            ],
            {
                duration: 2000,
                iterations: 1
            })
    }
}

function attachKeypadListeners() {
    let keypadArray = document.querySelectorAll('.numpadCell');
    for (let i = 0; i < keypadArray.length; i++) {
        keypadArray[i].addEventListener('click', parseInput);
        console.log('attached listener to - ' + keypadArray[i].className);
    }
    document.querySelector('.numpadButton').addEventListener('click', testInput);
    document.getElementById('value').textContent = globalSolution;
}

function hideEmptyModal() {
    document.getElementById('emptyModal').style.display = 'none';
}

function showEmptyModal() {
    document.getElementById('emptyModal').style.display = 'block';
    document.getElementById('emptyModal').addEventListener('click', hideEmptyModal);
}

function hideLeaderboard() {
    document.getElementById('leaderboardModal').style.display = 'none';
}

function showLeaderboard() {
    document.getElementById('leaderboardModal').style.display= 'block';
    document.getElementById('leaderboardModal').addEventListener('click', hideLeaderboard);
}

generateEquation(); // Generate background data.
console.log(globalEquation);
attachKeypadListeners();
