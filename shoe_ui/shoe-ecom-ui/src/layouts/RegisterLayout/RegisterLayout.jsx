import Footer from '../../components/Footer'
import RegisterHeader from '../../components/RegisterHeader'

export default function RegisterLayout({ children }) {
  return (
    <div>
      <RegisterHeader />
      {children}
      <Footer />
    </div>
  )
}
