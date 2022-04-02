<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Clonumble</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<div id="successModal" class="modal">
    <div class="modalContent">
        <p>Congratulations! You found the solution!</p>
    </div>
</div>

<div id="emptyModal" class="modal">
    <div class="modalContent">
        <p>Sorry! This feature has not been implemented yet!</p>
    </div>
</div>

<div id="leaderboardModal" class="modal">
    <div class="modalContent leaderModal">
        <section class="summarySection">
            <p class="headerText">DAILY STATISTICS</p>
            <div class="summaryDiv">
                <p class="summaryTop">0</p>
                <p class="summaryTop">0</p>
                <p class="summaryTop">NaN</p>
                <p class="summaryBottom">Played</p>
                <p class="summaryBottom">Won</p>
                <p class="summaryBottom">Win %</p>
            </div>
            <hr>
        </section>
        <section class="distributionSection">
            <p>Guess Distribution</p>
            <div class="distributionDiv">
                <div>1</div>
                <div class="numpadItem">0</div>
                <div class="numpadItem">0</div>
                <div class="numpadItem">0</div>
                <div class="numpadItem">0</div>
                <div class="numpadItem">0</div>
                <div class="numpadItem">0</div>
                <div class="numpadItem">0</div>
            </div>
        </section>
    </div>
</div>

<header class="header">
    <div class="headerContent">
        <img src="resources/images/information-line.svg" onclick="showEmptyModal()">
        <p class="headerText">NUMBLE</p>
        <img src="resources/images/numbers-line.svg" onclick="showLeaderboard()">
        <img src="resources/images/moon-line.svg" onclick="showEmptyModal()">
    </div>
    <div class="headerDayCount">
        <p># 53</p>
        <hr>
    </div>
</header>
<section class="content">
    <!--
    Position of the content box is divided like a matrix:
     | a_a | a_b | ... | a_f |
     | b_a | ......... | b_f |
        ...................
        ...................
     | f_a | ......... | f_f |
     -->
    <div id="a_1"></div><div id="a_2"></div><div id="a_3"></div><div id="a_4"></div><div id="a_5"></div><div id="a_6"></div><div id="a_7"></div>
    <div id="b_1"></div><div id="b_2"></div><div id="b_3"></div><div id="b_4"></div><div id="b_5"></div><div id="b_6"></div><div id="b_7"></div>
    <div id="c_1"></div><div id="c_2"></div><div id="c_3"></div><div id="c_4"></div><div id="c_5"></div><div id="c_6"></div><div id="c_7"></div>
    <div id="d_1"></div><div id="d_2"></div><div id="d_3"></div><div id="d_4"></div><div id="d_5"></div><div id="d_6"></div><div id="d_7"></div>
    <div id="e_1"></div><div id="e_2"></div><div id="e_3"></div><div id="e_4"></div><div id="e_5"></div><div id="e_6"></div><div id="e_7"></div>
    <div id="f_1"></div><div id="f_2"></div><div id="f_3"></div><div id="f_4"></div><div id="f_5"></div><div id="f_6"></div><div id="f_7"></div>
</section>
<section id="answer" class="answer">
    <div class="equal">=</div><div id="value">1</div>
</section>
<section class="numpad">
    <!--
    Position of the numpad is divided like a matrix:
     | 1 | 2 | 3 | 4 | 5 |
     | 6 | 7 | 8 | 9 | 0 |
     | + | - | / | * | < |
     -->
    <div class="numpadDiv">
        <div id="one" class="numpadCell numpadItem">1</div><div id="two" class="numpadCell numpadItem">2</div><div id="three" class="numpadCell numpadItem">3</div><div id="four" class="numpadCell numpadItem">4</div><div id="five" class="numpadCell numpadItem">5</div>
        <div id="six" class="numpadCell numpadItem">6</div><div id="" class="numpadCell numpadItem">7</div><div id="eight" class="numpadCell numpadItem">8</div><div id="nine" class="numpadCell numpadItem">9</div><div id="zero" class="numpadCell numpadItem">0</div>
        <div id="plus" class="numpadCell numpadItem">+</div><div id="minus" class="numpadCell numpadItem">-</div><div id="divide" class="numpadCell numpadItem">/</div><div id="multiply" class="numpadCell numpadItem">*</div><div id="backspace" class="numpadCell numpadItem"><</div>
    </div>
    <button class="numpadButton numpadItem">Enter</button>
</section>
<footer class="footer">This page was created by Nahum Kletkin for a college assignment. <br> Copyright Rehan Ahmed - <a href="https://thenumble.app">Numble</a></footer>
<script src="scripts.js"></script>
</body>
</html>