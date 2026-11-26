"use client";

import { useRef, useState } from "react";
import * as THREE from "three";

import { Canvas, useFrame, useThree } from "@react-three/fiber";

import {
	KeyboardControls,
	PointerLockControls,
	Environment,
	ContactShadows,
	RoundedBox,
	useKeyboardControls,
	Html,
} from "@react-three/drei";

const controls = [
	{ name: "forward", keys: ["KeyW", "ArrowUp"] },
	{ name: "backward", keys: ["KeyS", "ArrowDown"] },
	{ name: "left", keys: ["KeyA", "ArrowLeft"] },
	{ name: "right", keys: ["KeyD", "ArrowRight"] },
];

function MaterialBox({
	position,
	args,
	color,
	radius = 0.04,
	roughness = 0.75,
	metalness = 0,
}) {
	return (
		<RoundedBox
			position={position}
			args={args}
			radius={radius}
			smoothness={4}
			castShadow
			receiveShadow
		>
			<meshPhysicalMaterial
				color={color}
				roughness={roughness}
				metalness={metalness}
				clearcoat={0.12}
				clearcoatRoughness={0.55}
			/>
		</RoundedBox>
	);
}

function Wall({ position, args, color = "#E8DFD0" }) {
	return (
		<mesh position={position} castShadow receiveShadow>
			<boxGeometry args={args} />
			<meshStandardMaterial color={color} roughness={0.92} />
		</mesh>
	);
}

function WoodFloor() {
	return (
		<group>
			<mesh position={[0, -0.12, 0]} receiveShadow>
				<boxGeometry args={[12, 0.24, 10]} />
				<meshStandardMaterial color="#A77B50" roughness={0.55} />
			</mesh>

			{Array.from({ length: 24 }).map((_, i) => (
				<mesh
					key={i}
					position={[
						-5.7 + (i % 12) * 1.04,
						0.005,
						-4.5 + Math.floor(i / 12) * 9,
					]}
					receiveShadow
				>
					<boxGeometry args={[1, 0.012, 8.95]} />
					<meshStandardMaterial
						color={i % 2 === 0 ? "#B58B61" : "#98704A"}
						roughness={0.62}
					/>
				</mesh>
			))}
		</group>
	);
}

function MarbleFloor({ position, size }) {
	return (
		<mesh position={position} receiveShadow>
			<boxGeometry args={[size[0], 0.025, size[1]]} />
			<meshStandardMaterial color="#D8D0C4" roughness={0.27} metalness={0.03} />
		</mesh>
	);
}

function Window({ position, rotation = [0, 0, 0], width = 2.2 }) {
	return (
		<group position={position} rotation={rotation}>
			<mesh>
				<boxGeometry args={[width, 1.8, 0.09]} />
				<meshStandardMaterial color="#4A392D" roughness={0.55} />
			</mesh>

			<mesh position={[0, 0, 0.055]}>
				<boxGeometry args={[width - 0.12, 1.68, 0.025]} />
				<meshPhysicalMaterial
					color="#A9C7D7"
					roughness={0.08}
					metalness={0.05}
					transparent
					opacity={0.4}
				/>
			</mesh>

			<mesh position={[0, 0, 0.09]}>
				<boxGeometry args={[0.045, 1.7, 0.04]} />
				<meshStandardMaterial color="#F5F0E7" />
			</mesh>

			<mesh position={[0, 0, 0.09]}>
				<boxGeometry args={[width - 0.1, 0.045, 0.04]} />
				<meshStandardMaterial color="#F5F0E7" />
			</mesh>
		</group>
	);
}

function CeilingLight({ position }) {
	return (
		<group position={position}>
			<mesh>
				<cylinderGeometry args={[0.24, 0.3, 0.07, 48]} />
				<meshStandardMaterial
					color="#B99B69"
					metalness={0.72}
					roughness={0.24}
				/>
			</mesh>
			<mesh position={[0, -0.055, 0]}>
				<cylinderGeometry args={[0.19, 0.19, 0.025, 48]} />
				<meshStandardMaterial
					color="#FFF4D9"
					emissive="#FFD99A"
					emissiveIntensity={2.2}
					roughness={0.25}
				/>
			</mesh>
			<pointLight
				position={[0, -0.12, 0]}
				color="#FFE6BE"
				intensity={10}
				distance={6.5}
				decay={2}
			/>
		</group>
	);
}

