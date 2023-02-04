import { render, screen } from '@testing-library/react'

import Options from '../Options'

test ('displays image form each scoop from the server', async() => {
  render(<Options optionType="scoops"/> );

  // find images, name here is the altText property of the img html tag
  const scoopImages = await screen.findAllByRole('img', {name: /scoop$/i});
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  // strings and numbers - immutable types use .toBe matcher, while
  // mutable types - arrays and objects use .toEqual matcher
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
})

test ('displays image form each topping from the server', async() => {
  render(<Options optionType="toppings"/> );

  // find images, name here is the altText property of the img html tag
  const scoopImages = await screen.findAllByRole('img', {name: /topping$/i});
  expect(scoopImages).toHaveLength(3);

  // confirm alt text of images
  const altText = scoopImages.map((element) => element.alt);
  // strings and numbers - immutable types use .toBe matcher, while
  // mutable types - arrays and objects use .toEqual matcher
  expect(altText).toEqual(['Cherries topping', 'M&Ms topping', 'Hot fudge topping']);
})
