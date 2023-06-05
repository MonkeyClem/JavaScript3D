import * as THREE from 'three';

import { Scene, WebGLRenderer, AxesHelper, PerspectiveCamera, Mesh} from 'three';
import './styles.css';



const scene = new Scene();

scene.add(new AxesHelper);

const camera = new PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.01, 
    1000
    );

camera.position.z = 2;
camera.position.y = 0.5;
camera.position.x = 0.5

scene.add(camera)

const cube = new Mesh(
    new THREE.BoxBufferGeometry(1, 1, 1),
    new THREE.MeshNormalMaterial()
)
scene.add(cube)

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.appendChild(renderer.domElement)
renderer.render(scene, camera)

function tick () {
    renderer.render(scene, camera);
    camera.position.x += 0.01;
    camera.lookAt(0,0,0)
    requestAnimationFrame(tick)
}

tick()

window.addEventListener('resize' , () =>{
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}
)