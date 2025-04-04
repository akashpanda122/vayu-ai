import React from 'react'
import styled from 'styled-components'

const MetricsContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`

const MetricCard = styled.div`
  padding: 15px;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  text-align: center;
`

const MetricValue = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 5px;
`

const MetricLabel = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary};
`

const PredictionMetrics = ({ modelId }) => {
  const getMetrics = (modelId) => {
    switch(modelId) {
      case 'medium-res':
        return [
          { label: 'Resolution', value: '25km' },
          { label: 'Forecast Range', value: '10 days' },
          { label: 'Update Frequency', value: '6 hours' }
        ]
      case 'high-res':
        return [
          { label: 'Resolution', value: '1km' },
          { label: 'Forecast Range', value: '48 hours' },
          { label: 'Update Frequency', value: '1 hour' }
        ]
      case 'pollution':
        return [
          { label: 'PM2.5 Accuracy', value: '92%' },
          { label: 'Forecast Range', value: '72 hours' },
          { label: 'Pollutants Tracked', value: '6' }
        ]
      case 'ocean':
        return [
          { label: 'Wave Height Accuracy', value: '95%' },
          { label: 'Forecast Range', value: '7 days' },
          { label: 'Resolution', value: '5km' }
        ]
      default:
        return []
    }
  }

  return (
    <MetricsContainer>
      <MetricsGrid>
        {getMetrics(modelId).map((metric, index) => (
          <MetricCard key={index}>
            <MetricValue>{metric.value}</MetricValue>
            <MetricLabel>{metric.label}</MetricLabel>
          </MetricCard>
        ))}
      </MetricsGrid>
    </MetricsContainer>
  )
}

export default PredictionMetrics
