/**
 * Note: custom
 * Indicates a customization as in adding to or modifying a
 * selected product
 */

import './style.css'

const sizes = {
	short: "Short (8 fl oz)",
	tall: "Tall (12 fl oz)",
	grande: "Grande (16 fl oz)",
	venti: "Venti (20 fl oz)"
}

const amounts = {
	none: addon => "No " + addon,
	little: addon => "Lite " + addon,
	usual: addon => addon,
	a_lot: addon => "Extra " + addon
}

const selection = {
	item: "",
	size: "",
	custom: {
		free: [],
		paid: []
	}
}

const order = {}
