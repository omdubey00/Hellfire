import { V2 } from "./helper"


export function fillCircle(pos: V2, radius: number, style: string, context: CanvasRenderingContext2D) {
	const ctx = context
	ctx.beginPath()
	ctx.fillStyle = style
	ctx.arc(pos.x, pos.y, radius, 0, Math.PI * 2)
	ctx.fill()
}

export function clear(ctx: CanvasRenderingContext2D, height: number, width: number) {
	//ctx.fillStyle = "white"
	ctx.clearRect(0, 0, width, height)
}
