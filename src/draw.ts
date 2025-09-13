export interface Circle {
	x: number
	y: number
	radius: number
	startAngle: number
	closeAngle: number
	fillstyle: string
	dx: number
	dy: number
}


export function fillCircle(circle: Circle, context: CanvasRenderingContext2D) {
	const ctx = context
	ctx.beginPath()
	ctx.fillStyle = circle.fillstyle
	ctx.arc(circle.x, circle.y, circle.radius, circle.startAngle, circle.closeAngle)
	ctx.fill()
}

export function clear(ctx: CanvasRenderingContext2D, height: number, width: number) {
	//ctx.fillStyle = "white"
	ctx.clearRect(0, 0, width, height)
}
