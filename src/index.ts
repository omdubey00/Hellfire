import { Circle, clear, fillCircle } from "./draw"

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

	const speed = 1
	const circle: Circle = {
		x: width / 2,
		y: height / 2,
		radius: 50,
		startAngle: 0,
		closeAngle: PI * 2,
		fillstyle: "red",
		dx: speed,
		dy: speed,
	}
	const audio: HTMLAudioElement | null = document.getElementById("wall-sound")


	clear(ctx, height, width)
	fillCircle(circle, ctx)

	let start: undefined | number;
	function step(timestamp: number, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
		if (start === undefined) {
			start = timestamp
		}
		const deltaTime = (timestamp - start) * 0.001 // this is you have got in seconds so now we can use it to do calculations in seconds
		start = timestamp

		circle.x += circle.dx * deltaTime
		circle.y += circle.dy * deltaTime

		if (circle.x + circle.radius >= width || circle.x - circle.radius <= 0) {
			circle.dx = - circle.dx
		}
		if (circle.y + circle.radius >= height || circle.y - circle.radius <= 0) {
			circle.dy = - circle.dy
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
		if (e.key === "ArrowRight") {
			circle.x += circle.dx * 10
		}
		else if (e.key === "ArrowLeft") {
			circle.x -= circle.dx * 10
		}
		else if (e.key === "ArrowUp") {
			circle.y -= circle.dy * 10
		}
		else if (e.key === "ArrowDown") {
			circle.y += circle.dy * 10
		}

	})

})()


