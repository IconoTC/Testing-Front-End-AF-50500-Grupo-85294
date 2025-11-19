import { render, screen } from "@testing-library/react"
import { UsersPage } from "./users-page"

describe('Users Page', () => { 
    test('should render correctly', () => {
        render(<UsersPage />)
        const eHeader = screen.getByRole('heading', { level: 2 })
        expect(eHeader).toBeInTheDocument()
        expect(eHeader.textContent).toBe('Users Page')
    })
 })
