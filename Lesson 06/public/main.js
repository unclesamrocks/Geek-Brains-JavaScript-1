/* 
1) Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. Доска должна быть верно разлинована на черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
*/
const insertAfter = (elem, afterElem) =>{
	afterElem.parentNode.insertBefore(elem, afterElem.nextSibling);
};

const description1 = document.getElementById('description');
const chessWrap = document.createElement('div'); // making board wrapper 
chessWrap.setAttribute('id', 'chessWrap'); // with id = chessDiv
insertAfter(chessWrap, description1);

/* creating the child div for board: */
const chessWrapLink = document.getElementById('chessWrap'); //link to prev child
const mainChessBoard = document.createElement('div'); // creating wrapper for board
mainChessBoard.setAttribute('id', 'mainChessBoard'); // giving wrapper ID
chessWrapLink.appendChild(mainChessBoard); // appending to prev child

/* function to give proper color to div */
const backColor = (num) =>{
	if(parseInt(((num / 8) + num) % 2) === 0){
		return '#ababab';
	} else {
		return 'white';
	}
}

/* cycle to put div elements inside board */
const parentDiv = document.getElementById('mainChessBoard'); // linking to board wrap
for (let i=0; i<64; i++){
    let newBlock = document.createElement('div'); // creating element
    newBlock.classList.add('chessBlock'); // adding class to each element
    newBlock.style.backgroundColor = backColor(i); // backCol call to function ()
    parentDiv.appendChild(newBlock); // appending to parent
}
	
/* chessWrapLink - link to chess wrap */
// creting rows for board:
const rowDiv1 = document.createElement('div');
rowDiv1.setAttribute('class', 'chessRow');
rowDiv1.setAttribute('id', 'chessRow'); // id - so we can append children

const rowDiv2 = document.createElement('div');
rowDiv2.setAttribute('class', 'chessRow');
rowDiv2.setAttribute('id', 'chessRow2');
// putting rows before and after board:
chessWrapLink.insertBefore(rowDiv1, parentDiv);
chessWrapLink.appendChild(rowDiv2);
// creating cols for board:
const colDiv1 = document.createElement('div');
colDiv1.setAttribute('class', 'chessCol');
colDiv1.setAttribute('id', 'colDiv1');
// second col
const colDiv2 = document.createElement('div');
colDiv2.setAttribute('class', 'chessCol');
colDiv2.setAttribute('id', 'colDiv2');
// puttin left and right of the board
chessWrapLink.insertBefore(colDiv1, parentDiv);
chessWrapLink.insertBefore(colDiv2, rowDiv2);

/* now we need to put markings */
const numbers = [1,2,3,4,5,6,7,8];
const markers = ['','A','B','C','D','E','F','G','H',''];
/* ROWS */
for(let i=0; i<markers.length;i++){
	/* row 1 */
	let markerRow = document.getElementById('chessRow'); // linking row
	let markerBlock = document.createElement('div'); // creating child div
	markerBlock.setAttribute('class', 'chessMarker'); // set class
	markerBlock.innerHTML = markers[i]; // insert proper value
	markerRow.appendChild(markerBlock); // append element to parent
	/* row 2 */
	let markerRow2 = document.getElementById('chessRow2');
	let markerBlock2 = document.createElement('div');
	markerBlock2.setAttribute('class', 'chessMarker');
	markerBlock2.innerHTML = markers[i];
	markerRow2.appendChild(markerBlock2);
}
/* COLS */
for(let i=numbers.length-1;i>=0;i--){
	/* COL 1 */
	let numberCol = document.getElementById('colDiv1');
	let colBlock = document.createElement('div');
	colBlock.setAttribute('class', 'chessNumber');
	colBlock.innerHTML = numbers[i];
	numberCol.appendChild(colBlock);
	/* COL 2 */
	let numberCol2 = document.getElementById('colDiv2');
	let colBlock2 = document.createElement('div');
	colBlock2.setAttribute('class', 'chessNumber');
	colBlock2.innerHTML = numbers[i];
	numberCol2.appendChild(colBlock2);
}
/* Getting chessboards elements */
let chessSquares = document.getElementsByClassName('chessBlock');
/* chess pieces massives*/
const chessPiecesUp = ['Л', 'К', 'Ф', 'Д', 'Кр', 'Ф', 'К', 'Л', 'П', 'П', 'П', 'П', 'П', 'П', 'П', 'П'];
const chessPiecesDown = ['П', 'П', 'П', 'П', 'П', 'П', 'П', 'П', 'Л', 'К', 'Ф', 'Д', 'Кр', 'Ф', 'К', 'Л'];
/* inserting pieces to places UP */
let q = 0;
for (keys in chessPiecesUp){
	chessSquares[q].innerHTML = chessPiecesUp[keys];
	q++;
}
/* inserting pieces to places Down */
q = 48;
for (keys in chessPiecesDown){
	chessSquares[q].innerHTML = chessPiecesDown[keys];
	q++;
}
/* object with pics links */
const chessPics = {
	'Л': {
		urlW: './public/Alpha2/WhiteRook.svg',
		urlB: './public/Alpha2/BlackRook.svg'
	},
	'К': {
		urlW: './public/Alpha2/WhiteKnight.svg',
		urlB: './public/Alpha2/BlackKnight.svg'
	},
	'Ф': {
		urlW: './public/Alpha2/WhiteBishop.svg',
		urlB: './public/Alpha2/BlackBishop.svg'
	},
	'Д': {
		urlW: './public/Alpha2/WhiteQueen.svg',
		urlB: './public/Alpha2/BlackQueen.svg'
	}, 
	'Кр': {
		urlW: './public/Alpha2/WhiteKing.svg',
		urlB: './public/Alpha2/BlackKing.svg'
	}, 
	'П': {
		urlW: './public/Alpha2/WhitePawn.svg',
		urlB: './public/Alpha2/BlackPawn.svg'
	}
}
/* passing links to respective squares */

// chessSquares[1].innerHTML = '<img src="./public/chessPieces.png" />';
const imgTagBeg = '<img src="';
const imgTagEnd = '" />';
/* UP row */
for(let i=0; i<16; i++){
	for(keys in chessPics){
		if(keys === chessSquares[i].innerHTML){
			chessSquares[i].innerHTML = imgTagBeg + chessPics[keys].urlW + imgTagEnd;
		}
	}
}
/* down row */
for(let i=48; i<chessSquares.length; i++){
	for(keys in chessPics){
		if(keys === chessSquares[i].innerHTML){
			chessSquares[i].innerHTML = imgTagBeg + chessPics[keys].urlB + imgTagEnd;
		}
	}
}