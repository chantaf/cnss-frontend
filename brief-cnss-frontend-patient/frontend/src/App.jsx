
import PatientRoutes from './Routes/Patient/routes'

import { useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
const queryClient = new QueryClient()
function App() {

  
  const [dataProduct, setDataProduct] = useState(0);

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <PatientRoutes />
      </QueryClientProvider>
        
    </div>
  )
}

export default App
