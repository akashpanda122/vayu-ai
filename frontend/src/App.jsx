import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import ModelSelector from './components/ModelSelector'
import PredictionMetrics from './components/PredictionMetrics'
import WeatherDashboard from './components/WeatherDashboard'
import AIInsights from './components/AIInsights'

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`

function App() {
  const [selectedModel, setSelectedModel] = useState('medium-res')

  return (
    <AppContainer>
      <Header />
      <ModelSelector 
        selectedModel={selectedModel} 
        onModelSelect={setSelectedModel} 
      />
      <PredictionMetrics modelId={selectedModel} />
      <WeatherDashboard modelId={selectedModel} />
      <AIInsights modelId={selectedModel} />
    </AppContainer>
  )
}

export default App
