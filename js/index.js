
import * as THREE from './three.js-master/build/three.module.js';
import { OrbitControls } from './three.js-master/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from './three.js-master/examples/jsm/loaders/GLTFLoader.js';


export const add =  (a, b) =>  console.log(a+b);




var w=(window.innerWidth -(window.innerWidth/100)*2);
var h=(window.innerHeight );
// var w=300;
// var h=300;
var root,loader,renderer,camera,scene,controls,canvas;

var color=0xa0a0a0



export const init =  (id,model,pointlightintensity) =>{
var main = document.getElementById('main');
canvas = document.querySelector(id)
scene = new THREE.Scene();

scene.background = new THREE.Color( '#BDD5EA' );

camera = new THREE.PerspectiveCamera(75,w/ h,0.1,1000);
camera.position.set(0,0,0)
camera.position.z = 5;

renderer = new THREE.WebGL1Renderer({ 
    canvas:canvas,
    antialias: true,
    alpha:false
 });
renderer.setSize(w, h);
main.appendChild(canvas);

const hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x080820, 10);
scene.add(hemiLight);

const light = new THREE.SpotLight('white',3);
light.position.set(0,10,0);
light.castShadow = true;
scene.add( light );

const light1 = new THREE.SpotLight('white',3);
light1.position.set(0,-10,0);
light1.castShadow = true;
scene.add( light1 );

const light2 = new THREE.SpotLight('white',3);
light2.position.set(10,0,0);
light2.castShadow = true;
scene.add( light2 );



loader = new GLTFLoader();

loader.load(model,function(gltf){
    console.log(gltf)
    root = gltf.scene;
    root.scale.set(4,4,4)
    root.position.set( 0, -2, 0 );
    root.rotation.y=.6;
    scene.add(root)
},function(xhr){
    console.log((xhr.loaded/xhr.total*100)+"% loaded")
},function(error){
     console.log('An error occured')
})
// controls = new OrbitControls( camera, renderer.domElement );
// controls.enableDamping = true;
// controls.minDistance = 4;
// controls.maxDistance = 10;
// controls.target.set( 0, 0.35, 0 );
};

export const animate =  () =>{
    requestAnimationFrame(animate);
	renderer.render(scene, camera);
    
    // root.rotation.y+=0.005;

    // controls.update();

   
}

