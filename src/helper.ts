import { clear, fillCircle } from "./draw"
import { directionMap, radius, speed, V2 } from "./global"

export class Game {
	pos: V2
	velocity: V2
	pressedKeys: Set<string>
	popup: TutorialPopUp
	bullet: Set<Bullet>

	constructor() {
		this.pos = new V2(radius + 10, radius + 10)
		this.velocity = new V2(0, 0)
		this.pressedKeys = new Set()
		this.popup = new TutorialPopUp()
		this.bullet = new Set()
	}

	update(dt: number) {
		this.velocity = new V2(0, 0) // setting the velocity again and again in the requestframe.  

		for (let key of this.pressedKeys) {
			if (key in directionMap) {
				this.velocity = this.velocity.add(directionMap[key].scale(speed))
			}
		}

		this.pos = this.pos.add(this.velocity.scale(dt))
		this.popup.update(dt)
		for (let bullet of this.bullet) {
			bullet.update(dt)
		}
	}

	render(ctx: CanvasRenderingContext2D) {
		const height = ctx.canvas.height
		const width = ctx.canvas.width

		clear(ctx, height, width)
		fillCircle(this.pos, radius, "red", ctx)
		ctx.fillStyle = "green"
		ctx.font = "75px Russo one"
		ctx.fillText("ASDF to Play HellFire", width / 2 - 400, height / 2)
		this.popup.render(ctx) // here I am rendering the popup and previously I hvae updated it in deltaTima. here we go with some good game dev knowledge. 

		for (let bullet of this.bullet) {
			bullet.render(ctx)
		}
	}

	keydown(event: KeyboardEvent) {
		this.pressedKeys.add(event.key)
	}

	keyUp(event: KeyboardEvent) {
		this.pressedKeys.delete(event.key)
	}

	onclick(event: MouseEvent) {
		let mousePos = new V2(event.clientX, event.clientY)
		this.bullet.add(new Bullet(this.pos, mousePos))
	}
}

export class Bullet {
	pos: V2
	radius: number
	velocity: V2
	mousePos: V2
	init: V2

	constructor(pos: V2, target: V2) {
		this.pos = pos
		this.init = pos
		this.radius = radius - 20
		this.mousePos = target
		this.velocity = (this.mousePos.sub(this.init).scale(2))
	}

	update(dt: number) {
		this.pos = this.pos.add(this.velocity.scale(dt))
	}

	render(ctx: CanvasRenderingContext2D) {
		const height = ctx.canvas.height
		const width = ctx.canvas.width

		fillCircle(this.pos, this.radius, "red", ctx)
	}

}

export class TutorialPopUp {
	pos: V2
	alpha: number
	dalpha: number

	constructor() {
		this.pos = new V2(0, 0)
		this.alpha = 0.0
		this.dalpha = 0.0
	}

	update(dt: number) {
	}

	render(ctx: CanvasRenderingContext2D) {
	}

	fadeIn() {
		this.dalpha = 1.0
		this.alpha = 0.0
	}
	fadeOut() { // this part I dont get in creating animation and why should we do this in the first place.
		this.dalpha = -1.0
		this.alpha = 1.0
	}

}

