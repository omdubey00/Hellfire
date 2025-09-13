import { Circle, clear, fillCircle } from "./draw"
import { gameLoop } from "./gameLoop"

export function drawCanvas(canvas: HTMLCanvasElement, height: number, width: number, circle: Circle) {
	const ctx = canvas.getContext("2d")
	if (!ctx) {
		return
	}

	clear(ctx, height, width)
	fillCircle(circle, ctx)
	console.log("drawn")


	gameLoop(ctx, canvas, height, width, circle)
}
