import { style } from '@vanilla-extract/css'

const container = style({
  display: 'flex',
  flexDirection: 'column'
})
const container_row = style({
  display: 'flex',
  flexWrap: 'wrap'
})
const title = style({})
const add_button = style({
  width: 200
})
const item_text = style({
  width: 100,
  border: 'green',
  background: 'red',
  color: 'white',
  padding: 5,
  margin: 10,
  textAlign: 'center'
})

export default {
  container,
  container_row,
  item_text,
  add_button,
  title
}