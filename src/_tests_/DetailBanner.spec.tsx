import '@testing-library/jest-dom'
import { renderWithThemeProvider } from './mocks/providerRender'
import { DetailBanner } from '../components/DetailBanner'

describe('<DetailBanner />', () => {
  it('should be able to render properly', () => {
    const title = 'A title'
    const description = 'simple description'
    const breadcrumbs = [
      { name: 'Home', url: '/' },
      { name: 'Quem Somos', url: '/quem-somos' },
    ]
    const { getByText, getByRole } = renderWithThemeProvider(
      <DetailBanner
        breadcrumbs={breadcrumbs}
        title={title}
        description={description}
      />,
    )
    expect(getByText(title)).toBeInTheDocument()
    expect(getByText(description)).toBeInTheDocument()
    breadcrumbs.forEach((breadcrumb) => {
      const link = getByRole('link', { name: breadcrumb.name })
      expect(link).toBeInTheDocument()
      expect(link.getAttribute('href')).toBe(breadcrumb.url)
    })
  })
})