function Sofa() {
	return (
		<group position={[-3.6, 0, 2.2]}>
			<MaterialBox
				position={[0, 0.35, 0]}
				args={[2.8, 0.48, 1.05]}
				color="#B9A58D"
			/>
			<MaterialBox
				position={[0, 0.85, -0.42]}
				args={[2.8, 0.85, 0.24]}
				color="#C9B8A2"
			/>
			{[-1.25, 1.25].map((x) => (
				<MaterialBox
					key={x}
					position={[x, 0.7, 0.02]}
					args={[0.28, 0.7, 1.05]}
					color="#A99177"
				/>
			))}
			{[-0.75, 0, 0.75].map((x) => (
				<MaterialBox
					key={x}
					position={[x, 0.68, -0.12]}
					args={[0.68, 0.42, 0.65]}
					color="#D4C4AE"
				/>
			))}
			{[-1, 1].map((x) => (
				<mesh key={x} position={[x, 0.12, 0.3]}>
					<cylinderGeometry args={[0.055, 0.055, 0.24, 16]} />
					<meshStandardMaterial color="#68452F" />
				</mesh>
			))}
		</group>
	);
}

function CoffeeTable() {
	return (
		<group position={[-3.4, 0, 0.45]}>
			{[-0.55, 0.55].map((x) =>
				[-0.35, 0.35].map((z) => (
					<mesh key={`${x}-${z}`} position={[x, 0.22, z]}>
						<cylinderGeometry args={[0.035, 0.035, 0.42, 12]} />
						<meshStandardMaterial color="#68452F" />
					</mesh>
				)),
			)}
			<MaterialBox
				position={[0, 0.45, 0]}
				args={[1.5, 0.08, 0.95]}
				color="#8A6241"
			/>
			<MaterialBox
				position={[0, 0.51, 0]}
				args={[1.42, 0.025, 0.87]}
				color="#D8CFC1"
				roughness={0.25}
			/>
			<mesh position={[0.3, 0.57, 0.12]}>
				<cylinderGeometry args={[0.09, 0.1, 0.04, 20]} />
				<meshStandardMaterial color="#B58B61" />
			</mesh>
		</group>
	);
}

function TVUnit() {
	return (
		<group position={[-5.2, 0, -1.4]}>
			<MaterialBox
				position={[0, 0.45, 0]}
				args={[0.35, 0.75, 2.8]}
				color="#68452F"
			/>
			<MaterialBox
				position={[0.22, 1.55, 0]}
				args={[0.12, 1.35, 2.25]}
				color="#101820"
				roughness={0.18}
				metalness={0.15}
			/>
			<mesh position={[0.29, 1.55, 0]}>
				<boxGeometry args={[0.012, 1.22, 2.12]} />
				<meshStandardMaterial
					color="#253341"
					emissive="#17232D"
					emissiveIntensity={0.2}
				/>
			</mesh>
		</group>
	);
}

function Bed({ position, size = [2.2, 2.6] }) {
	return (
		<group position={position}>
			<MaterialBox
				position={[0, 0.28, 0]}
				args={[size[0], 0.38, size[1]]}
				color="#68452F"
			/>
			<MaterialBox
				position={[0, 0.55, 0]}
				args={[size[0] - 0.12, 0.22, size[1] - 0.12]}
				color="#F0E9DF"
			/>
			<MaterialBox
				position={[0, 0.76, -size[1] / 2 + 0.5]}
				args={[size[0] - 0.18, 0.18, 0.65]}
				color="#E4D8C8"
			/>
			{[-0.55, 0.55].map((x) => (
				<MaterialBox
					key={x}
					position={[x, 0.88, -size[1] / 2 + 0.5]}
					args={[0.75, 0.15, 0.5]}
					color="#C8B59D"
				/>
			))}
			<MaterialBox
				position={[0, 0.9, 0.35]}
				args={[size[0] - 0.18, 0.12, 0.85]}
				color="#B49A7E"
			/>
			<MaterialBox
				position={[0, 1.2, -size[1] / 2 - 0.08]}
				args={[size[0], 1.35, 0.14]}
				color="#79583C"
			/>
		</group>
	);
}

