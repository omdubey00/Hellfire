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

