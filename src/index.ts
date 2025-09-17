import ts from "typescript"
import { Circle, clear, fillCircle } from "./draw"
import { V2 } from "./helper"

(() => {
	const canvas: HTMLCanvasElement | null = document.getElementById("hellfire")
	if (!canvas) {
		return
	}
	canvas.height = window.innerHeight
	canvas.width = window.innerWidth

	let height = canvas.height
	let width = canvas.width
	const PI = Math.PI

	const ctx = canvas.getContext("2d")
	if (!ctx) {
		return
	}

	const speed = 1000
	const circle: Circle = {
		position: new V2(width / 2, height / 2), // converted the normal x and y in vector coordinates. 
		velocity: new V2(0, 0),
		radius: 50,
		startAngle: 0,
		closeAngle: PI * 2,
		fillstyle: "red",
	}

	const directionMap = {
		'f': new V2(speed, 0),
		'a': new V2(-speed, 0),
		'j': new V2(0, speed),
		'k': new V2(0, -speed),
	}


	clear(ctx, height, width)
	fillCircle(circle, ctx)

	let start: undefined | number;
	function step(timestamp: number, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
		if (start === undefined) {
			start = timestamp
		}
		const deltaTime = (timestamp - start) * 0.001 // this is you have got in seconds so now we can use it to do calculations in seconds
		start = timestamp

		circle.position = circle.position.add(circle.velocity.scale(deltaTime))

		if (circle.position.x + circle.radius >= width || circle.position.x - circle.radius <= 0) {
			circle.velocity.x = - circle.velocity.x
		}
		if (circle.position.y + circle.radius >= height || circle.position.y - circle.radius <= 0) {
			circle.velocity.y = - circle.velocity.y

		}
		canvas.height = window.innerHeight
		canvas.width = window.innerWidth

		height = canvas.height
		width = canvas.width

		clear(ctx, height, width)
		fillCircle(circle, ctx)

		requestAnimationFrame((timestamp) => {
			step(timestamp, ctx, canvas)
		})

	}
	requestAnimationFrame((timestamp) => {
		step(timestamp, ctx, canvas)
	})

	document.body.addEventListener("keydown", (e) => {
		console.log(e.key)
		if (e.key in directionMap) {
			circle.velocity = circle.velocity.add(directionMap[e.key])
		}
	})
	document.body.addEventListener("keyup", (e) => {
		console.log(e.key)
		if (e.key in directionMap) {
			circle.velocity = circle.velocity.sub(directionMap[e.key])
		}
	})

})()


