import { Circle, clear, fillCircle } from "./draw";

export function gameLoop(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, height: number, width: number, circle: Circle) {
	requestAnimationFrame((timestamp) => {
		console.log("inside frame")
		step(timestamp, ctx, canvas, height, width)
	})
	function step(timestamp: number, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, height: number, width: number) {
		let start: undefined | number;
		if (start === undefined) {
			start = timestamp
		}
		const deltaTime = (timestamp - start) * 0.001 // this is you have got in seconds so now we can use it to do calculations in seconds
		start = timestamp

		circle.x += circle.dx * deltaTime
		circle.y += circle.dy * deltaTime
		console.log(circle.x)
		console.log(circle.y)

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
		console.log("last step drawn")

		clear(ctx, height, width)
		fillCircle(circle, ctx)

		requestAnimationFrame((timestamp) => {
			step(timestamp, ctx, canvas, height, width)
		})

	}
}

