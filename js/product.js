
import * as THREE from './three.js-master/build/three.module.js';
import { OrbitControls } from './three.js-master/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from './three.js-master/examples/jsm/loaders/GLTFLoader.js';

var wpercentage=20;
var hpercentage=10;
if(window.innerWidth<900){
    hpercentage=40
    wpercentage=20;
}

if(window.innerWidth<600){
    console.log('less then 500')
    hpercentage=40
    wpercentage=20;
}
var wtemp=(window.innerWidth/100)*wpercentage;
var htemp=(window.innerHeight/100)*hpercentage;
var width=window.innerWidth-wtemp;
var height=window.innerHeight-80-htemp;
var root,loader,renderer,camera,scene,controls,canvas;

let loading =false;


export const init =  (id,model,modelsize,modelposition,
    bg,lightposition,lightintensity,
    cameraposition,zoomlimit) =>{

var main = document.getElementById('canvascontainer');
canvas = document.querySelector(id)

//scene setting
{
    scene = new THREE.Scene();
    scene.background = new THREE.Color( bg );
}
// camera settings
{
    camera = new THREE.PerspectiveCamera(74,width/height,.1,1000);
    camera.position.set(cameraposition[0],cameraposition[1],cameraposition[2])
}
// render settings
{
    renderer = new THREE.WebGL1Renderer({ 
        canvas:canvas,
        antialias: true,
        
    });
    renderer.setSize(width,height);
    main.appendChild(canvas);
}

// light setting
{
    const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 ,lightintensity[0]);
    scene.add( hemiLight );

    var pointlight1 = new THREE.PointLight(0xffffff, lightintensity[1]);
    pointlight1.position.set( 0, lightposition, 0 );
    scene.add( pointlight1 );

    var pointlight2 = new THREE.PointLight(0xffffff, lightintensity[2]);
    pointlight2.position.set( 0, -lightposition, 0 );
    scene.add( pointlight2 );

    var pointlight3 = new THREE.PointLight(0xffffff, lightintensity[3]);
    pointlight3.position.set( lightposition, 0, 0 );
    scene.add( pointlight3 );

    var pointlight4 = new THREE.PointLight(0xffffff, lightintensity[4]);
    pointlight4.position.set( -lightposition, 0, 0 );
    scene.add( pointlight4 );

    var pointlight5 = new THREE.PointLight(0xffffff, lightintensity[5]);
    pointlight5.position.set( 0, 0, lightposition );
    scene.add( pointlight5 );

    var pointlight6 = new THREE.PointLight(0xffffff, lightintensity[6]);
    pointlight6.position.set( 0, 0, -lightposition );
    scene.add( pointlight6 );
}


//Model settings
{
    loader = new GLTFLoader();
    loader.load(model,function(gltf){
        // console.log(gltf)
        root = gltf.scene;
        root.scale.set(modelsize,modelsize,modelsize)
        root.position.set(modelposition[0],modelposition[1],modelposition[2])
        scene.add(root)
     

    },function(xhr){
        console.log((xhr.loaded/xhr.total*100)+"% loaded") 
    },function(error){
        console.log('An error occured')
    })
}

//controls settings
{
    controls = new OrbitControls( camera, renderer.domElement );
    controls.enableDamping = true;
    controls.minDistance = zoomlimit[0];
    controls.maxDistance = zoomlimit[1];
    controls.autoRotate=true;
    controls.autoRotateSpeed=3
}


};

export const animate =  () =>{
    requestAnimationFrame(animate);
	renderer.render(scene, camera);

    controls.update();

   
}

export const getId =  () =>{
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
    function (m, key, value) {
        vars[key] = value;
    });
    return vars.id;
}




