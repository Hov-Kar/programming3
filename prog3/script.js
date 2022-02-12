var matrix = [];
var grassArr = [];
var grassEaterArr = [];
var EaterArr = [];
var WaterArr = [];
var FierArr = [];
var side = 20;
// Objectner

function setup() {
  
  for (let i = 0; i < WaterArr.length; i++) {
    const water = WaterArr[i];
    water.waterColor();
  }
  function matrixGenerator(
    matrixSize,
    grassCount,
    grassEaterCount,
    allEaterCount,
    waterCount,
    fierCount
  ) {
    for (let i = 0; i < matrixSize; i++) {
      matrix[i] = [];
      for (let o = 0; o < matrixSize; o++) {
        matrix[i][o] = 0;
      }
    }
    for (let i = 0; i < grassCount; i++) {
      let x = Math.floor(random(matrixSize));
      let y = Math.floor(random(matrixSize));
      matrix[y][x] = 1;
    }
    for (let i = 0; i < grassEaterCount; i++) {
      let x = Math.floor(random(matrixSize));
      let y = Math.floor(random(matrixSize));
      matrix[y][x] = 2;
    }
    for (let i = 0; i < allEaterCount; i++) {
      let x = Math.floor(random(matrixSize));
      let y = Math.floor(random(matrixSize));
      matrix[y][x] = 3;
    }
    for (let i = 0; i < waterCount; i++) {
      let x = Math.floor(random(matrixSize));
      let y = Math.floor(random(matrixSize));
      matrix[y][x] = 4;
    }
    for (let i = 0; i < fierCount; i++) {
      let x = Math.floor(random(matrixSize));
      let y = Math.floor(random(matrixSize));
      matrix[y][x] = 5;
    }
  }
  matrixGenerator(
    20,
    Math.floor(random(1, 10)),
    Math.floor(random(1, 2)),
    Math.floor(random(1, 2)),
    1,
    2
  );

  frameRate(4);
  createCanvas(matrix[0].length * side, matrix.length * side);
  background("#acacac");

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        var gr = new Grass(x, y);
        grassArr.push(gr);
      } else if (matrix[y][x] == 2) {
        var eater = new GrassEater(x, y);
        grassEaterArr.push(eater);
      } else if (matrix[y][x] == 3) {
        var all = new AllEater(x, y);
        EaterArr.push(all);
      } else if (matrix[y][x] == 4) {
        var wat = new Water(x, y);
        WaterArr.push(wat);
      } else if (matrix[y][x] == 5) {
        var fier = new Fier(x, y);
        FierArr.push(fier);
      }
    }
  }
}

function draw() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill("green");
      } else if (matrix[y][x] == 0) {
        fill("#acacac");
      } else if (matrix[y][x] == 2) {
        fill("yellow");
      } else if (matrix[y][x] == 3) {
        fill("red");
      } else if (matrix[y][x] == 4) {
        fill("blue");
      } else if (matrix[y][x] == 5) {
        fill("orange");
      }
      rect(x * side, y * side, side, side);
    }
  }

  for (let i = 0; i < WaterArr.length; i++) {
    const water = WaterArr[i];
    water.waterColor();
  }

  for (let i = 0; i < grassArr.length; i++) {
    const grass = grassArr[i];
    grass.mul();
    grass.move();
  }

  for (let i = 0; i < grassEaterArr.length; i++) {
    const eater = grassEaterArr[i];
    eater.eat();
  }
  for (let i = 0; i < EaterArr.length; i++) {
    const me = EaterArr[i];
    me.eat();
  }

  if (
    EaterArr.length == 0 &&
    grassEaterArr.length == 0 &&
    WaterArr.length !== 0
  ) {
    stop();
    document.getElementById("demo").innerHTML =
      "Քանի որ վանդակներում չկա ո՛չ գիշատիչ ո՛չ խոտակեր այդ պատճառով խաղը կանգենլ է, խնդրում ենք սեղմել 'Random' կոճակը:";
  }
}

function clearm() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1 || matrix[y][x] == 2 || matrix[y][x] == 3 || matrix[y][x] == 4 || matrix[y][x] == 5) {
        EaterArr.length = 0;
        grassArr.length = 0;
        grassEaterArr.length = 0;
        WaterArr.length = 0;
        FierArr.length = 0;
        matrix[y][x] = 0;
      }
    }
  }
  document.getElementById("demo").innerHTML = "";
}

function rand() {
  if (run) {
    stop();
  }
  function matrixGenerator(
    matrixSize,
    grassCount,
    grassEaterCount,
    allEaterCount,
    waterCount,
    fierCount
  ) {
    for (let i = 0; i < matrixSize; i++) {
      matrix[i] = [];
      for (let o = 0; o < matrixSize; o++) {
        matrix[i][o] = 0;
      }
    }
    for (let i = 0; i < grassCount; i++) {
      let x = Math.floor(random(matrixSize));
      let y = Math.floor(random(matrixSize));
      matrix[y][x] = 1;
    }
    for (let i = 0; i < grassEaterCount; i++) {
      let x = Math.floor(random(matrixSize));
      let y = Math.floor(random(matrixSize));
      matrix[y][x] = 2;
    }
    for (let i = 0; i < allEaterCount; i++) {
      let x = Math.floor(random(matrixSize));
      let y = Math.floor(random(matrixSize));
      matrix[y][x] = 3;
    }
    for (let i = 0; i < waterCount; i++) {
      let x = Math.floor(random(matrixSize));
      let y = Math.floor(random(matrixSize));
      matrix[y][x] = 4;
    }
    for (let i = 0; i < fierCount; i++) {
      let x = Math.floor(random(matrixSize));
      let y = Math.floor(random(matrixSize));
      matrix[y][x] = 5;
    }
  }
  matrixGenerator(
    20,
    Math.floor(random(1, 10)),
    Math.floor(random(1, 2)),
    Math.floor(random(1, 2)),
    1,
    2
  );

  frameRate(3);
  createCanvas(matrix[0].length * side, matrix.length * side);
  background("#acacac");
  document.getElementById("demo").innerHTML = "Սեղմեք 'Run' կոճակը:";
}

function stop() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        grassArr.length = 0;
      } else if (matrix[y][x] == 2) {
        grassEaterArr.length = 0;
      } else if (matrix[y][x] == 3) {
        EaterArr.length = 0;
      } else if (matrix[y][x] == 4) {
        WaterArr.length = 0;
      } else if (matrix[y][x] == 5) {
        FierArr.length = 0;
      }
    }
  }
  document.getElementById("demo").innerHTML = "Սեղմեք 'Run' կոճակը:";
}

function run() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        var gr = new Grass(x, y);
        grassArr.push(gr);
      } else if (matrix[y][x] == 2) {
        var eater = new GrassEater(x, y);
        grassEaterArr.push(eater);
      } else if (matrix[y][x] == 3) {
        var all = new AllEater(x, y);
        EaterArr.push(all);
      } else if (matrix[y][x] == 4) {
        var wa = new Water(x, y);
        WaterArr.push(wa);
      } else if (matrix[y][x] == 5) {
        var fier = new Fier(x, y);
        FierArr.push(fier);
      }
    }
  }
  document.getElementById("demo").innerHTML = "";
}