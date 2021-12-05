var board,flag,choosenChess;
	var endGame;
	var userTurn;
	var colorChange = "#FF9933";
	var colorTarget = "red";
	var timeOfTurn = "15";
	var result;
	var level=4;
	var colorChess = 1;
	var isPromotion;
	var promotionPos = false;
	var randomStep;
	var count;
	
	function startGame(){
		randomStep = [];
		endGame = false;
		userTurn = true;
		isPromotion=false;
		count = 1;
		choosenChess = {
			row:0,
			col:0
		};
		board =	[
				[0,0,0,0,0,0,0,0,0],
				[0,-1,-1,-1,-1,-1,-1,-1,-1],
				[0,-1,-1,-1,-1,-1,-1,-1,-1],
				[0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0],
				[0,1,1,1,1,1,1,1,1],
				[0,1,1,1,1,1,1,1,1]
				];
						 
		flag =	[
				[0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0],
				[0,0,0,0,0,0,0,0,0],
				];
				 
		$('#chessboard').html("");
		$('#clock').html(timeOfTurn);
		$('#nameOfGame').html("Đấu trường thiên hạ");
		$('#clock').css({'font-size':'300%'});
		let whitecell = "<div class='cell whitecell btn'></div>";
		let blackcell = "<div class='cell blackcell btn'></div>";
		for(let j = 1; j < 9; ++j){
			let row = "<div class='row'>";
			if(j%2==1){
				if(j==7){
					for(let i = 1; i < 9; ++i){
						if(i%2==0) row += "<div id='" + j + i + "'class='cell blackcell btn'><i class='white-chess fas fa-chess-pawn-alt'></i></div>";
						else row += "<div id='" + j + i + "'class='cell whitecell btn'><i class='white-chess fas fa-chess-pawn-alt'></i></div>";
					}
				}
				else{
					if(j==1){
						for(let i = 1; i < 9; ++i){
							if(i==1) row += "<div id='" + j + i + "'class='cell whitecell btn'><i style='color:black' class='black-chess fas fa-chess-rook-alt'></i></div>";
							if(i==2) row += "<div id='" + j + i + "'class='cell blackcell btn'><i style='color:black' class='black-chess fas fa-chess-knight-alt'></i></div>";
							if(i==3) row += "<div id='" + j + i + "'class='cell whitecell btn'><i style='color:black' class='black-chess fas fa-chess-bishop-alt'></i></div>";
							if(i==4) row += "<div id='" + j + i + "'class='cell blackcell btn'><i style='color:black' class='black-chess fas fa-chess-queen-alt'></i></div>";
							if(i==5) row += "<div id='" + j + i + "'class='cell whitecell btn'><i style='color:black' class='black-chess fas fa-chess-king-alt'></i></div>";
							if(i==6) row += "<div id='" + j + i + "'class='cell blackcell btn'><i style='color:black' class='black-chess fas fa-chess-bishop-alt'></i></div>";
							if(i==7) row += "<div id='" + j + i + "'class='cell whitecell btn'><i style='color:black' class='black-chess fas fa-chess-knight-alt'></i></div>";
							if(i==8) row += "<div id='" + j + i + "'class='cell blackcell btn'><i style='color:black' class='black-chess fas fa-chess-rook-alt'></i></div>";
						}
					}
					else
					for(let i = 1; i < 9; ++i){
						if(i%2==0) row += "<div id='" + j + i + "'class='cell blackcell btn'></div>";
						else row += "<div id='" + j + i + "'class='cell whitecell btn'></div>";
					}
				}
			}
			else{
				if(j==2){
					for(let i = 1; i < 9; ++i){
						if(i%2==1) row += "<div id='" + j + i + "'class='cell blackcell btn'><i style='color:black' class='black-chess fas fa-chess-pawn-alt'></i></div>";
						else row += "<div id='" + j + i + "'class='cell whitecell btn'><i style='color:black' class='black-chess fas fa-chess-pawn-alt'></i></div>";
					}
				}
				else{
					if(j==8){
						for(let i = 1; i < 9; ++i){
							if(i==1) row += "<div id='" + j + i + "'class='cell blackcell btn'><i class='white-chess fas fa-chess-rook-alt'></i></div>";
							if(i==2) row += "<div id='" + j + i + "'class='cell whitecell btn'><i class='white-chess fas fa-chess-knight-alt'></i></div>";
							if(i==3) row += "<div id='" + j + i + "'class='cell blackcell btn'><i class='white-chess fas fa-chess-bishop-alt'></i></div>";
							if(i==4) row += "<div id='" + j + i + "'class='cell whitecell btn'><i class='white-chess fas fa-chess-queen-alt'></i></div>";
							if(i==5) row += "<div id='" + j + i + "'class='cell blackcell btn'><i class='white-chess fas fa-chess-king-alt'></i></div>";
							if(i==6) row += "<div id='" + j + i + "'class='cell whitecell btn'><i class='white-chess fas fa-chess-bishop-alt'></i></div>";
							if(i==7) row += "<div id='" + j + i + "'class='cell blackcell btn'><i class='white-chess fas fa-chess-knight-alt'></i></div>";
							if(i==8) row += "<div id='" + j + i + "'class='cell whitecell btn'><i class='white-chess fas fa-chess-rook-alt'></i></div>";
						}
					}
					else
					for(let i = 1; i < 9; ++i){
						if(i%2==1) row += "<div id='" + j + i + "'class='cell blackcell btn'></div>";
						else row += "<div id='" + j + i + "'class='cell whitecell btn'></div>";
					}
				}
			}
			row += "</div>";
			$('#chessboard').append(row);
		}
	}
	
	function pawnMove(row,col){
		let pos = {row, col};
		let newpos;
		let r = row - 1;
		let c = col;
		if(board[r][c]==0) {
			flag[r][c]=1;
			$('#'+r+c).css({'background-color':colorChange});
			let newpos = {row:r, col: c};
			let sol = {
				pos,
				newpos,
				colorChess
			};
			randomStep.push(sol);
		}
		if(row==7&&board[row-2][col]==0){
			flag[row-2][col]=1;
			let rtemp = row - 2;
			$('#'+rtemp+c).css({'background-color':colorChange});
			let newpos = {row:row-2, col: col};
			let sol = {
				pos,
				newpos,
				colorChess
			};
			randomStep.push(sol);
		}
		if(col!=1) {
			c = col-1;
			if(board[r][c]==-1) {
				flag[r][c]=1;
				$('#'+r+c).css({'background-color':colorTarget});
				let newpos = {row:r, col: c};
				let sol = {
					pos,
					newpos,
					colorChess
				};
				randomStep.push(sol);
			}
		}
		
		if(col!=8){
			c = col+1;
			if(board[r][c]==-1) {
				flag[r][c]=1;
				$('#'+r+c).css({'background-color':colorTarget});
				let newpos = {row:r, col: c};
				let sol = {
					pos,
					newpos,
					colorChess
				};
				randomStep.push(sol);
			}
		}
			
	}
	
	function rookMove(row,col){
		let pos = {row, col};
		let r = row;
		let c = col-1;
		while(c>0&&board[r][c]==0){
			flag[r][c]=1;
			$('#'+r+c).css({'background-color':colorChange});
			let newpos = {row:r, col: c};
			let sol = {
				pos,
				newpos,
				colorChess
			};
			randomStep.push(sol);
			--c;
		}
		if(c>0&&board[r][c]==-1){
			flag[r][c]=1;
			$('#'+r+c).css({'background-color':colorTarget});
			let newpos = {row:r, col: c};
			let sol = {
				pos,
				newpos,
				colorChess
			};
			randomStep.push(sol);
		}
		
		c = col+1;
		while(c<9&&board[r][c]==0){
			flag[r][c]=1;
			$('#'+r+c).css({'background-color':colorChange});
			let newpos = {row:r, col: c};
			let sol = {
				pos,
				newpos,
				colorChess
			};
			randomStep.push(sol);
			++c;
		}
		if(c<9&&board[r][c]==-1){
			flag[r][c]=1;
			$('#'+r+c).css({'background-color':colorTarget});
			let newpos = {row:r, col: c};
			let sol = {
				pos,
				newpos,
				colorChess
			};
			randomStep.push(sol);
		}
		
		r = row-1;
		c = col;
		while(r>0&&board[r][c]==0){
			flag[r][c]=1;
			$('#'+r+c).css({'background-color':colorChange});
			let newpos = {row:r, col: c};
			let sol = {
				pos,
				newpos,
				colorChess
			};
			randomStep.push(sol);
			--r;
		}
		if(r>0&&board[r][c]==-1){
			flag[r][c]=1;
			$('#'+r+c).css({'background-color':colorTarget});
			let newpos = {row:r, col: c};
			let sol = {
				pos,
				newpos,
				colorChess
			};
			randomStep.push(sol);
		}
		
		r = row+1;
		while(r<9&&board[r][c]==0){
			flag[r][c]=1;
			$('#'+r+c).css({'background-color':colorChange});
			let newpos = {row:r, col: c};
			let sol = {
				pos,
				newpos,
				colorChess
			};
			randomStep.push(sol);
			++r;
		}
		if(r<9&&board[r][c]==-1){
			flag[r][c]=1;
			$('#'+r+c).css({'background-color':colorTarget});
			let newpos = {row:r, col: c};
			let sol = {
				pos,
				newpos,
				colorChess
			};
			randomStep.push(sol);
		}
	}
	
	function knightMove(row,col){
		let pos = {row, col};
		let rowArray = [row-2,row-2,row-1,row-1,row+1,row+1,row+2,row+2];
		let colArray = [col-1,col+1,col-2,col+2,col-2,col+2,col-1,col+1];
		for(let i = 0; i < 8; ++i){
			let r = rowArray[i];
			let c = colArray[i];
			if(r>0&&r<9&&c>0&&c<9){
				if(board[r][c]==-1){
					flag[r][c]=1;
					$('#'+r+c).css({'background-color':colorTarget});
					let newpos = {row:r, col: c};
					let sol = {
						pos,
						newpos,
						colorChess
					};
					randomStep.push(sol);
				}
				else if(board[r][c]==0){
					flag[r][c]=1;
					$('#'+r+c).css({'background-color':colorChange});
					let newpos = {row:r, col: c};
					let sol = {
						pos,
						newpos,
						colorChess
					};
					randomStep.push(sol);
				}
			}
		}
	}
	
	function bishopMove(row,col){
		let pos = {row, col};
		let r = row-1;
		let c = col-1;
		while(c>0&&r>0&&board[r][c]==0){
			flag[r][c]=1;
			$('#'+r+c).css({'background-color':colorChange});
			let newpos = {row:r, col: c};
			let sol = {
				pos,
				newpos,
				colorChess
			};
			randomStep.push(sol);
			--c;
			--r;
		}
		if(c>0&&r>0&&board[r][c]==-1){
			flag[r][c]=1;
			$('#'+r+c).css({'background-color':colorTarget});
			let newpos = {row:r, col: c};
			let sol = {
				pos,
				newpos,
				colorChess
			};
			randomStep.push(sol);
		}
		
		r = row+1;
		c = col+1;
		while(c<9&&r<9&&board[r][c]==0){
			flag[r][c]=1;
			$('#'+r+c).css({'background-color':colorChange});
			let newpos = {row:r, col: c};
			let sol = {
				pos,
				newpos,
				colorChess
			};
			randomStep.push(sol);
			++c;
			++r;
		}
		if(c<9&&r<9&&board[r][c]==-1){
			flag[r][c]=1;
			$('#'+r+c).css({'background-color':colorTarget});
			let newpos = {row:r, col: c};
			let sol = {
				pos,
				newpos,
				colorChess
			};
			randomStep.push(sol);
		}
		
		r = row-1;
		c = col+1;
		while(r>0&&c<9&&board[r][c]==0){
			flag[r][c]=1;
			$('#'+r+c).css({'background-color':colorChange});
			let newpos = {row:r, col: c};
			let sol = {
				pos,
				newpos,
				colorChess
			};
			randomStep.push(sol);
			--r;
			++c;
		}
		if(r>0&&c<9&&board[r][c]==-1){
			flag[r][c]=1;
			$('#'+r+c).css({'background-color':colorTarget});
			let newpos = {row:r, col: c};
			let sol = {
				pos,
				newpos,
				colorChess
			};
			randomStep.push(sol);
		}
		
		r = row+1;
		c =col-1;
		while(r<9&&c>0&&board[r][c]==0){
			flag[r][c]=1;
			$('#'+r+c).css({'background-color':colorChange});
			let newpos = {row:r, col: c};
			let sol = {
				pos,
				newpos,
				colorChess
			};
			randomStep.push(sol);
			--c;
			++r;
		}
		if(r<9&&c>0&&board[r][c]==-1){
			flag[r][c]=1;
			$('#'+r+c).css({'background-color':colorTarget});
			let newpos = {row:r, col: c};
			let sol = {
				pos,
				newpos,
				colorChess
			};
			randomStep.push(sol);
		}
	}
	
	function kingMove(row,col){
		let pos = {row, col};
		let rowArray = [row-1,row+1,row,row,row-1,row-1,row+1,row+1];
		let colArray = [col,col,col-1,col+1,col-1,col+1,col-1,col+1];
		for(let i = 0; i < 8; ++i){
			let r = rowArray[i];
			let c = colArray[i];
			if(r>0&&r<9&&c>0&&c<9){
				if(board[r][c]==-1){
					flag[r][c]=1;
					$('#'+r+c).css({'background-color':colorTarget});
					let newpos = {row:r, col: c};
					let sol = {
						pos,
						newpos,
						colorChess
					};
					randomStep.push(sol);
				}
				else if(board[r][c]==0){
					flag[r][c]=1;
					$('#'+r+c).css({'background-color':colorChange});
					let newpos = {row:r, col: c};
					let sol = {
						pos,
						newpos,
						colorChess
					};
					randomStep.push(sol);
				}
			}
		}
	}
	
	//reset previous state board
	function resetPrevState(){
		for(let i = 1; i < 9; ++i){
			for(let j = 1; j < 9; ++j){
				flag[i][j] = 0;
				let sum = i+j;
				let id = "#"+i+j;
				if(sum%2==0) $(id).css({'background-color':'#FAEBD7'});
				else $(id).css({'background-color':'#20B2AA'});
			}
		}
	}
	
	// promote pawn
	
	function promotePawn(){
		isPromotion = true;
		let promotedChess="<div id='promotedInterface' style='display: flex; flex-direction:column; margin-left: 50px;'><button class='promotedChess btn btn-outline-warning'><i class='white-chess fas fa-chess-queen-alt'></i></button>";
		promotedChess += "<button class='promotedChess btn btn-outline-warning'><i class='white-chess fas fa-chess-rook-alt'></i></button>";
		promotedChess += "<button class='promotedChess btn btn-outline-warning'><i class='white-chess fas fa-chess-knight-alt'></i></button>";
		promotedChess += "<button class='promotedChess btn btn-outline-warning'><i class='white-chess fas fa-chess-bishop-alt'></i></button></div>";
		$('#spacegame').append(promotedChess);
		$('#clock').html("Thăng cấp tốt");
		$('#clock').parent.css({'background-color':'none'});
	}
	
	//move chess
	
	function move(sol){
		resetPrevState();
		board[sol.newpos.row][sol.newpos.col] = sol.colorChess;
		board[sol.pos.row][sol.pos.col] = 0;
		let chess = $("#"+sol.pos.row+sol.pos.col).html();
		$("#"+sol.pos.row+sol.pos.col).html("");
		let newposChess = $("#"+sol.newpos.row+sol.newpos.col).html();
		if(newposChess.includes('king')) {
			if(sol.colorChess==1) result = "Bạn thắng";
			else result = "Bạn thua";
			endGame = true;
		}
		$("#"+sol.newpos.row+sol.newpos.col).html(chess);
		if(chess.includes('pawn')){
			if(sol.newpos.row==1||sol.newpos.row==8){
				if(sol.colorChess==colorChess){
					promotionPos = sol.newpos;
					promotePawn();
				}
				else $("#"+sol.newpos.row+sol.newpos.col).html("<i style='color:black' class='black-chess fas fa-chess-queen-alt'></i>");
			}
		}
	}
	
	
	// change input data
	
	var changeCol = ['a','b','c','d','e','f','g','h'];
	
	function changeInputBoard(){
		let changedBoard = [];
		for(let i = 1; i < 9; ++i){
			for(let j = 1; j < 9; ++j){
				if(board[i][j]!=0){
					let position = changeCol[j-1] + (9-i);
					let chess = $('#'+i+j).html();
					let piece,color;
					if(chess.includes('pawn')) piece = "p";
					if(chess.includes('rook')) piece = "r";
					if(chess.includes('knight')) piece = "n";
					if(chess.includes('bishop')) piece = "b";
					if(chess.includes('queen')) piece = "q";
					if(chess.includes('king')) piece = "k";
					if(board[i][j]==1) color='w';
					else color='b';
					changedBoard.push({
						piece,
						position,
						color
					})
				}
			}
		}
		return changedBoard;
	}
	
	// change ouput
	
	function changeOutput(move,colorChess){
		let start = move.start;
		let stop = move.stop;
		let posrow = 9 - parseInt(start.charAt(1));
		let poscol = changeCol.indexOf(start.charAt(0)) + 1;
		let pos = {
			row: posrow,
			col: poscol
		}
		let newposrow = 9 - parseInt(stop.charAt(1));
		let newposcol = changeCol.indexOf(stop.charAt(0)) + 1;
		let newpos = {
			row: newposrow,
			col: newposcol
		}
		
		let sol = {
			pos,
			newpos,
			colorChess
		}
		
		return sol;
	}
	
	
	// random move
	
	function randomMove(){
		for(let i = 1; i < 9; ++i){
			for(let j = 1; j < 9; ++j){
				if(board[i][j]==colorChess){
					let chess = $('#' +i+j).html();
					if(chess.includes('pawn')) pawnMove(i,j);	
					if(chess.includes('rook')) rookMove(i,j);
					if(chess.includes('knight')) knightMove(i,j);
					if(chess.includes('bishop')) bishopMove(i,j);
					if(chess.includes('queen')){
						rookMove(i,j);
						bishopMove(i,j);
					}
					if(chess.includes('king')) kingMove(i,j);
				}
			}
		}
		let n = randomStep.length;
		let rnd = Math.floor(Math.random() * (n-1));
		move(randomStep[rnd]);
	}
	
	
	
	// machine
	
	
	function machineMove(board, color) {
		if(endGame==true||isPromotion==true) return;
		var dung;
		var startTime = Date.now();
		var clock = 15;

		var banco=['a1','b1','c1','d1','e1','f1','g1','h1',
				   'a2','b2','c2','d2','e2','f2','g2','h2',
				   'a3','b3','c3','d3','e3','f3','g3','h3',
				   'a4','b4','c4','d4','e4','f4','g4','h4',
				   'a5','b5','c5','d5','e5','f5','g5','h5',
				   'a6','b6','c6','d6','e6','f6','g6','h6',
				   'a7','b7','c7','d7','e7','f7','g7','h7',
				   'a8','b8','c8','d8','e8','f8','g8','h8'];

		var trang_piece = new Array();
		var trang_position=new Array();
		var den_piece = new Array();
		var den_position= new Array();



		// tách riêng cờ trắng cờ đen sang 2 mảng
		for( var i=0;i<board.length;i++){
		if(board[i].color==='w') {
		trang_piece.push(board[i].piece);
		trang_position.push(board[i].position);
		}

		else {
		den_piece.push(board[i].piece);
		den_position.push(board[i].position);
		}
		}

		// Tạo bàn cờ cho biết vị trí nào có cờ, cờ trắng=1, cờ đen=-1

		var bancoSo=[0,0,0,0,0,0,0,0,
					 0,0,0,0,0,0,0,0,
					 0,0,0,0,0,0,0,0,
					 0,0,0,0,0,0,0,0,
					 0,0,0,0,0,0,0,0,
					 0,0,0,0,0,0,0,0,
					 0,0,0,0,0,0,0,0,
					 0,0,0,0,0,0,0,0];

		for(var i=0;i<trang_position.length;i++) bancoSo[banco.indexOf(trang_position[i])]=1;
		for(var i=0;i<den_position.length;i++) bancoSo[banco.indexOf(den_position[i])]=-1;


		// Vị trí tăng điểm số của các quân

		var diemMa  =  [-50,-40,-30,-30,-30,-30,-40,-50,
			   -40,-20,  0,  0,  0,  0,-20,-40,
			   -30,  0, 10, 15, 15, 10,  0,-30,
			   -30,  5, 15, 20, 20, 15,  5,-30,
			   -30,  0, 15, 20, 20, 15,  0,-30,
			   -30,  5, 10, 15, 15, 10,  5,-30,
			   -40,-20,  0,  5,  5,  0,-20,-40,
			   -50,-40,-30,-30,-30,-30,-40,-50];
			   
		var diemTinh=  [-20,-10,-10,-10,-10,-10,-10,-20,
				-10,  0,  0,  0,  0,  0,  0,-10,
				-10,  0,  5, 10, 10,  5,  0,-10,
				-10,  5,  5, 10, 10,  5,  5,-10,
				-10,  0, 10, 10, 10, 10,  0,-10,
				-10, 10, 10, 10, 10, 10, 10,-10,
				-10,  5,  0,  0,  0,  0,  5,-10,
				-20,-10,-10,-10,-10,-10,-10,-20];
				
		var diemXe   = [  0,  0,  0,  0,  0,  0,  0,  0,
				  5, 10, 10, 10, 10, 10, 10,  5,
				 -5,  0,  0,  0,  0,  0,  0, -5,
				 -5,  0,  0,  0,  0,  0,  0, -5,
				 -5,  0,  0,  0,  0,  0,  0, -5,
				 -5,  0,  0,  0,  0,  0,  0, -5,
				 -5,  0,  0,  0,  0,  0,  0, -5,
				  0,  0,  0,  5,  5,  0,  0,  0];
				  
		var diemHau  = [-20,-10,-10, -5, -5,-10,-10,-20,
				-10,  0,  0,  0,  0,  0,  0,-10,
				-10,  0,  5,  5,  5,  5,  0,-10,
				 -5,  0,  5,  5,  5,  5,  0, -5,
				  0,  0,  5,  5,  5,  5,  0, -5,
				-10,  5,  5,  5,  5,  5,  0,-10,
				-10,  0,  5,  0,  0,  0,  0,-10,
				-20,-10,-10, -5, -5,-10,-10,-20];
				
		var diemVua= [-30,-40,-40,-50,-50,-40,-40,-30,
				-30,-40,-40,-50,-50,-40,-40,-30,
				-30,-40,-40,-50,-50,-40,-40,-30,
				-30,-40,-40,-50,-50,-40,-40,-30,
				-20,-30,-30,-40,-40,-30,-30,-20,
				-10,-20,-20,-20,-20,-20,-20,-10,
				 20, 20,  0,  0,  0,  0, 20, 20,
				 20, 30, 10,  0,  0, 10, 30, 20];
				 
		var diemTot =  [  0,  0,  0,  0,  0,  0,  0,  0,
				 50, 50, 50, 50, 50, 50, 50, 50,
				 10, 10, 20, 30, 30, 20, 10, 10,
				  5,  5, 10, 25, 25, 10,  5,  5,
				  0,  0,  0, 20, 20,  0,  0,  0,
				  5, -5,-10,  0,  0,-10, -5,  5,
				  5, 10, 10,-20,-20, 10, 10,  5,
				  0,  0,  0,  0,  0,  0,  0,  0];
				  
		// Hàm tính điểm cho từng quân cờ			  
				  
		var diem=function tinhDiem(quanco){
		var qc=quanco.piece;
		var vt=banco.indexOf(quanco.position);
		var vt2=63-vt;
		if(quanco.color==='w'){
			if(qc==='p'){
			   if(vt>=56) return 900 + diemHau[vt2];
			   else       return 100 + diemTot[vt2];
			   }
			if(qc==='n') return 320 + diemMa[vt2];
			if(qc==='b') return 330 + diemTinh[vt2];
			if(qc==='r') return 500 + diemXe[vt2];
			if(qc==='q') return 900 + diemHau[vt2];
			if(qc==='k'){
				if(color==='w'){
				   return 9080 + diemVua[vt2];
				   }
				else return 9000 + diemVua[vt2];
			}
			
		}
			
		else{
			if(qc==='p'){
			   if(vt<=7) return 900 + diemHau[vt];
			   else      return 100 + diemTot[vt];
			   }
			if(qc==='n') return 320 + diemMa[vt];
			if(qc==='b') return 330 + diemTinh[vt];
			if(qc==='r') return 500 + diemXe[vt];
			if(qc==='q') return 900 + diemHau[vt];
			if(qc==='k'){
				if(color==='b'){
					 return 9080+ diemVua[vt];
					 }
				else return 9000 + diemVua[vt];
			}
			
		}
		}

		// Hàm tính điểm thu được sau khi di duyển cờ

		var diemtrangtang=function diemTrangTang(vitridau,vitrisau,bancoSo,trang_piece,trang_position,den_piece,den_position){
			var qc=trang_piece[trang_position.indexOf(banco[vitridau])];
			var diemsocoden=0;
			var quancotranglucdau={piece:qc,position:banco[vitridau],color:'w'};
			if(bancoSo[vitrisau]===-1){
			var quancoden={piece:den_piece[den_position.indexOf(banco[vitrisau])],position:banco[vitrisau],color:'b'}; 
			diemsocoden=diem(quancoden);
			}

			var quancotranglucsau={piece:qc,position:banco[vitrisau],color:'w'};	

			var diemso=diemsocoden+diem(quancotranglucsau)-diem(quancotranglucdau);

			return diemso;
		}


		var diemdentang=function diemDenTang(vitridau,vitrisau,bancoSo,trang_piece,trang_position,den_piece,den_position){
			var qc=den_piece[den_position.indexOf(banco[vitridau])];
			var diemsocotrang=0;
			var quancodenlucdau={piece:qc,position:banco[vitridau],color:'b'};
			if(bancoSo[vitrisau]===1){
			var quancotrang={piece:trang_piece[trang_position.indexOf(banco[vitrisau])],position:banco[vitrisau],color:'w'}; 
			diemsocotrang=diem(quancotrang);
			}

			var quancodenlucsau={piece:qc,position:banco[vitrisau],color:'b'};

			var diemso=diemsocotrang+diem(quancodenlucsau)-diem(quancodenlucdau);
			return diemso;
		}

		// Thay đổi bàn cờ sau khi trắng đi

		var thaydoikhitrangdanh = function thaydoikhitrangdanh(vitridau,vitrisau,bancoSo,trang_piece,trang_position,den_piece,den_position){
			bancoSo[vitridau]=0;
			if(trang_piece[trang_position.indexOf(banco[vitridau])]==='p'&&vitrisau/8>=7){
			trang_piece[trang_position.indexOf(banco[vitridau])]='q';
			}
			trang_position[trang_position.indexOf(banco[vitridau])]=banco[vitrisau];
			if(bancoSo[vitrisau]===-1){
			den_piece.splice(den_position.indexOf(banco[vitrisau]),1);
			den_position.splice(den_position.indexOf(banco[vitrisau]),1);
			}
			bancoSo[vitrisau]=1;    
		}

		// Thay đổi bàn cờ sau khi đen đi

		var thaydoikhidendanh = function thaydoikhidendanh(vitridau,vitrisau,bancoSo,den_piece,den_position,trang_piece,trang_position){
			bancoSo[vitridau]=0;
			if(den_piece[den_position.indexOf(banco[vitridau])]==='p'&&vitrisau/7<1){
			den_piece[den_position.indexOf(banco[vitridau])]='q';
			}
			den_position[den_position.indexOf(banco[vitridau])]=banco[vitrisau];
			if(bancoSo[vitrisau]===-1){
			trang_piece.splice(trang_position.indexOf(banco[vitrisau]),1);
			trang_position.splice(trang_position.indexOf(banco[vitrisau]),1);
			}
			bancoSo[vitrisau]=-1;   
		}		
		// Thuật toán minimax	



		var minimax=function MiNiMax(bancoSo,den_piece,den_position,trang_piece,trang_position,n){

			if(n===dung) {
				return {vitribd:'d1',vitridichuyen:'d3',diem:0};
			}
			if(n%2===0){
			var max=-500;
			var vitribandau;
			var vitriduocchon;
			for(var i=0;i<trang_piece.length;i++){
			var quanco=trang_piece[i];

			var vitri=banco.indexOf(trang_position[i]);

			if(quanco==='p'){
			   var vitridc1=vitri+7;
			   var vitridc2=vitri+8;
			   var vitridc3=vitri+9;
			   var vitridc4=vitri+16;
			   if(Math.floor(vitri/8)===Math.floor(vitridc1/8)-1&&bancoSo[vitridc1]===-1) {
				 var bancoSocopy=bancoSo.slice();   
				 var trang_piececopy=trang_piece.slice();
				 var trang_positioncopy=trang_position.slice();
				 var den_piececopy=den_piece.slice();
				 var den_positioncopy=den_position.slice();
				 var diemcong=diemtrangtang(vitri,vitridc1,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
				 thaydoikhitrangdanh(vitri,vitridc1,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
				 var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				 if(max<diemthuduoc){
					max=diemthuduoc;
					vitribandau=vitri;
					vitriduocchon=vitridc1;
					}
			  
				}
			   if(Math.floor(vitri/8)===Math.floor(vitridc3/8)-1&&bancoSo[vitridc3]===-1){
				 var bancoSocopy=bancoSo.slice();   
				 var trang_piececopy=trang_piece.slice();
				 var trang_positioncopy=trang_position.slice();
				 var den_piececopy=den_piece.slice();
				 var den_positioncopy=den_position.slice();
				 var diemcong=diemtrangtang(vitri,vitridc3,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
				 thaydoikhitrangdanh(vitri,vitridc3,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
				 var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				 if(max<diemthuduoc){
					max=diemthuduoc;
					vitribandau=vitri;
					vitriduocchon=vitridc3;
					}
				}
			   if(bancoSo[vitridc2]===0){
				 var bancoSocopy=bancoSo.slice();  
				 var trang_piececopy=trang_piece.slice();
				 var trang_positioncopy=trang_position.slice();
				 var den_piececopy=den_piece.slice();
				 var den_positioncopy=den_position.slice();
				 var diemcong=diemtrangtang(vitri,vitridc2,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
				 thaydoikhitrangdanh(vitri,vitridc2,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
				 var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				 if(max<diemthuduoc){
					max=diemthuduoc;
					vitribandau=vitri;
					vitriduocchon=vitridc2;
					  }
				}
			   if(vitri>=8&&vitri<=15&&bancoSo[vitridc4]===0){
				 var bancoSocopy=bancoSo.slice();  
				 var trang_piececopy=trang_piece.slice();
				 var trang_positioncopy=trang_position.slice();
				 var den_piececopy=den_piece.slice();
				 var den_positioncopy=den_position.slice();
				 var diemcong=diemtrangtang(vitri,vitridc4,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
				 thaydoikhitrangdanh(vitri,vitridc4,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
				 var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				 if(max<diemthuduoc){
					max=diemthuduoc;
					vitribandau=vitri;
					vitriduocchon=vitridc4;
					  }
				}

			}

			if(quanco==='n'){
				var vitridc1=vitri-17;
				if(vitridc1>=0&&vitridc1%8===vitri%8-1&&bancoSo[vitridc1]!=1){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc1,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc1,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc1;
					  }
				}
				
				var vitridc2=vitri-15;
				if(vitridc2>=0&&vitridc2%8===vitri%8+1&&bancoSo[vitridc2]!=1){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc2,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc2,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc2;
					  }
				}
				
				var vitridc3=vitri-10;
				if(vitridc3>=0&&vitridc3%8===vitri%8-2&&bancoSo[vitridc3]!=1){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc3,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc3,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc3;
					  }
				}
				
				var vitridc4=vitri-6;
				if(vitridc4>=0&&vitridc4%8===vitri%8+2&&bancoSo[vitridc4]!=1){
					  var bancoSocopy=bancoSo.slice(); 
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc4,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc4,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc4;
					  }
				}
				
				var vitridc5=vitri+6;
				if(vitridc5<64&&vitridc5%8===vitri%8-2&&bancoSo[vitridc5]!=1){
					  var bancoSocopy=bancoSo.slice(); 
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc5,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc5,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc5;
					  }
				}
				
				var vitridc6=vitri+10;
				if(vitridc6<64&&vitridc6%8===vitri%8+2&&bancoSo[vitridc6]!=1){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc6,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc6,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc6;
					  }
				}
				
				var vitridc7=vitri+15;
				if(vitridc7<64&&vitridc7%8===vitri%8-1&&bancoSo[vitridc7]!=1){
					  var bancoSocopy=bancoSo.slice(); 
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc7,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc7,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc7;
					  }
				}
				
				var vitridc8=vitri+17;
				if(vitridc8<64&&vitridc8%8===vitri%8+1&&bancoSo[vitridc8]!=1){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc8,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc8,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc8;
					  }
				}
				
			}

			if(quanco==='b'){
				var vitridc1=vitri-9;
				while(vitridc1>=0&&vitridc1%8<vitri%8&&bancoSo[vitridc1]===0){
					  var bancoSocopy=bancoSo.slice(); 
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc1,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc1,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc1;
					  }
					  vitridc1=vitridc1-9;
				}
				if(vitridc1>=0&&vitridc1%8<vitri%8&&bancoSo[vitridc1]===-1){
					  var bancoSocopy=bancoSo.slice(); 
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc1,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc1,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc1;
					  }
				}
				
				var vitridc2=vitri+9;
				while(vitridc2<64&&vitridc2%8>vitri%8&&bancoSo[vitridc2]===0){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc2,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc2,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc2;
					  }
					  vitridc2=vitridc2+9;
				}
				if(vitridc2<64&&vitridc2%8>vitri%8&&bancoSo[vitridc2]===-1){
					  var bancoSocopy=bancoSo.slice();   var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc2,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc2,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc2;
					  }
				}
				
				var vitridc3=vitri-7;
				while(vitridc3>=1&&vitridc3%8>vitri%8&&bancoSo[vitridc3]===0){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc3,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc3,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc3;
					  }
					  vitridc3=vitridc3-7;
				}
				if(vitridc3>=1&&vitridc3%8>vitri%8&&bancoSo[vitridc3]===-1){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc3,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc3,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc3;
					  }
				}
				
				var vitridc4=vitri+7;
				while(vitridc4<64&&vitridc4%8<vitri%8&&bancoSo[vitridc4]===0){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc4,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc4,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc4;
					  }
					  vitridc4=vitridc4+7;
				}
				if(vitridc4<64&&vitridc4%8<vitri%8&&bancoSo[vitridc4]===-1){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc4,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc4,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc4;
					  }
				}
			}

			if(quanco==='r'){
				 
				 var vitridc1=vitri-1;
				 while(Math.floor(vitridc1/8)===Math.floor(vitri/8)&&bancoSo[vitridc1]===0){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc1,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc1,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc1;
					  }
					  vitridc1--;
				}
				
				if(Math.floor(vitridc1/8)===Math.floor(vitri/8)&&bancoSo[vitridc1]===-1){
					  var bancoSocopy=bancoSo.slice(); 
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc1,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc1,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc1;
					  }
				}
				  
				var vitridc2=vitri+1;
				while(Math.floor(vitridc2/8)===Math.floor(vitri/8)&&bancoSo[vitridc2]===0){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc2,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc2,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc2;
					  }
					  vitridc2++;
				}
				
				if(Math.floor(vitridc2/8)===Math.floor(vitri/8)&&bancoSo[vitridc2]===-1){
					  var bancoSocopy=bancoSo.slice(); 
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc2,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc2,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc2;
					  }
				}
					  
				var vitridc3=vitri-8;
				while(vitridc3>=0&&bancoSo[vitridc3]===0){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc3,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc3,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc3;
					  }
					  vitridc3=vitridc3-8;
				}
				
				if(vitridc3>=0&&bancoSo[vitridc3]===-1){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc3,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc3,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc3;
					  }
				}
					  
				var vitridc4=vitri+8;
				while(vitridc4<64&&bancoSo[vitridc4]===0){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc4,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc4,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc4;
					  }
					  vitridc4=vitridc4+8;
				}
				
				if(vitridc4<64&&bancoSo[vitridc4]===-1){
					  var bancoSocopy=bancoSo.slice(); 
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc4,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc4,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc4;
					  }
				}
			}

			if(quanco==='q'){
				
				var vitridc1=vitri-1;
				while(Math.floor(vitridc1/8)===Math.floor(vitri/8)&&bancoSo[vitridc1]===0){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc1,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc1,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc1;
					  }
					  vitridc1--;
				}
				
				if(Math.floor(vitridc1/8)===Math.floor(vitri/8)&&bancoSo[vitridc1]===-1){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc1,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc1,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc1;
					  }
				}
					  
				var vitridc2=vitri+1;
				while(Math.floor(vitridc2/8)===Math.floor(vitri/8)&&bancoSo[vitridc2]===0){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc2,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc2,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc2;
					  }
					  vitridc2++;
				}
				
				if(Math.floor(vitridc2/8)===Math.floor(vitri/8)&&bancoSo[vitridc2]===-1){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc2,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc2,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc2;
					  }
				}
					  
				var vitridc3=vitri-8;
				while(vitridc3>=0&&bancoSo[vitridc3]===0){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc3,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc3,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc3;
					  }
					  vitridc3=vitridc3-8;
				}
				
				if(vitridc3>=0&&bancoSo[vitridc3]===-1){
					  var bancoSocopy=bancoSo.slice();
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc3,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc3,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc3;
					  }
				}
					  
				var vitridc4=vitri+8;
				while(vitridc4<64&&bancoSo[vitridc4]===0){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc4,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc4,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc4;
					  }
					  vitridc4=vitridc4+8;
				}
				
				if(vitridc4<64&&bancoSo[vitridc4]===-1){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc4,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc4,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc4;
					  }
				}
				
				var vitridc5=vitri-9;
				while(vitridc5>=0&&vitridc5%8<vitri%8&&bancoSo[vitridc5]===0){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc5,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc5,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc5;
					  }
					  vitridc5=vitridc5-9;
				}
				if(vitridc5>=0&&vitridc5%8<vitri%8&&bancoSo[vitridc5]===-1){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc5,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc5,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc5;
					  }
				}
				
				var vitridc6=vitri+9;
				while(vitridc6<64&&vitridc6%8>vitri%8&&bancoSo[vitridc6]===0){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc6,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc6,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc6;
					  }
					  vitridc6=vitridc6+9;
				}
				if(vitridc6<64&&vitridc6%8>vitri%8&&bancoSo[vitridc6]===-1){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc6,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc6,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc6;
					  }
				}
				
				var vitridc7=vitri-7;
				while(vitridc7>=1&&vitridc7%8>vitri%8&&bancoSo[vitridc7]===0){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc7,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc7,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc7;
					  }
					  vitridc7=vitridc7-7;
				}
				if(vitridc7>=1&&vitridc7%8>vitri%8&&bancoSo[vitridc7]===-1){
					  var bancoSocopy=bancoSo.slice(); 
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc7,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc7,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc7;
					  }
				}
				
				var vitridc8=vitri+7;
				while(vitridc8<64&&vitridc8%8<vitri%8&&bancoSo[vitridc8]===0){
					  var bancoSocopy=bancoSo.slice();  
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc8,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc8,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc8;
					  }
					  vitridc8=vitridc8+7;
				}
				if(vitridc8<64&&vitridc8%8<vitri%8&&bancoSo[vitridc8]===-1){
					  var bancoSocopy=bancoSo.slice(); 
					  var trang_piececopy=trang_piece.slice();
					  var trang_positioncopy=trang_position.slice();
					  var den_piececopy=den_piece.slice();
					  var den_positioncopy=den_position.slice();
					  var diemcong=diemtrangtang(vitri,vitridc8,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
					  thaydoikhitrangdanh(vitri,vitridc8,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
					  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
					  if(max<diemthuduoc){
					  max=diemthuduoc;
					  vitribandau=vitri;
					  vitriduocchon=vitridc8;
					  }
				}
			}

			if(quanco==='k'){
				var vitridc1=vitri-9;
				var vitridc2=vitri-8;
				var vitridc3=vitri-7;
				var vitridc4=vitri-1;
				var vitridc5=vitri+1;
				var vitridc6=vitri+7;
				var vitridc7=vitri+8;
				var vitridc8=vitri+9;
				
				
				if(vitridc1>=0&&vitri%8===vitridc1%8+1&&bancoSo[vitridc1]!=1){
				 var bancoSocopy=bancoSo.slice(); 
				 var trang_piececopy=trang_piece.slice();
				 var trang_positioncopy=trang_position.slice();
				 var den_piececopy=den_piece.slice();
				 var den_positioncopy=den_position.slice();
				 var diemcong=diemtrangtang(vitri,vitridc1,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
				 thaydoikhitrangdanh(vitri,vitridc1,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
				 var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				 if(max<diemthuduoc){
					max=diemthuduoc;
					vitribandau = vitri;
					vitriduocchon=vitridc1;
					}
			  
				}
				if(vitridc2>=0&&bancoSo[vitridc2]!=1){
				 var bancoSocopy=bancoSo.slice();   var trang_piececopy=trang_piece.slice();
				 var trang_positioncopy=trang_position.slice();
				 var den_piececopy=den_piece.slice();
				 var den_positioncopy=den_position.slice();
				 var diemcong=diemtrangtang(vitri,vitridc2,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
				 thaydoikhitrangdanh(vitri,vitridc2,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
				 var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				 if(max<diemthuduoc){
					max=diemthuduoc;
					vitribandau = vitri;
					vitriduocchon=vitridc2;
					}
			  
				}
				if(vitridc3>=0&&vitri%8===vitridc3%8-1&&bancoSo[vitridc3]!=1){
				 var bancoSocopy=bancoSo.slice(); 
				 var trang_piececopy=trang_piece.slice();
				 var trang_positioncopy=trang_position.slice();
				 var den_piececopy=den_piece.slice();
				 var den_positioncopy=den_position.slice();
				 var diemcong=diemtrangtang(vitri,vitridc3,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
				 thaydoikhitrangdanh(vitri,vitridc3,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
				 var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				 if(max<diemthuduoc){
					max=diemthuduoc;
					vitribandau = vitri;
					vitriduocchon=vitridc3;
					}
			  
				}
				if(vitridc4>=0&&vitri%8===vitridc4%8+1&&bancoSo[vitridc4]!=1){
				 var bancoSocopy=bancoSo.slice(); 
				 var trang_piececopy=trang_piece.slice();
				 var trang_positioncopy=trang_position.slice();
				 var den_piececopy=den_piece.slice();
				 var den_positioncopy=den_position.slice();
				 var diemcong=diemtrangtang(vitri,vitridc4,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
				 thaydoikhitrangdanh(vitri,vitridc4,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
				 var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				 if(max<diemthuduoc){
					max=diemthuduoc;
					vitribandau = vitri;
					vitriduocchon=vitridc4;
					}
			  
				}
				if(vitri%8===vitridc5%8-1&&bancoSo[vitridc5]!=1){
				 var bancoSocopy=bancoSo.slice();  
				 var trang_piececopy=trang_piece.slice();
				 var trang_positioncopy=trang_position.slice();
				 var den_piececopy=den_piece.slice();
				 var den_positioncopy=den_position.slice();
				 var diemcong=diemtrangtang(vitri,vitridc5,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
				 thaydoikhitrangdanh(vitri,vitridc5,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
				 var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				 if(max<diemthuduoc){
					max=diemthuduoc;
					vitribandau = vitri;
					vitriduocchon=vitridc5;
					}
			  
				}
				if(vitridc6<64&&vitri%8===vitridc6%8+1&&bancoSo[vitridc6]!=1){
				 var bancoSocopy=bancoSo.slice(); 
				 var trang_piececopy=trang_piece.slice();
				 var trang_positioncopy=trang_position.slice();
				 var den_piececopy=den_piece.slice();
				 var den_positioncopy=den_position.slice();
				 var diemcong=diemtrangtang(vitri,vitridc6,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
				 thaydoikhitrangdanh(vitri,vitridc6,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
				 var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				 if(max<diemthuduoc){
					max=diemthuduoc;
					vitribandau = vitri;
					vitriduocchon=vitridc6;
					}
			  
				}
				if(vitridc7<64&&bancoSo[vitridc7]!=1){
				 var bancoSocopy=bancoSo.slice();  
				 var trang_piececopy=trang_piece.slice();
				 var trang_positioncopy=trang_position.slice();
				 var den_piececopy=den_piece.slice();
				 var den_positioncopy=den_position.slice();
				 var diemcong=diemtrangtang(vitri,vitridc7,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
				 thaydoikhitrangdanh(vitri,vitridc7,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
				 var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				 if(max<diemthuduoc){
					max=diemthuduoc;
					vitribandau = vitri;;
					vitriduocchon=vitridc7;
					}
			  
				}
				if(vitridc8<64&&vitri%8===vitridc8%8-1&&bancoSo[vitridc8]!=1){
				 var bancoSocopy=bancoSo.slice(); 
				 var trang_piececopy=trang_piece.slice();
				 var trang_positioncopy=trang_position.slice();
				 var den_piececopy=den_piece.slice();
				 var den_positioncopy=den_position.slice();
				 var diemcong=diemtrangtang(vitri,vitridc8,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
				 thaydoikhitrangdanh(vitri,vitridc8,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
				 var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				 if(max<diemthuduoc){
					max=diemthuduoc;
					vitribandau = vitri;;
					vitriduocchon=vitridc8;
					}
			  
				}
			}

		}

		var Max = {};
		Max.vitribd=banco[vitribandau];
		Max.vitridichuyen=banco[vitriduocchon];
		Max.diem=max;
		return Max;

		}
		if(n%2===1){
		var min=10000;
		for(var i=0;i<den_piece.length;i++){
		var quanco=den_piece[i];
		var vitribandau;
		var vitriduocchon;
		var vitri=banco.indexOf(den_position[i]);

		if(quanco==='p'){
		   var vitridc1=vitri-7;
		   var vitridc2=vitri-8;
		   var vitridc3=vitri-9;
		   var vitridc4=vitri-16;
		   if(Math.floor(vitri/8)===Math.floor(vitridc1/8)+1&&bancoSo[vitridc1]===1) {
			 var bancoSocopy=bancoSo.slice();
			 var trang_positioncopy=trang_position.slice();
			 var trang_piececopy=trang_piece.slice();   
			 var den_piececopy=den_piece.slice();
			 var den_positioncopy=den_position.slice();
			 var diemcong=-diemdentang(vitri,vitridc1,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
			 thaydoikhidendanh(vitri,vitridc1,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
			 var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
			 if(min>diemthuduoc){
				min=diemthuduoc;
				vitribandau=vitri;
				vitriduocchon=vitridc1;
				}
		  
			}
		   if((Math.floor(vitri/8)===Math.floor(vitridc3/8)+1)&&bancoSo[vitridc3]===1){
			 var bancoSocopy=bancoSo.slice();
			 var trang_positioncopy=trang_position.slice();
			 var trang_piececopy=trang_piece.slice(); 
			 var den_piececopy=den_piece.slice();
			 var den_positioncopy=den_position.slice();
			 var diemcong=-diemdentang(vitri,vitridc3,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
			 thaydoikhidendanh(vitri,vitridc3,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
			 var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
			 if(min>diemthuduoc){
				min=diemthuduoc;
				vitribandau=vitri;
				vitriduocchon=vitridc3;
				}
			}
		   if(bancoSo[vitridc2]===0){
			 var bancoSocopy=bancoSo.slice();
			 var trang_positioncopy=trang_position.slice();
			 var trang_piececopy=trang_piece.slice(); 
			 var den_piececopy=den_piece.slice();
			 var den_positioncopy=den_position.slice();
			 var diemcong=-diemdentang(vitri,vitridc2,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
			 thaydoikhidendanh(vitri,vitridc2,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
			 var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
			 if(min>diemthuduoc){
				min=diemthuduoc;
				vitribandau=vitri;
				vitriduocchon=vitridc2;
				  }
			}
		   if(vitridc4>=48&&vitridc4<=55&&bancoSo[vitridc4]===0){
			 var bancoSocopy=bancoSo.slice();  
			 var trang_piececopy=trang_piece.slice();
			 var trang_positioncopy=trang_position.slice();
			 var den_piececopy=den_piece.slice();
			 var den_positioncopy=den_position.slice();
			 var diemcong=diemtrangtang(vitri,vitridc4,bancoSocopy,trang_piece,trang_positioncopy,den_piececopy,den_positioncopy);
			 thaydoikhitrangdanh(vitri,vitridc4,bancoSocopy,trang_piececopy,trang_positioncopy,den_piececopy,den_positioncopy);
			 var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
			 if(max<diemthuduoc){
				max=diemthuduoc;
				vitribandau=vitri;
				vitriduocchon=vitridc4;
				  }
			}

		}

		if(quanco==='n'){
			var vitridc1=vitri-17;
			if(vitridc1>=0&&vitridc1%8===vitri%8-1&&bancoSo[vitridc1]!=-1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc1,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc1,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc1;
				  }
			}

			var vitridc2=vitri-15;
			if(vitridc2>=0&&vitridc2%8===vitri%8+1&&bancoSo[vitridc2]!=-1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc2,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc2,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc2;
				  }
			}
			
			var vitridc3=vitri-10;
			if(vitridc3>=0&&vitridc3%8===vitri%8-2&&bancoSo[vitridc3]!=-1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc3,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc3,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc3;
				  }
			}
			
			var vitridc4=vitri-6;
			if(vitridc4>=0&&vitridc4%8===vitri%8+2&&bancoSo[vitridc4]!=-1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc4,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc4,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc4;
				  }
			}
			
			var vitridc5=vitri+6;
			if(vitridc5<64&&vitridc5%8===vitri%8-2&&bancoSo[vitridc5]!=-1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc5,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc5,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc5;
				  }
			}
			
			var vitridc6=vitri+10;
			if(vitridc6<64&&vitridc6%8===vitri%8+2&&bancoSo[vitridc6]!=-1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice(); 
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc7,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc7,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc6;
				  }
			}
			
			var vitridc7=vitri+15;
			if(vitridc7<64&&vitridc7%8===vitri%8-1&&bancoSo[vitridc7]!=-1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc7,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc7,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc7;
				  }
			}
			
			var vitridc8=vitri+17;
			if(vitridc8<640&&vitridc8%8===vitri%8+1&&bancoSo[vitridc8]!=-1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice(); 
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc8,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc8,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc8;
				  }
			}
		}

		if(quanco==='r'){
			 
			 var vitridc1=vitri-1;
			 while(Math.floor(vitridc1/8)===Math.floor(vitri/8)&&bancoSo[vitridc1]===0){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice(); 
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc1,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc1,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc1;
				  }
				  vitridc1--;
			}
			
			if(Math.floor(vitridc1/8)===Math.floor(vitri/8)&&bancoSo[vitridc1]===1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc1,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc1,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc1;
				  }
			}
				  
			var vitridc2=vitri+1;
			while(Math.floor(vitridc2/8)===Math.floor(vitri/8)&&bancoSo[vitridc2]===0){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice(); 
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc2,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc2,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc2;
				  }
				  vitridc2++;
			}
			
			if(Math.floor(vitridc2/8)===Math.floor(vitri/8)&&bancoSo[vitridc2]===1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc2,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc2,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc2;
				  }
			}
				  
			var vitridc3=vitri-8;
			while(vitridc3>=0&&bancoSo[vitridc3]===0){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc3,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc3,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc3;
				  }
				  vitridc3=vitridc3-8;
			}
			
			if(vitridc3>=0&&bancoSo[vitridc3]===1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc3,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc3,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc3;
				  }
			}
				  
			var vitridc4=vitri+8;
			while(vitridc4<64&&bancoSo[vitridc4]===0){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc4,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc4,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc4;
				  }
				  vitridc4=vitridc4+8;
			}
			
			if(vitridc4<64&&bancoSo[vitridc4]===1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc4,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc4,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc4;
				  }
			}
		}
			

		if(quanco==='b'){
			var vitridc1=vitri-9;
			while(vitridc1>=0&&vitridc1%8<vitri%8&&bancoSo[vitridc1]===0){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice(); 
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc1,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc1,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc1;
				  }
				vitridc1=vitridc1-9;
			}
			if(vitridc1>=0&&vitridc1%8<vitri%8&&bancoSo[vitridc1]===1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc1,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc1,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc1;
				  }
			}
			
			var vitridc2=vitri+9;
			while(vitridc2<64&&vitridc2%8>vitri%8&&bancoSo[vitridc2]===0){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice(); 
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc2,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc2,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc2;
				  }
				  vitridc2=vitridc2+9;
			}
			if(vitridc2<64&&vitridc2%8>vitri%8&&bancoSo[vitridc2]===1){    
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc2,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc2,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc2;
				  }
			}
			
			var vitridc3=vitri-7;
			while(vitridc3>=1&&vitridc3%8>vitri%8&&bancoSo[vitridc3]===0){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc3,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc3,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc3;
				  }
				  vitridc3=vitridc3-7;
			}
			if(vitridc3>=1&&vitridc3%8>vitri%8&&bancoSo[vitridc3]===1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc3,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc3,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc3;
				  }
			}
			
			var vitridc4=vitri+7;
			while(vitridc4<64&&vitridc4%8<vitri%8&&bancoSo[vitridc4]===0){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc4,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc4,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc4;
				  }
				  vitridc4=vitridc4+7;
			}
			if(vitridc4<64&&vitridc4%8<vitri%8&&bancoSo[vitridc4]===1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc4,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc4,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc4;
				  }
			}
		}

		if(quanco==='q'){
			
			var vitridc1=vitri-1;
			 while(Math.floor(vitridc1/8)===Math.floor(vitri/8)&&bancoSo[vitridc1]===0){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc1,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc1,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc1;
				  }
				  vitridc1--;
			}
			
			if(Math.floor(vitridc1/8)===Math.floor(vitri/8)&&bancoSo[vitridc1]===1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();   
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc1,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc1,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc1;
				  }
			}
				  
			var vitridc2=vitri+1;
			while(Math.floor(vitridc2/8)===Math.floor(vitri/8)&&bancoSo[vitridc2]===0){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc2,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc2,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc2;
				  }
				  vitridc2++;
			}
			
			if(Math.floor(vitridc2/8)===Math.floor(vitri/8)&&bancoSo[vitridc2]===1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc2,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc2,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc2;
				  }
			}
				  
			var vitridc3=vitri-8;
			while(vitridc3>=0&&bancoSo[vitridc3]===0){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc3,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc3,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc3;
				  }
				  vitridc3=vitridc3-8;
			}
			
			if(vitridc3>=0&&bancoSo[vitridc3]===1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice(); 
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc3,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc3,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc3;
				  }
			}
				  
			var vitridc4=vitri+8;
			while(vitridc4<64&&bancoSo[vitridc4]===0){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice(); 
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc4,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc4,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc4;
				  }
				  vitridc4=vitridc4+8;
			}
			
			if(vitridc4<64&&bancoSo[vitridc4]===1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice(); 
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc4,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc4,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc4;
				  }
			}
			
			var vitridc5=vitri-9;
			while(vitridc5>=0&&vitridc5%8<vitri%8&&bancoSo[vitridc5]===0){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc5,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc5,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc5;
				  }
				vitridc5=vitridc5-9;
			}
			if(vitridc5>=0&&vitridc5%8<vitri%8&&bancoSo[vitridc5]===1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc5,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc5,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc5;
				  }
			}
			
			var vitridc6=vitri+9;
			while(vitridc6<64&&vitridc6%8>vitri%8&&bancoSo[vitridc6]===0){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice(); 
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc6,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc6,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc6;
				  }
				  vitridc6=vitridc6+9;
			}
			if(vitridc6<64&&vitridc6%8>vitri%8&&bancoSo[vitridc6]===1){    
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc6,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc6,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc6;
				  }
			}
			
			var vitridc7=vitri-7;
			while(vitridc7>=1&&vitridc7%8>vitri%8&&bancoSo[vitridc7]===0){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();   
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc7,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc7,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc7;
				  }
				  vitridc7=vitridc7-7;
			}
			if(vitridc7>=1&&vitridc7%8>vitri%8&&bancoSo[vitridc7]===1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc7,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc7,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc7;
				  }
			}
			
			var vitridc8=vitri+7;
			while(vitridc8<64&&vitridc8%8<vitri%8&&bancoSo[vitridc8]===0){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc8,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc8,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc8;
				  }
				  vitridc8=vitridc8+7;
			}
			if(vitridc8<64&&vitridc8%8<vitri%8&&bancoSo[vitridc8]===1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc8,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc8,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc8;
				  }
			}
		}

		if(quanco==='k'){
			var vitridc1=vitri-9;
			var vitridc2=vitri-8;
			var vitridc3=vitri-7;
			var vitridc4=vitri-1;
			var vitridc5=vitri+1;
			var vitridc6=vitri+7;
			var vitridc7=vitri+8;
			var vitridc8=vitri+9;
			if(vitridc1>=0&&vitri%8===vitridc1%8+1&&bancoSo[vitridc1]!=-1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc1,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc1,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc1;
				  }
			}
			if(vitridc2>=0&&bancoSo[vitridc2]!=-1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();  
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc2,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc2,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc2;
				  }
			}
			if(vitridc3>=0&&vitri%8===vitridc3%8-1&&bancoSo[vitridc3]!=-1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();   
				  var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc3,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc3,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc3;
				  }
			}
			if(vitridc4>=0&&vitri%8===vitridc4%8+1&&bancoSo[vitridc4]!=-1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();   var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc4,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc4,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc4;
				  }
			}
			if(vitri%8===vitridc5%8-1&&bancoSo[vitridc5]!=-1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();   var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc5,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc5,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc5;
				  }
			}
			if(vitridc6<64&&vitri%8===vitridc6%8+1&&bancoSo[vitridc6]!=-1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();   var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc6,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc6,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc6;
				  }
			}
			if(vitridc7<64&&bancoSo[vitridc7]!=-1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();   var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc7,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc7,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc7;
				  }
			}
			if(vitridc8<64&&vitri%8===vitridc8%8-1&&bancoSo[vitridc8]!=-1){
				  var bancoSocopy=bancoSo.slice();
				  var trang_positioncopy=trang_position.slice();
				  var trang_piececopy=trang_piece.slice();   var den_piececopy=den_piece.slice();
				  var den_positioncopy=den_position.slice();
				  var diemcong=-diemdentang(vitri,vitridc8,bancoSocopy,trang_piececopy,trang_positioncopy,den_piece,den_positioncopy);
				  thaydoikhidendanh(vitri,vitridc8,bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy);
				  var diemthuduoc=diemcong+minimax(bancoSocopy,den_piececopy,den_positioncopy,trang_piececopy,trang_positioncopy,n-1).diem;
				  if(min>diemthuduoc){
				  min=diemthuduoc;
				  vitribandau = vitri;
				  vitriduocchon=vitridc8;
				  }
			}
		}

		}

		var Min = {};
		Min.vitribd=banco[vitribandau];
		Min.vitridichuyen=banco[vitriduocchon];
		Min.diem=min;

		return Min;
		}

		}

		var n=4;
		if(color='b'){
			n++;
		}
		dung = n-level;

		var demsoquanco = trang_piece.length+den_piece.length;
		if(demsoquanco<12) dung--;
		var NuocDiDuocChon = minimax(bancoSo,den_piece,den_position,trang_piece,trang_position,n);
		var NuocDi = {};
		NuocDi.start=NuocDiDuocChon.vitribd;
		NuocDi.stop=NuocDiDuocChon.vitridichuyen;
		if(color=='b') c = -1;
		NuocDi = changeOutput(NuocDi,-1);
		move(NuocDi);
	}
	
	
	
	// user
	
	function userMove(pos){
		var selector = "#" + pos;
		var chess = $(selector).html();
		var row = parseInt(pos.charAt(0));
		var col = parseInt(pos.charAt(1));
		if(flag[row][col]==1){
			let newpos = {
				row: row,
				col: col
			}
			let sol ={
					pos: choosenChess,
					newpos: newpos,
					colorChess: 1
					};
			move(sol);
			userTurn = false;
			let img = 'static/countdown' + count +'.gif';
			$('#clock').html("<img src='"+img+"' style='width:120px; height: 70px;'/>");
			++count;
			if(count==16) count=1;
			return;
		}
		if(board[row][col]!=colorChess) return;
		choosenChess = {
			row:row,
			col:col
		}
		resetPrevState();
		$('#'+row+col).css({'background-color':'green'});
		
		// pawn
		if(chess.includes('pawn')) pawnMove(row,col);	
		
		// rook
		if(chess.includes('rook')) rookMove(row,col);
		
		//knight
		if(chess.includes('knight')) knightMove(row,col);
		
		//bishop
		if(chess.includes('bishop')) bishopMove(row,col);
		
		//queen
		if(chess.includes('queen')){
			rookMove(row,col);
			bishopMove(row,col);
		}
		
		//king
		if(chess.includes('king')) kingMove(row,col);
	}
	
	
	var checkTime = 1;
	var t = 1000;
	function runClock(){
		console.log(isPromotion);
		if(isPromotion==true) return;
		if(t==1) t = 1000;
		let corlor = ["#008000","#228B22","#3CB371","#32CD32","#7FFF00","#ADFF2F",
		"#FFD700","#FFFF00","#FFA500","#FF8C00","#FF7F50","#FF6347","#FF6347","#FF0000","#DC143C"];
		var i = 0;
		setInterval(function(){
			if(endGame==true){
				$('#clock').html(result);
				$('#clock').css({'font-size':'150%'});
				$('#nameOfGame').html("Trò chơi kết thúc");
				return;
			}
			let time = $('#clock').html();
			if(time.includes('img')&&checkTime==1) return;
			if(time=="Hết giờ"||checkTime==0){
				--checkTime;
				if(checkTime==0){
					$('#clock').css({'font-size':'300%'});
					let img = 'static/countdown' + count +'.gif';
					$('#clock').html("<img src='"+img+"' style='width:120px; height: 70px;'/>");
					++count;
					if(count==16) count=1;
					t = 1;
					return;
				}
				checkTime = 1;
				randomMove();
				userTurn = false;
				setTimeout(function(){
					machineMove(changeInputBoard(),'b');
					$('#clock').html(timeOfTurn);
					userTurn = true;
				},500);
				return;
			};
			if(time==timeOfTurn) i = 0;
			if(time.includes("t")) return;
			time = parseInt(time);
			--time;
			if(time<=0){
				$('#clock').html("Hết giờ");
				$('#clock').css({'font-size':'150%'});
			}
			else $('#clock').html(time);
			$('#clock').css({'color':corlor[i]});
			if(i<14) ++i;
		},t);
	}
	
	
	
	
	
	
	
	// Game
	$('#startGame').click(function(){
		startGame();
	});
	
	runClock();
	
	$('#chessboard').delegate('.cell','click',function(){
		if(userTurn==false||endGame==true||isPromotion==true) return;
		var pos = $(this).attr('id');
		userMove(pos);
		if(userTurn== false){
			setTimeout(function(){
				machineMove(changeInputBoard(),'b');
				$('#clock').html(timeOfTurn);
				userTurn = true;
			}, 1000);
		}
	});
	
	$('#spacegame').delegate('.promotedChess','click',function(){
		let chess = $(this).html();
		$('#'+promotionPos.row+promotionPos.col).html(chess);
		$('#clock').parent().css({'background-color': '#fff'});
		$('#promotedInterface').remove();
		isPromotion = false;
		let img = 'static/countdown' + count +'.gif';
		$('#clock').html("<img src='"+img+"' style='width:120px; height: 70px;'/>");
		++count;
		if(count==16) count=1;
		userTurn== false;
		setTimeout(function(){
				machineMove(changeInputBoard(),'b');
				$('#clock').html(timeOfTurn);
			}, 1000);
		userTurn = true;
	});
	