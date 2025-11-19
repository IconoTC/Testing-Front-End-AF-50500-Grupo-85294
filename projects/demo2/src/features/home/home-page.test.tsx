import { render, screen } from "@testing-library/react"
import { HomePage } from "./home-page"

describe('Home Page', () => { 
    test('should render correctly', () => {
        render(<HomePage />)
        const eHeader = screen.getByRole('heading', { level: 2 })
        expect(eHeader).toBeInTheDocument()
        expect(eHeader.textContent).toBe('Home Page')
    })
 })
