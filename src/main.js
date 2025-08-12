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

document.querySelectorAll("#prod figure").forEach(fig => {
	fig.addEventListener("click", e => {})
})

const order = {}