function BedsideTable({ position }) {
	return (
		<group position={position}>
			<MaterialBox
				position={[0, 0.35, 0]}
				args={[0.55, 0.65, 0.5]}
				color="#79583C"
			/>
			<MaterialBox
				position={[0, 0.7, 0]}
				args={[0.62, 0.08, 0.56]}
				color="#A77B50"
			/>
			<mesh position={[0, 0.78, 0]}>
				<cylinderGeometry args={[0.12, 0.12, 0.06, 20]} />
				<meshStandardMaterial color="#D5C6AF" />
			</mesh>
			<pointLight
				position={[0, 1.1, 0]}
				color="#FFD9A0"
				intensity={5}
				distance={2}
			/>
		</group>
	);
}

function DiningArea() {
	return (
		<group position={[-1.9, 0, -2.8]}>
			<MaterialBox
				position={[0, 0.85, 0]}
				args={[2.2, 0.12, 1.15]}
				color="#8A6241"
			/>
			<MaterialBox
				position={[0, 0.93, 0]}
				args={[2.05, 0.035, 1.02]}
				color="#D8CFC1"
				roughness={0.22}
			/>
			{[-0.8, 0.8].map((x) =>
				[-0.35, 0.35].map((z) => (
					<mesh key={`${x}-${z}`} position={[x, 0.42, z]}>
						<cylinderGeometry args={[0.045, 0.045, 0.82, 12]} />
						<meshStandardMaterial color="#68452F" />
					</mesh>
				)),
			)}
			{[-1.35, 1.35].map((x) => (
				<group key={x} position={[x, 0, 0]}>
					<MaterialBox
						position={[0, 0.5, 0]}
						args={[0.5, 0.12, 0.5]}
						color="#68452F"
					/>
					<MaterialBox
						position={[0, 0.85, -0.18]}
						args={[0.5, 0.7, 0.12]}
						color="#B9A58D"
					/>
					<MaterialBox
						position={[0, 0.25, 0]}
						args={[0.42, 0.5, 0.42]}
						color="#68452F"
					/>
				</group>
			))}
		</group>
	);
}

function Kitchen() {
	return (
		<group position={[-3.9, 0, -4.25]}>
			<MaterialBox
				position={[0, 0.48, 0]}
				args={[3.4, 0.95, 0.85]}
				color="#D5C6AF"
			/>
			<MaterialBox
				position={[0, 1.02, 0]}
				args={[3.55, 0.12, 0.98]}
				color="#D8D0C4"
				roughness={0.22}
			/>
			<MaterialBox
				position={[0, 1.85, -0.28]}
				args={[3.3, 0.8, 0.38]}
				color="#E6D9C6"
			/>
			{[-1.1, 0, 1.1].map((x) => (
				<mesh key={x} position={[x, 1.85, -0.075]}>
					<boxGeometry args={[0.025, 0.65, 0.025]} />
					<meshStandardMaterial color="#A88755" metalness={0.7} />
				</mesh>
			))}
			<MaterialBox
				position={[-0.8, 1.1, 0]}
				args={[0.75, 0.025, 0.55]}
				color="#242B31"
				roughness={0.2}
			/>
			<mesh position={[0.9, 1.14, 0]}>
				<cylinderGeometry args={[0.2, 0.2, 0.025, 32]} />
				<meshStandardMaterial color="#A88755" metalness={0.8} roughness={0.2} />
			</mesh>
			<mesh position={[0.9, 1.35, 0]}>
				<torusGeometry args={[0.2, 0.025, 12, 32]} />
				<meshStandardMaterial color="#A88755" metalness={0.8} />
			</mesh>
		</group>
	);
}

function Wardrobe({ position }) {
	return (
		<group position={position}>
			<MaterialBox
				position={[0, 1.25, 0]}
				args={[0.65, 2.5, 2.1]}
				color="#79583C"
			/>
			{[-0.5, 0.5].map((z) => (
				<mesh key={z} position={[0.34, 1.25, z]}>
					<boxGeometry args={[0.035, 2.35, 0.025]} />
					<meshStandardMaterial color="#C9A875" metalness={0.7} />
				</mesh>
			))}
		</group>
	);
}

