import ProposalGenerator from './components/ProposalGenerator'
import { BrandingProvider } from './context/BrandingProvider'

function App() {
  return (
    <BrandingProvider>
      <ProposalGenerator />
    </BrandingProvider>
  )
}

export default App