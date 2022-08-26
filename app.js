let columns = document.querySelectorAll('.column');
let allcells = document.querySelectorAll('.cell');
let choice = document.querySelector('.choice');
let pvp = document.querySelector('.pvp');
let arr = [[0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0]];
let move = 0
let body = document.querySelector('body');
let board = document.querySelector('.board');
let menubutton = document.querySelector('.menu')
let pvpchoice = document.querySelector('.pvpchoice')
let startgame = document.querySelector('.startgame')
let playerinput = document.querySelectorAll('.playerinput')
let cpu = document.querySelector('.cpu')
let c4 = document.querySelector('.c4');
let player1 = document.querySelector('.player1')
let color1 = document.querySelector('#color1')
let color = document.querySelectorAll('.color')
let play1cell = document.querySelector('.play1cell')
let play2cell = document.querySelector('.play2cell')
play1cell.style.backgroundColor = 'rgb(0, 0, 163)'
play2cell.style.backgroundColor = 'rgb(157, 0, 0)'
let vs = document.querySelector('.vs')

function highlightwin(){
    
}

function hovertarg(newCell, cells) {
    //clear box shadow from all cells
    
    
    if (newCell.style.backgroundColor === play1cell.style.backgroundColor) {
        for (let i = cells.length - 1; i > - 1; i--) {
            let cellscol = getComputedStyle(cells[i]);
            if (cellscol.backgroundColor != play1cell.style.backgroundColor && cellscol.backgroundColor != play2cell.style.backgroundColor) {
                cells[i].style.boxShadow = "0px 0px 20px 10px " + play1cell.style.backgroundColor;
                break;}
          
            }}
    if (newCell.style.backgroundColor === play2cell.style.backgroundColor) {
        for (let i = cells.length - 1; i > - 1; i--) {
            let cellscol = getComputedStyle(cells[i]);
            if (cellscol.backgroundColor != play1cell.style.backgroundColor && cellscol.backgroundColor != play2cell.style.backgroundColor) {
                cells[i].style.boxShadow = "0px 0px 20px 10px " + play2cell.style.backgroundColor;
                break;}
            
            }}
}


color.forEach(function (colo) {
    colo.addEventListener('click', function () {
        window.style = getComputedStyle(colo);
        //if the id of the colo has a 2 at the end
        if (colo.id.endsWith('2')){
            play2cell.style.backgroundColor = style.backgroundColor;
            return}
        play1cell.style.backgroundColor = style.backgroundColor;
    
       })})
   

    
clearboard = function () {
    move = 0
    arr = [[0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0], [0,0,0,0,0,0]];
    allcells.forEach(function (cell) {
        cell.style.backgroundColor = 'transparent'})}

check = function (newCell, cells) {
 
    
        setTimeout(function () {
            columns.forEach(function (column) {
                column.style.pointerEvents = "all"
            })
    }, 300)
    
    for(let i = arr.length - 1; i > -1; i--) {
        for(let j = arr[i].length; j > -1; j--){
            if (arr[i][j] === 1) {
                if (arr[i][j - 1] === 1 && arr[i][j - 2] === 1 && arr[i][j - 3] === 1) {
                    clearboard();
                    choice.classList.remove('');
                    break;}
                if (arr[i - 1][j] === 1 && arr[i - 2][j] === 1 && arr[i - 3][j] === 1) {
                    clearboard();
                    choice.classList.remove('');
                    break;}
                if (arr[i-1][j-1] === 1 && arr[i-2][j-2] === 1 && arr[i-3][j-3] === 1) {
                    clearboard();
                    choice.classList.remove('');
                    break;}
                    if (arr[i-1][j+1] === 1 && arr[i-2][j+2] === 1 && arr[i-3][j+3] === 1) {
                        clearboard();
                        choice.classList.remove('');
                        break;}}   
            if(arr[i][j] === 2){
                if (arr[i][j - 1] === 2 && arr[i][j - 2] === 2 && arr[i][j - 3] === 2) {
                    clearboard();
                    break;}
                if (arr[i - 1][j] === 2 && arr[i - 2][j] === 2 && arr[i - 3][j] === 2) {
                    clearboard();
                    break;}
                if (arr[i-1][j-1] === 2 && arr[i-2][j-2] === 2 && arr[i-3][j-3] === 2) {
                    clearboard();
                    break;}
                    if (arr[i-1][j+1] === 2 && arr[i-2][j+2] === 2 && arr[i-3][j+3] === 2) {
                        clearboard();
                        choice.classList.remove('');
                        break;}}
                }}
}


    

let hovertarget = function (){
    let cells = this.querySelectorAll('.cell')
    for (let i = cells.length - 1; i > -1; i--) {
        if (cells[i].style.backgroundColor != play1cell.style.backgroundColor  && cells[i].style.backgroundColor != play2cell.style.backgroundColor) {
            return i}
        
        }

        }
           
        


            

let oneplayer = function(data, cells, column, newCell) {
    
    let col = parseInt(data.target.id[6]);
    if (arr[col][0] === 1 || arr[col][0] === 2 ){
        columns.forEach(function (column) {
            column.style.pointerEvents = "all"})
        return
}
    let interval = setInterval(function () {
    for (let i = 0; i < cells.length; i++){
        let target = hovertarget.call(column)
        if (target === i) {

            let row = target
            arr[col][row] = 1
            cells[i].style.backgroundColor = play1cell.style.backgroundColor
            
            console.log(cells[i].style.backgroundColor)
            for (let i = 0; i < target; i++) {
                cells[i].classList.remove('clicked');
                ;}
            clearInterval(interval)
            check(newCell, cells) 
            break;}
        if (!cells[i].classList.contains('clicked')) {
            cells[i].style.backgroundColor = play1cell.style.backgroundColor;
            cells[i].classList.add('clicked');
            setTimeout(function() {
                cells[i].style.backgroundColor = 'transparent';
               
                ;}, 100);
            break;}
        }},150)}
        
