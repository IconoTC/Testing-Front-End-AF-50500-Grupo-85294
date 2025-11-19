import { render, screen } from "@testing-library/react"
import { AboutPage } from "./about-page"

describe('About Page', () => { 
    test('should render correctly', () => {
        render(<AboutPage />)
        const eHeader = screen.getByRole('heading', { level: 2 })
        expect(eHeader).toBeInTheDocument()
        expect(eHeader.textContent).toBe('About Page')
    })
 })
