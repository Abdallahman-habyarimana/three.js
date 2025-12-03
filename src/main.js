import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const scene = new THREE.Scene();

const cubeGeometry = new THREE.BoxGeometry(1,1,1);
const cubeMaterial = new THREE.MeshBasicMaterial({ color: "red", cursor: "pointer"})

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);

scene.add(cubeMesh)

// initialize the camera
const camera = new THREE.PerspectiveCamera(
  35, 
  window.innerWidth / window.innerHeight, 
  0.2, 
  65);

camera.position.z = 5

scene.add(camera)

//initialise render
const canvas = document.querySelector("canvas.threejs")
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

// instatiate the controls
const controls = new OrbitControls(camera, canvas);

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera)