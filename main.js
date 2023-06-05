import * as THREE from 'three';

import { Scene, WebGLRenderer, AxesHelper } from 'three';
import './styles.css';

const scene = new Scene();
const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
document.body.appendChild(renderer.domElement)

