import { Game } from "./helper"
import { directionMap, radius, V2 } from "./global"

(() => {
	const canvas: HTMLCanvasElement | null = document.getElementById("hellfire")
	if (!canvas) {
		return
	}

	canvas.height = window.innerHeight
	canvas.width = window.innerWidth
	let height = canvas.height
	let width = canvas.width

	const ctx = canvas.getContext("2d")
	if (!ctx) {
		return
	}

	const game = new Game() // Here I am creating a new game Instance here we go. 

	let start: undefined | number;
	function step(timestamp: number, ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
		if (start === undefined) {
			start = timestamp
		}
		const dt = (timestamp - start) * 0.001 // this is you have got in seconds so now we can use it to do calculations in seconds
		start = timestamp
		game.update(dt)


		if (game.pos.x + radius >= width || game.pos.x - radius <= 0) {
			game.velocity.x = - game.velocity.x
		}
		if (game.pos.y + radius >= height || game.pos.y - radius <= 0) {
			game.velocity.y = - game.velocity.y

		}
		canvas.height = window.innerHeight
		canvas.width = window.innerWidth

		height = canvas.height
		width = canvas.width

		game.render(ctx)

		requestAnimationFrame((timestamp) => {
			step(timestamp, ctx, canvas)
		})

	}
	requestAnimationFrame((timestamp) => {
		step(timestamp, ctx, canvas)
	})

	document.body.addEventListener("keydown", (e) => {
		console.log(e.key)
		game.pressedKeys.add(e.key)
		game.keydown(e)
	})
	document.body.addEventListener("keyup", (e) => {
		console.log(e.key)
		game.pressedKeys.delete(e.key)
	})

})()


