import React, { useState } from 'react'
import { render, waitForDomChange } from '@testing-library/react'

const MutatingComponent = () => {
  const [value, setValue] = useState(false)

  setTimeout(() => setValue(true), 2000)

  return (
    <ul data-some-bool={value}>
      <li>Test</li>
    </ul>
  )
}

it('It should wait for attribute to change in DOM', async () => {
  // Given
  const { container } = render(<MutatingComponent />)

  // When
  const [{ attributeName }] = await waitForDomChange({ container })

  //Then
  expect(attributeName).toBe('data-some-bool')
})