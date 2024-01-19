let gameArea = document.getElementById("checkerArea")
let whitePieces = document.getElementsByClassName("whitePiece")
let blackAreas = document.querySelectorAll(".black")
let blackPieces = document.getElementsByClassName("black")


let board = [
    ["", "O", "", "O", "", "O", "", "O"],
    ["O", "", "O", "", "O", "", "O", ""],
    ["", "O", "", "O", "", "O", "", "O"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["X", "", "X", "", "X", "", "X", ""],
    ["", "X", "", "X", "", "X", "", "X"],
    ["X", "", "X", "", "X", "", "X", ""]
]

function move(player, rx, ry, x, y) {
    board[rx][ry] = ""
    board[x][y] = "X"
    // board[x][y] = "a"
}

function legalMove(player, rx, ry, x, y, i) {
    gameArea.innerHTML = ""
    board[rx][ry] = ""
    board[x][y] = "X"
    Draw()
    console.log(board);
    console.log(i);
}



function createBlack(id) {
    let blackBoard = document.createElement("div")
    blackBoard.classList = "black"
    blackBoard.id = id
    blackBoard.setAttribute("corX", 3)
    return blackBoard;
}


function createWhite() {
    let whiteBoard = document.createElement("div")
    whiteBoard.className = "white"
    whiteBoard.attributes = "corX"
    return whiteBoard;
}


function whitePiece(id) {
    let pieace = document.createElement("div")
    pieace.classList = "whitePiece"
    pieace.draggable = true
    pieace.id = id
    let pieaceImg = document.createElement("img")
    pieaceImg.src = "../img/button-white.png"
    pieaceImg.draggable = false
    pieace.append(pieaceImg)
    return pieace;
}


function blackPiece() {
    let pieace = document.createElement("div")
    pieace.className = "blackPiece"
    let pieaceImg = document.createElement("img")
    pieaceImg.src = "../img/button-black.png"
    pieace.append(pieaceImg)
    return pieace;
}





function Draw() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if ((i + j) % 2 == 0) {
                let white = createWhite()
                gameArea.append(white)
            } else {
                let cor = `b${i}${j}`
                let black = createBlack(cor)
                if (board[i][j] == "X") {
                    let coordinate = `${i}${j}` // 0 + 1 = 1
                    black.append(whitePiece(coordinate))
                } else if (board[i][j] == "O") {
                    black.append(blackPiece())
                }
                gameArea.append(black)
            }
        }
    }


    for (let index = 0; index < blackPieces.length; index++) {
        blackPieces[index].addEventListener("drag", function (e) {
            e.preventDefault()
            console.log(index);

        })
    }


    for (let index = 0; index < blackPieces.length; index++) {
        blackPieces[index].addEventListener("dragover", function (e) {
            e.preventDefault()
        })
    }

    for (let index = 0; index < whitePieces.length; index++) {
        whitePieces[index].addEventListener("dragstart", function (e) {
            e.dataTransfer.setData("a", e.target.id);
        })
    }

    for (let index = 0; index < blackPieces.length; index++) {
        blackPieces[index].addEventListener("drop", function (e) {
            e.preventDefault()
            var data = e.dataTransfer.getData("a");
            let findCoordinate = e.target.id.split("")
            let removeCoordinate = data.split("")
            e.target.append(document.getElementById(data))
            console.log("__________________");
            console.log(removeCoordinate[0]);
            console.log(removeCoordinate[1]);
            console.log("__________________");
            legalMove(true, removeCoordinate[0], removeCoordinate[1], findCoordinate[1], findCoordinate[2],index)
            // console.log(board);

        })
    }
}
Draw()