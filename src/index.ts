import { Circle, clear, fillCircle } from "./draw"

(() => {
	const canvas: HTMLCanvasElement | null = document.getElementById("hellfire")
	if (!canvas) {
		return
	}
	canvas.height = window.innerHeight
	canvas.width = window.innerWidth

	const height = canvas.height
	const width = canvas.width
	const PI = Math.PI

	const ctx = canvas.getContext("2d")
	if (!ctx) {
		return
	}

	const circle: Circle = {
		x: width / 2,
		y: height / 2,
		radius: 50,
		startAngle: 0,
		closeAngle: PI * 2,
		fillstyle: "red",
		dx: 100,
		dy: 100,
	}


	clear(ctx, height, width)
	fillCircle(circle, ctx)

	let start: undefined | number;
	function step(timestamp: number, ctx: CanvasRenderingContext2D) {
		if (start === undefined) {
			start = timestamp
		}
		const deltaTime = (timestamp - start) * 0.001 // this is you have got in seconds so now we can use it to do calculations in seconds
		start = timestamp

		circle.x += circle.dx * deltaTime
		circle.y += circle.dy * deltaTime

		if (circle.x + circle.radius > width || circle.x - circle.radius < 0) {
			circle.dx = - circle.dx
		}
		if (circle.y + circle.radius > height || circle.y - circle.radius < 0) {
			circle.dy = - circle.dy
		}
		clear(ctx, height, width)
		fillCircle(circle, ctx)

		requestAnimationFrame((timestamp) => {
			step(timestamp, ctx)
		})

	}
	requestAnimationFrame((timestamp) => {
		step(timestamp, ctx)
	})

})()


