import * as THREE from 'three';

let scene = new THREE.Scene();

let renderer = new THREE.WebGLRenderer();
let mouse = new THREE.Vector2(), INTERSECTED;

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor(0x000002);
document.body.appendChild( renderer.domElement );

let width = window.innerWidth;
let height = window.innerHeight;
// let cubeGeometry = new THREE.BoxGeometry( 100, 100, 100 );
let earthGeometry = new THREE.SphereGeometry( 150, 80, 80 );
let moonGeometry = new THREE.SphereGeometry( 30, 80, 80 );
// let sphereMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff , vertexColors: THREE.FaceColors } );
// let sphereMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 , wireframe: true } );
// let cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x0000ff , vertexColors: THREE.FaceColors } );

// function colorGeometry(geometry) {
//     for (let i=0; i < geometry.faces.length; i++) {
//         geometry.faces[i].color.setRGB(Math.random(), Math.random(), Math.random())
//     };
//     return geometry;
// }

let earthMaterial = new THREE.MeshPhongMaterial( {
    color: 0xffffff,
    map: THREE.ImageUtils.loadTexture('img/1_earth_8k.jpg'),
    // displacementMap: THREE.ImageUtils.loadTexture('img/earth-small.png'),
    // displacementScale: 5
} );

let moonMaterial = new THREE.MeshPhongMaterial( {
    color: 0xffffff,
    map: THREE.ImageUtils.loadTexture('img/moonmap.jpg'),
    // displacementMap: THREE.ImageUtils.loadTexture('img/earth-small.png'),
    // displacementScale: 5
} );

let earth = new THREE.Mesh( earthGeometry, earthMaterial );
let moon = new THREE.Mesh( moonGeometry, moonMaterial);
// scene.add( moon);
// scene.add( earth );
// let light = new THREE.PointLight( 0xff0000, 1, 100 );
// light.position.set( 50, 50, 50 );
// scene.add( light );
//
let camera = new THREE.PerspectiveCamera(45, width / height, 1, 5000);

// SCENE
let group = new THREE.Group();
group.add(earth);
moon.position.set(-500, 0, 0);
group.add(moon);

scene.add(group);
camera.position.set(1, 0, 1000);

let light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

let directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );

let groupParams = {
        rotationY : 0,
        rotationX : 0,
        rotationZ : 0
    },
    earthParams = {
        rotationY : 0,
        rotationX : 0.005,
        rotationZ : 0.005
    },
    moonParams = {
        rotationY : 0,
        rotationX : 0,
        rotationZ : 0
    };

let figuresParams = [groupParams, earthParams, moonParams];

let animate = function () {
    requestAnimationFrame( animate );

    let figures = [group, earth, moon];
    for (let k =0; k<figures.length; k++) {
        let figure = figures[k];
        let params = figuresParams[k];
        figure.rotation.x += params.rotationX;
        figure.rotation.y += params.rotationY;
        figure.rotation.z += params.rotationZ;
    };
  renderer.render(scene, camera);
};



animate();