function Plant({ position, scale = 1 }) {
	return (
		<group position={position} scale={scale}>
			<mesh position={[0, 0.25, 0]}>
				<cylinderGeometry args={[0.2, 0.14, 0.45, 20]} />
				<meshStandardMaterial color="#A77B50" roughness={0.8} />
			</mesh>
			{Array.from({ length: 7 }).map((_, i) => {
				const angle = (i / 7) * Math.PI * 2;
				return (
					<mesh
						key={i}
						position={[
							Math.cos(angle) * 0.2,
							0.75 + (i % 3) * 0.12,
							Math.sin(angle) * 0.2,
						]}
						rotation={[0.3, angle, 0.45]}
					>
						<sphereGeometry args={[0.13, 12, 12]} />
						<meshStandardMaterial color={i % 2 ? "#496D4C" : "#65865A"} />
					</mesh>
				);
			})}
		</group>
	);
}

function Apartment() {
	return (
		<group>
			<WoodFloor />

			{/* Marble kitchen and bathroom flooring */}
			<MarbleFloor position={[-3.9, 0.025, -3.75]} size={[4, 2.3]} />
			<MarbleFloor position={[4.4, 0.025, -3.7]} size={[2.8, 2.4]} />

			{/* Outer walls with window openings */}
			<Wall position={[0, 1.5, -5]} args={[12, 3, 0.2]} />
			<Wall position={[-6, 1.5, 0]} args={[0.2, 3, 10]} />
			<Wall position={[6, 1.5, 0]} args={[0.2, 3, 10]} />

			{/* Front wall segments leave the entrance open */}
			<Wall position={[-4.6, 1.5, 5]} args={[2.8, 3, 0.2]} />
			<Wall position={[3.9, 1.5, 5]} args={[4.2, 3, 0.2]} />

			{/* Internal partition with a central doorway */}
			<Wall position={[0, 1.5, -3.5]} args={[0.15, 3, 3]} />
			<Wall position={[0, 1.5, 3.3]} args={[0.15, 3, 3.4]} />

			{/* Bedroom partition */}
			<Wall position={[3.1, 1.5, -3.5]} args={[0.15, 3, 3]} />
			<Wall position={[3.1, 1.5, 3.5]} args={[0.15, 3, 3]} />

			{/* Bedroom divider */}
			<Wall position={[4.55, 1.5, 0]} args={[2.9, 3, 0.15]} />

			{/* Windows */}
			<Window position={[-2.8, 2.05, -4.88]} width={2.5} />
			<Window position={[4.5, 2.05, -4.88]} width={2.1} />
			<Window
				position={[-5.88, 2.05, 1]}
				rotation={[0, Math.PI / 2, 0]}
				width={2.2}
			/>
			<Window
				position={[5.88, 2.05, 1]}
				rotation={[0, Math.PI / 2, 0]}
				width={2.2}
			/>

			{/* Ceiling trim */}
			<Wall
				position={[0, 2.95, -4.8]}
				args={[11.7, 0.12, 0.12]}
				color="#F7F5F0"
			/>
			<Wall
				position={[-5.8, 2.95, 0]}
				args={[0.12, 0.12, 9.7]}
				color="#F7F5F0"
			/>
			<Wall
				position={[5.8, 2.95, 0]}
				args={[0.12, 0.12, 9.7]}
				color="#F7F5F0"
			/>

			{/* Living room */}
			<Sofa />
			<CoffeeTable />
			<TVUnit />
			<Plant position={[-5, 0, 3.6]} scale={1.2} />

			{/* Dining */}
			<DiningArea />

			{/* Kitchen */}
			<Kitchen />

			{/* Master bedroom */}
			<Bed position={[4.5, 0, 2.7]} />
			<BedsideTable position={[3.35, 0, 2.7]} />
			<BedsideTable position={[5.65, 0, 2.7]} />
			<Wardrobe position={[5.45, 0, 0.8]} />
			<Plant position={[5.4, 0, 4.35]} scale={0.8} />

			{/* Second bedroom */}
			<Bed position={[4.5, 0, -2.8]} size={[1.8, 2.1]} />
			<Wardrobe position={[5.45, 0, -4.2]} />

			{/* Ceiling lights */}
			<CeilingLight position={[-3, 2.85, 1]} />
			<CeilingLight position={[-2, 2.85, -3]} />
			<CeilingLight position={[4.5, 2.85, 2]} />
			<CeilingLight position={[4.5, 2.85, -3]} />

			{/* Rugs */}
			<mesh position={[-3.5, 0.025, 1.1]} rotation={[-Math.PI / 2, 0, 0]}>
				<planeGeometry args={[3.4, 2.1]} />
				<meshStandardMaterial color="#D7C6AF" roughness={0.95} />
			</mesh>
			<mesh position={[4.5, 0.03, 2.6]} rotation={[-Math.PI / 2, 0, 0]}>
				<planeGeometry args={[2.8, 3.1]} />
				<meshStandardMaterial color="#D8C9B5" roughness={0.95} />
			</mesh>
		</group>
	);
}

