import React from 'react'
import styled from 'styled-components'

const SelectorContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const ModelGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`

const ModelCard = styled.div`
  padding: 15px;
  border-radius: 8px;
  border: 2px solid ${({ active, theme }) => active ? theme.colors.secondary : '#ddd'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`

const ModelTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 10px;
`

const ModelDescription = styled.p`
  font-size: 14px;
  color: #666;
`

const ModelSelector = ({ selectedModel, onModelSelect }) => {
  const models = [
    {
      id: 'medium-res',
      title: 'Medium Resolution Weather',
      description: 'General weather forecasting with medium spatial resolution (25km)'
    },
    {
      id: 'high-res',
      title: 'High Resolution Weather',
      description: 'Detailed weather predictions with high spatial resolution (1km)'
    },
    {
      id: 'pollution',
      title: 'Air Pollution',
      description: 'Specialized in predicting air quality and pollution patterns'
    },
    {
      id: 'ocean',
      title: 'Ocean Wave',
      description: 'Focused on maritime conditions and wave predictions'
    }
  ]

  return (
    <SelectorContainer>
      <ModelGrid>
        {models.map(model => (
          <ModelCard 
            key={model.id}
            active={selectedModel === model.id}
            onClick={() => onModelSelect(model.id)}
          >
            <ModelTitle>{model.title}</ModelTitle>
            <ModelDescription>{model.description}</ModelDescription>
          </ModelCard>
        ))}
      </ModelGrid>
    </SelectorContainer>
  )
}

export default ModelSelector
