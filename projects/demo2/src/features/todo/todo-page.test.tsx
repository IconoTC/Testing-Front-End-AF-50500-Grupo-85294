import { render, screen } from "@testing-library/react"
import { TodoPage } from "./todo-page"

describe('Todo Page', () => { 
    test('should render correctly', () => {
        render(<TodoPage />)
        const eHeader = screen.getByRole('heading', { level: 2 })
        expect(eHeader).toBeInTheDocument()
        expect(eHeader.textContent).toBe('Todo Page')
    })
 })
