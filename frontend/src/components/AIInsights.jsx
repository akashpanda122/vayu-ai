import React from 'react'
import styled from 'styled-components'

const InsightsContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
`

const InsightCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
`

const AIInsights = ({ modelId }) => {
  const getInsights = (modelId) => {
    switch(modelId) {
      case 'medium-res':
        return [
          {
            title: 'General Weather Pattern',
            content: 'Stable conditions expected with gradual warming trend over the next week.'
          },
          {
            title: 'Precipitation Forecast',
            content: 'Low probability of precipitation in the coming days. Next rainfall expected in 5 days.'
          }
        ]
      case 'high-res':
        return [
          {
            title: 'Local Weather Dynamics',
            content: 'Urban heat island effect causing 2-3°C temperature variation across the city.'
          },
          {
            title: 'Detailed Precipitation',
            content: 'Scattered showers expected in northern districts within next 6 hours.'
          }
        ]
      case 'pollution':
        return [
          {
            title: 'Air Quality Forecast',
            content: 'PM2.5 levels expected to remain within moderate range. Air quality index: 75'
          },
          {
            title: 'Pollution Patterns',
            content: 'Industrial emissions showing typical weekly cycle with peaks on weekdays.'
          }
        ]
      case 'ocean':
        return [
          {
            title: 'Wave Conditions',
            content: 'Significant wave height of 2.5m expected. Good conditions for maritime operations.'
          },
          {
            title: 'Ocean Current Analysis',
            content: 'Strong northerly current developing, affecting coastal areas within 48 hours.'
          }
        ]
      default:
        return []
    }
  }

  return (
    <InsightsContainer>
      <Title>AI Insights</Title>
      {getInsights(modelId).map((insight, index) => (
        <InsightCard key={index}>
          <h3>{insight.title}</h3>
          <p>{insight.content}</p>
        </InsightCard>
      ))}
    </InsightsContainer>
  )
}

export default AIInsights
