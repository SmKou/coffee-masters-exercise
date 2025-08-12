import './style.css'

const size = {
	short: "Short (8 fl oz)",
	tall: "Tall (12 fl oz)",
	grande: "Grande (16 fl oz)",
	venti: "Venti (20 fl oz)"
}

const amount = {
	none: addon => "No " + addon,
	little: addon => "Lite " + addon,
	usual: addon => addon,
	a_lot: addon => "Extra " + addon
}

const selection = {
	item: "",
	size: "",
	addons: ""
}
const order = {}

document.querySelectorAll("#prod figure").forEach(fig => {
	const id = fig.id
	Object.keys(size).forEach(size_abbr => {
		const btn = document.createElement("button")
		btn.setAttribute("title", size[size_abbr])
		btn.append(document.createTextNode(size_abbr))
		btn.addEventListener("click", () => {
			const form = document.querySelector("#prod form")
			if (form.classList.contains("hidden"))
				form.classList.remove("hidden")
			selection.item = id
			selection.size = size_abbr
		})
		document.querySelector(`#${id} .size-btns`).append(btn)
	})
})

const addon_amount = (name) => {
	const field = document.createElement("fieldset")
	const legend = document.createElement("legend")
	legend.append(document.createTextNode("How much " + name + "?"))
	field.append(legend)
	Object.keys(amount).forEach(amt => {
		const addon = amount[amt](name)
		const ipt = document.createElement("input")
		ipt.id = name + "_" + amt
		ipt.type = "radio"
		ipt.name = name + "_addon"

		const label = document.createElement("label")
		label.setAttribute("for", ipt.id)
		label.append(document.createTextNode(addon))
	})
}

// document.querySelectorAll("#prod form details").forEach(details => {
// 	details.addEventListener("change")
// })

document.querySelector("#prod form").addEventListener("submit", e => {
	e.preventDefault()
})
