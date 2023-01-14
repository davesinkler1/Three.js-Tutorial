var map = "XXXXXXX \n" +
          "X    X \n" +
          "X S  X \n" +
          "X    X \n" +
          "X    SXXX\n" +
            "XXX   X\n" +
             " XX   SX\n" +
              " X    X\n" +
               " XXXXXX";

map = map.split("\n");
var HORIZONTAL_UNIT = 100,
    VERTICAL_UNIT = 100,
    ZSIZE = map.length * HORIZONTAL_UNIT,
    XSIZE = map[0].length * HORIZONTAL_UNIT;

for (var i = 0, rows = map.length; i < rows; i++) {
    for (var j = 0, cols = map[i].length; j < cols; j++) {
        addVoxel(map[i].charAt(j), i, j);
      }
    }
    
setupWorld();

function addVoxel (type, row, col) {
    var z = (row+1) * HORIZONTAL_UNIT - ZSIZE * 0.5,
    x = (col+1) * HORIZONTAL_UNIT - XSIZE * 0.5;
    switch(type) {
        case ' ': break;
        case 'S':
            spawnPoints.push(new THREE.Vector3(x, 0, z));
            break;
        case 'X':
            var geo = new THREE.CubeGeometry(HORIZONTAL_UNIT,
            VERTICAL_UNIT, HORIZONTAL_UNIT);
            var material = new THREE.MeshPhongMaterial({overdraw: true,
            color: Math.random() * 0xffffff
            });
            var mesh = new THREE.Mesh(geo, material);
            mesh.position.set(x, VERTICAL_UNIT*0.5, z);
            scene.add(mesh);
            break;
 }
}

function setupWorld() {
    var geo = new THREE.PlaneGeometry(2000, 2000, 20, 20);
    var mat = new THREE.MeshBasicMaterial({color: 0x9db3b5, overdraw: true});
    var floor = new THREE.Mesh(geo, mat);
    scene.add(floor);

    var light = new THREE.DirectionalLight(0xf6e86d, 1);
    light.position.set(1, 3, 2);
    scene.add(light);
}