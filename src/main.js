/**
 * Note: custom
 * Indicates a customization as in adding to or modifying a
 * selected product
 */

import './style.css'

const items = {
	coffee: {
		title: "Coffee",
		img: "/Medium-Roast.png",
		price: 3.50,
		cal: 5
	},
	americano: {
		title: "Caffe Americano",
		img: "/Caffe-Americano.png",
		price: 4.75,
		cal: 5
	},
	latte: {
		title: "Caffe Latte",
		img: "/Caffe-Latte.png",
		price: 6.50,
		cal: 100
	},
	cappuccino: {
		title: "Cappuccino",
		img: "/Cappuccino.png",
		price: 5.75,
		cal: 70
	},
	cortado: {
		title: "Cortado",
		img: "/Cortado-starbucks.png",
		price: 5.75,
		cal: 90
	},
	macchiato: {
		title: "Expresso Macchiato",
		img: "/Espresso-Macchiato.png",
		price: 3.75,
		cal: 10
	},
	cdl: {
		title: "Cinnamon Dolce Latte",
		img: "/Cinnamon-Dolce-Latte.png",
		price: 6.50,
		cal: 190
	},
	ybt: {
		title: "Yak Butter Tea",
		img: "/Flat-White.png",
		price: 7.50,
		cal: 200
	},
	lol: {
		title: "Lavender Oatmilk Latte",
		img: "/Lavender-Oatmilk-Latte.png",
		price: 6.50,
		cal: 110
	}
}

const sizes = {
	short: "Short (8 fl oz)",
	tall: "Tall (12 fl oz)",
	grande: "Grande (16 fl oz)",
	venti: "Venti (20 fl oz)"
}

const calories = (id) => `appr. ${items[id].cal} cal`

const selected_item = {
	item: "",
	size: "",
	addons: {}
}

const order = {}

const amounts = {
	none: addon => "No " + addon,
	little: addon => "Lite " + addon,
	usual: addon => addon.slice(0,1).toUpperCase() + addon.slice(1),
	a_lot: addon => "Extra " + addon
}

document.querySelectorAll('#product-grid figure').forEach(itm => {
	itm.addEventListener("click", e => {
		const item = items[e.id]
		const img = document.querySelector(`#${e.id} img`)
		img.title = item.title
		img.alt = item.title
		img.src = item.img
		const size_btns = document.querySelector(`#${e.id} .size-btns`)
		Object.keys(sizes).forEach(size => {
			const btn = document.createElement("button")
			btn.append(document.createTextNode(sizes[size]))
			btn.addEventListener("click", () => {
				selected_item.item = e.id
				selected_item.size = size
				document.querySelector("dialog").showModal()
			})
			size_btns.append(btn)
		})
		document.querySelector(`#${e.id} h3`)
			.append(document.createTextNode(item.title))
		document.querySelector(`#${e.id} .price`)
			.append(document.createTextNode("$" + item.price))
		document.querySelector(`#${e.id} .calories`)
			.append(document.createTextNode(calories(e.id)))
	})
})

document.querySelector("dialog").showModal()
