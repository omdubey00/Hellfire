export class V2 {
	x: number
	y: number

	constructor(x: number, y: number) {
		this.x = x
		this.y = y
	}

	add(that: V2) {
		return new V2(this.x + that.x, this.y + that.y)
	}

	sub(that: V2) {
		return new V2(this.x - that.x, this.y - that.y)
	}

	scale(s: number) {
		return new V2(this.x * s, this.y * s)
	}
}

export const speed = 500
export const radius = 50
export const directionMap = {
	'f': new V2(1.0, 0),
	'a': new V2(-1.0, 0),
	'j': new V2(0, 1.0),
	'k': new V2(0, -1.0),
}
