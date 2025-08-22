# Coffee Masters service prototype

Based on [Coffee Masters](/coffee-masters-mockup.png)

## Details

Process
1. Products: View and select product(s)
2. Cart: View and manage cart
3. Confirm: Enter order

## Specification

### Structure
**Header**: logo and status buttons
- coffee status button: go to product grid
  - .inactive: no items in order
- cart status button: go to cart
  - .inactive: coffee inactive
- bill status button: go to bill
  - .inactive: cart inactive

**Product Grid**: figure { item img, name, description, price-cal info }
- figure[]
  - click: set selected item, open dialog
  - if first: show aside

	**Dialog**: form { addon[] + amount }
