/**
 * Note: custom
 * Indicates a customization as in adding to or modifying a
 * selected product
 */

import './style.css'

const selected_item = {
	item: "",
	size: "",
	addons: {}
}

const order = {}

const sizes = {
	short: "Short (8 fl oz)",
	tall: "Tall (12 fl oz)",
	grande: "Grande (16 fl oz)",
	venti: "Venti (20 fl oz)"
}

const addons = {
	foam: ["whip cream", "lavender", "peppermint", "salted caramel", "strawberry"],
	dairy: ["milk", "chocolate milk", "dulce de leche", "sweetened condensed milk"],
	dairy_alternative: ["almond milk", "coconut milk", "oatmilk"],
	creamer: ["french vanilla", "hazelnut", "southern butter pecan"],
	sweetener: ["sugar", "honey", "lavender syrup", "maple syrup", "pistachio syrup", "pumpkin syrup", "vanilla"],
	spice: ["allspice", "almond extract", "cardamom", "cayenne pepper", "cinnamon", "ginger", "nutmeg", "vanilla extract"]
}

const addon_amounts = {
	none: addon => "No " + addon,
	little: addon => "Lite " + addon,
	usual: addon => addon.slice(0,1).toUpperCase() + addon.slice(1),
	a_lot: addon => "Extra " + addon
}

for (const addon of Object.keys(addons)) {
	const addon_name = addon
		.split("_")
		.map(w => w
			.slice(0,1)
			.toUpperCase()
			.concat(w.slice(1))
		)
		.join(" ")
	const details_container = document.createElement("details")
	const label = document.createElement("summary")
	label.append(document.createTextNode(addon_name))
	details_container.append(label)

	const opts = addons[addon]
	opts.forEach(opt => {
		const option_container = document.createElement("div")

		const name = opt.slice(0,1).toUpperCase() + opt.slice(1)
		const item_name = document.createElement("span")
		item_name.append(document.createTextNode(name))
		option_container.append(item_name)

		const id = opt
			.split(" ")
			.join("-")
			.concat("-" + addon)
		const amount_select = document.createElement("select")
		amount_select.id = id
		amount_select.name = opt

		const blank_option = document.createElement("option")
		blank_option.value = ""
		amount_select.append(blank_option)

		for (const amount of Object.keys(addon_amounts)) {
			const option = document.createElement("option")
			option.value = amount
			option.append(
				document.createTextNode(
					amount
					.split("_")
					.join(" ")
				))
			amount_select.append(option)
		}

		amount_select.addEventListener("change", e => {
			if (!e.value && selected_item.addons[opt]) {
				delete selected_item.addons[opt]
				amount.classList.remove("active-option")
				return;
			}
			selected_item.addons[opt] = e.value
			if (!amount.classList.contains("active-option"))
				amount.classList.add("active-option")
		})
		option_container.append(amount_select)
		details_container.append(option_container)
	})
	document.querySelector(".options-container").append(details_container)
}



document.querySelector("dialog").showModal()
