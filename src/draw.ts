import { V2 } from "./helper"

export interface Circle {
	position: V2
	velocity: V2
	radius: number
	startAngle: number
	closeAngle: number
	fillstyle: string
}


export function fillCircle(circle: Circle, context: CanvasRenderingContext2D) {
	const ctx = context
	ctx.beginPath()
	ctx.fillStyle = circle.fillstyle
	ctx.arc(circle.position.x, circle.position.y, circle.radius, circle.startAngle, circle.closeAngle)
	ctx.fill()
}

export function clear(ctx: CanvasRenderingContext2D, height: number, width: number) {
	//ctx.fillStyle = "white"
	ctx.clearRect(0, 0, width, height)
}