function Player({ moveRef }) {
	const [, get] = useKeyboardControls();
	const direction = useRef(new THREE.Vector3());
	const movement = useRef(new THREE.Vector3());
	const side = useRef(new THREE.Vector3());

	useFrame((state, delta) => {
		const { forward, backward, left, right } = get();
		const mobileX = moveRef.current.x;
		const mobileForward = moveRef.current.forward;

		state.camera.getWorldDirection(direction.current);
		direction.current.y = 0;
		direction.current.normalize();

		// With this camera orientation, cross(forward, up) points RIGHT.
		side.current.crossVectors(direction.current, state.camera.up).normalize();

		const horizontal = (right ? 1 : 0) - (left ? 1 : 0) + mobileX;
		const vertical = (forward ? 1 : 0) - (backward ? 1 : 0) + mobileForward;

		movement.current
			.copy(direction.current)
			.multiplyScalar(vertical)
			.addScaledVector(side.current, horizontal);

		if (movement.current.lengthSq() > 1) movement.current.normalize();

		if (movement.current.lengthSq() > 0.0001) {
			state.camera.position.addScaledVector(movement.current, 3.1 * delta);
		}

		state.camera.position.x = THREE.MathUtils.clamp(
			state.camera.position.x,
			-5.4,
			5.4,
		);
		state.camera.position.z = THREE.MathUtils.clamp(
			state.camera.position.z,
			-4.5,
			4.6,
		);
		state.camera.position.y = 1.65;
	});

	return null;
}

function MobileControls({ moveRef }) {
	const { camera } = useThree();
	const [stick, setStick] = useState({ x: 0, y: 0 });
	const joystickPointer = useRef(null);
	const lookPointer = useRef(null);
	const lookLast = useRef({ x: 0, y: 0 });

	const updateStick = (event) => {
		const rect = event.currentTarget.getBoundingClientRect();
		const radius = rect.width * 0.34;
		const dx = event.clientX - (rect.left + rect.width / 2);
		const dy = event.clientY - (rect.top + rect.height / 2);
		const length = Math.hypot(dx, dy);
		const scale = length > radius ? radius / length : 1;
		const x = (dx * scale) / radius;
		const y = (dy * scale) / radius;

		moveRef.current.x = x;
		moveRef.current.forward = -y;
		setStick({ x: x * radius, y: y * radius });
	};

	const stopStick = () => {
		joystickPointer.current = null;
		moveRef.current.x = 0;
		moveRef.current.forward = 0;
		setStick({ x: 0, y: 0 });
	};

	const startLook = (event) => {
		lookPointer.current = event.pointerId;
		lookLast.current = { x: event.clientX, y: event.clientY };
		event.currentTarget.setPointerCapture(event.pointerId);
	};

	const moveLook = (event) => {
		if (lookPointer.current !== event.pointerId) return;
		const dx = event.clientX - lookLast.current.x;
		const dy = event.clientY - lookLast.current.y;
		lookLast.current = { x: event.clientX, y: event.clientY };

		camera.rotation.order = "YXZ";
		camera.rotation.y -= dx * 0.004;
		camera.rotation.x = THREE.MathUtils.clamp(
			camera.rotation.x - dy * 0.004,
			-Math.PI / 2.2,
			Math.PI / 2.2,
		);
	};

	const stopLook = () => {
		lookPointer.current = null;
	};

	return (
		<Html fullscreen>
			<div className="pointer-events-none absolute inset-0 z-20 md:hidden">
				<div
					className="pointer-events-auto absolute bottom-8 left-7 flex h-36 w-36 touch-none items-center justify-center rounded-full border border-white/35 bg-[#0B1B33]/30 backdrop-blur-sm"
					onPointerDown={(event) => {
						joystickPointer.current = event.pointerId;
						event.currentTarget.setPointerCapture(event.pointerId);
						updateStick(event);
					}}
					onPointerMove={(event) => {
						if (joystickPointer.current === event.pointerId) updateStick(event);
					}}
					onPointerUp={stopStick}
					onPointerCancel={stopStick}
				>
					<div className="h-16 w-16 rounded-full border border-[#E4C77B]/80 bg-[#C9A24B]/50 shadow-lg" />
					<div
						className="pointer-events-none absolute h-12 w-12 rounded-full border border-white/60 bg-[#E4C77B]/90 shadow-xl"
						style={{
							transform: `translate(${stick.x}px, ${stick.y}px)`,
						}}
					/>
				</div>

				<div
					className="pointer-events-auto absolute bottom-0 right-0 top-20 w-[48%] touch-none"
					onPointerDown={startLook}
					onPointerMove={moveLook}
					onPointerUp={stopLook}
					onPointerCancel={stopLook}
				/>
				<div className="absolute bottom-4 right-5 text-[10px] tracking-wide text-white/60">
					JOYSTICK: MOVE · DRAG RIGHT: LOOK
				</div>
			</div>
		</Html>
	);
}

