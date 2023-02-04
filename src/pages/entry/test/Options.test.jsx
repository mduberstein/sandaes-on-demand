import { render, screen } from '@testing-library/react'

import Options from '../Options'

test ('displays image form each scoop from the server', () => {
  render(<Options optionsType="scoops"/> );

  // find images, name here is the altText property of the img html tag
  const scoopImages = screen.getAllByRole('img', {name: /scoop$/i});
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((element) => element.altText);
  // strings and numbers - immutable types use .toBe matcher, while
  // mutable types - arrays and objects use .toEqual matcher
  expect(altText).toEqual(['Chocolate scoop', 'Vanilla scoop']);
})