let twoplayer = function(data, cells, column, newCell) {
    
    let col = parseInt(data.target.id[6]);
    if (arr[col][0] === 1 || arr[col][0] === 2 ){
        columns.forEach(function (column) {
        column.style.pointerEvents = "all"})
        return
    }
    let interval = setInterval( function () {
        let target = hovertarget.call(column);
        for (let i = 0; i < cells.length; i++) {
            if (target === i) {
                let row = target
                arr[col][row] = 2
                cells[i].style.backgroundColor = play2cell.style.backgroundColor
                
                
    
                for (let i = 0; i < target; i++) {
                    cells[i].classList.remove('clicked')
                    }
                
                clearInterval(interval)
                check(column)
                break;}
        if (!cells[i].classList.contains('clicked')) {
            cells[i].style.backgroundColor = play2cell.style.backgroundColor;
            cells[i].classList.add('clicked');
            setTimeout(function() {
                cells[i].style.backgroundColor = 'transparent';
                
                ;}, 100);
            break;}
        }},150)}

columns.forEach(column => {
    let cells = column.querySelectorAll('.cell');

    let newCell = document.createElement('div');
    newCell.classList.add('outcell')
        column.prepend(newCell);
    column.addEventListener('mouseover', function c (){
        if (choice.classList.contains('choicebottom')){
            if (move % 2 === 0 || move === 0) {
                newCell.style.opacity = "1";
                newCell.style.backgroundColor = play1cell.style.backgroundColor;
                
            }
            if (move % 2 === 1 || move === 1) {
                newCell.style.opacity = "1";
                newCell.style.backgroundColor = play2cell.style.backgroundColor;
                
            }
                hovertarg(newCell, cells)
                    
                    
                }
    });
    column.addEventListener('mouseout', function () {
        newCell.style.opacity = "0";
        newCell.classList.remove('outcellshow2')
        //dont remove the inset box shadow divs

            for (let i = cells.length - 1; i > -1; i--) {
                if(cells[i].style.boxShadow === "inset 0px 0px 10px 5px rgba(0,0,0,0.6)"){
                break;
                }else{
                    cells[i].style.boxShadow = ""
                }
            
            }})  
    column.addEventListener('click', function b (data) {
        //remove box shadow from all cells
        
        columns.forEach(function (column) {
            column.style.pointerEvents = "none"})
            newCell.style.opacity = "0";
        if (move % 2 === 0 || move === 0){
            oneplayer(data, cells, column, newCell)}
        if (move % 2 === 1 || move === 1){
            twoplayer(data, cells, column, newCell)}
        move += 1
        
    
    }
    

        )
})


menubutton.addEventListener('click', function () {

    board.style.boxShadow = ""
    vs.style.opacity = '0'
    startgame.classList.remove('add')
    color.forEach(function (colo) {
        colo.classList.remove('colorshow')
        })
  
    if (choice.classList.contains('choicebottom')){
    clearboard()
    columns.forEach(function (column) {
        column.style.pointerEvents = "none"})
        board.style.border = 'none';
            choice.classList.remove('c4stretch')
            choice.classList.remove('choicebottom')
            columns.forEach(function (column) {
                column.classList.remove('show')
                pvp.classList.remove('remove')
                cpu.classList.remove('remove')
                menubutton.classList.remove('add') 

                
            })
    }else if (!choice.classList.contains('choicebottom')){ 
        choice.classList.add('c4stretch')
       
            pvpchoice.classList.remove('pvptransition')
            choice.classList.remove('c4stretch')
            
            columns.forEach(function (column) {
                column.classList.remove('show')
                pvp.classList.remove('remove')
                cpu.classList.remove('remove')
                menubutton.classList.remove('add') 

                
    })
}})
    // on change
    pvp.addEventListener('click', function (event) {
   
        startgame.classList.add('add')
        vs.style.opacity = '1'
        pvpchoice.classList.add('pvptransition')
        choice.classList.add('c4stretch')
        pvp.classList.add('remove')
        cpu.classList.add('remove')
        menubutton.classList.add('add')
        startgame.classList.add('show')
        //set color1 class to show
        setTimeout(function () {
            color.forEach(function (colo) {
                colo.classList.add('colorshow')
                })
        }, 200)
        pvpchoice.style.cursor = 'default'}
     
        
    )
        
       
        
        
   
        
           


startgame.addEventListener('click', function () {
    board.style.boxShadow = "0px 0px 3px 0px black"
    //change board top border


    vs.style.opacity = '0'
    startgame.classList.remove('add')
    color.forEach(function (colo) {
        colo.classList.remove('colorshow')
        })
    
            pvpchoice.classList.remove('pvptransition')
            choice.classList.remove('c4stretch')
            choice.classList.add('choicebottom')
            
            
           
            columns.forEach(function (column) {
                column.classList.add('show')
                body.style.pointerEvents = "all"
                column.style.pointerEvents = "all"
                
            })})
        
    //add event listener to each color class div, and save color in a variable
   



            
[65, 66, 67, 68, 69, 70, 71, 72
,73, 74, 75, 76, 77, 78, 79, 80
,81, 82, 83, 84, 85, 86, 87, 88
,89, 90]