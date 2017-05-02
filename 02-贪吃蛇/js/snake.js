window.onload = function () {
	
	// 一、搭建整个游戏的地图
	// rc:行列数（正方形） cellSize:单元格大小
	function CreateGameMap (rc,cellSize) {
		this.rs = rc;							//地图中的行数
		this.cols = rc;							//地图中的列数
		this.cellSize = cellSize;				//地图中的单元格的大小
		this.mapWH = function () {
		 	return this.cols * this.cellSize;
		}.call(this);							//地图的大小
		this.mapArray = [];						//存放地图的单元的数组
	}
	var gameMap = new CreateGameMap(30,15);

	// 通过访问器属性来获取mapWH
	// var gameMap2 = {
	// 	rs:30,
	// 	cols:30,
	// 	cellSize:15,
	// 	get mapWH() {
	// 		return this.rs * this.cellSize;
	// 	}
	// };
	// console.log(gameMap2.mapWH);
	// console.log(gameMap.mapWH);

	var gameDiv = document.querySelector('#main');
	// 设置地图大小
	gameDiv.style.width = gameMap.mapWH + 'px';
	gameDiv.style.height = gameMap.mapWH + 'px';

	// 循环创建地图中的行
	for (var i = 0; i < gameMap.rs; i++) {
		var rowDiv = document.createElement('div');
		rowDiv.className = 'row';
		gameDiv.appendChild(rowDiv);
		var rowArray = [];
		for (var j = 0; j < gameMap.cols; j++) {
			var cellDiv = document.createElement('div');
			cellDiv.className = 'cell';
			rowDiv.appendChild(cellDiv);
			// 设置cellDiv的大小
			cellDiv.style.width = gameMap.cellSize + 'px';
			cellDiv.style.height = gameMap.cellSize + 'px';
			rowArray.push(cellDiv);
		}
		gameMap.mapArray.push(rowArray);
	}

	// 测试地图的存储
	// gameMap.mapArray[20][20].classList.add('active');




















};