function Scene({ moveRef }) {
	return (
		<>
			<color attach="background" args={["#D8D4CD"]} />
			<fog attach="fog" args={["#D8D4CD", 17, 34]} />

			<ambientLight intensity={0.38} />
			<hemisphereLight
				skyColor="#FFF1D9"
				groundColor="#79634D"
				intensity={0.85}
			/>

			<directionalLight
				position={[-4, 8, 4]}
				intensity={2.8}
				color="#FFF0D8"
				castShadow
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
				shadow-camera-far={25}
				shadow-camera-left={-10}
				shadow-camera-right={10}
				shadow-camera-top={10}
				shadow-camera-bottom={-10}
				shadow-bias={-0.00015}
			/>

			{/* Soft window daylight and warm room fill */}
			<pointLight
				position={[-2.8, 2.2, -4.1]}
				color="#D8E9FF"
				intensity={7}
				distance={8}
				decay={2}
			/>
			<pointLight
				position={[4.5, 2.2, -4.1]}
				color="#E4EDFF"
				intensity={6}
				distance={7}
				decay={2}
			/>
			<pointLight
				position={[-5.1, 2.1, 1]}
				color="#FFE6C5"
				intensity={4}
				distance={6}
				decay={2}
			/>
			<pointLight
				position={[4.7, 2.1, 2]}
				color="#FFE6C5"
				intensity={4}
				distance={6}
				decay={2}
			/>

			<Apartment />
			<Environment preset="apartment" />

			<ContactShadows
				position={[0, 0.015, 0]}
				opacity={0.3}
				scale={14}
				blur={2.8}
				far={4}
			/>

			<Player moveRef={moveRef} />
			<MobileControls moveRef={moveRef} />
			<PointerLockControls />
		</>
	);
}

export default function ApartmentTour() {
	const moveRef = useRef({ x: 0, forward: 0 });

	return (
		<div className="relative h-screen w-full overflow-hidden bg-[#0B1B33]">
			<div className="pointer-events-none absolute left-5 top-5 z-10 rounded-xl border border-[#C9A24B]/40 bg-[#0B1B33]/85 px-5 py-4 text-white backdrop-blur-md">
				<p className="text-xs uppercase tracking-[0.25em] text-[#E4C77B]">
					Orybite Real Estate
				</p>
				<h2 className="mt-1 text-lg font-semibold">Luxury 2BHK Apartment</h2>
				<p className="mt-2 text-xs text-white/65">
					WASD to move · A = left · D = right · Mouse to look
				</p>
			</div>

			<div className="pointer-events-none absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 rounded-full border border-white/20 bg-[#0B1B33]/80 px-5 py-3 text-xs text-white/80 backdrop-blur-md md:block">
				Click inside the apartment to look around
			</div>

			<KeyboardControls map={controls}>
				<Canvas
					shadows
					camera={{
						position: [-3.5, 1.65, 3.8],
						fov: 72,
						near: 0.1,
						far: 100,
					}}
					dpr={[1, 1.5]}
					gl={{
						antialias: true,
						toneMapping: THREE.ACESFilmicToneMapping,
						toneMappingExposure: 1.2,
					}}
				>
					<Scene moveRef={moveRef} />
				</Canvas>
			</KeyboardControls>
		</div>
	);
}
