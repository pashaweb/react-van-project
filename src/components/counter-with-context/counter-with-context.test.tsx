import {describe, expect, test} from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { CounterWithContext } from './counter-with-context'

describe('CounterWithContext', () => {
    test('should render with initial state of 1', async () => {
        renderCounterWithContext()

        expect(await screen.findByText(/^1$/)).toBeDefined()
        expect(
            await screen.findByRole('button', { name: /one up/i })
        ).toBeDefined()
    })

    test('should increase count by clicking a button', async () => {
        const user = userEvent.setup()

        renderCounterWithContext()

        expect(await screen.findByText(/^1$/)).toBeDefined()

        await act(async () => {
            await user.click(await screen.findByRole('button', { name: /one up/i }))
        })

        expect(await screen.findByText(/^2$/)).toBeDefined()
    })
})

const renderCounterWithContext = () => {
    return render(<CounterWithContext />)
}
