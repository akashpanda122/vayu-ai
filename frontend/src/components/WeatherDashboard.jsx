import React from 'react'
import styled from 'styled-components'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const DashboardContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Title = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.primary};
`

const ChartContainer = styled.div`
  overflow-x: auto;
`

const WeatherDashboard = ({ modelId }) => {
  const getData = (modelId) => {
    switch(modelId) {
      case 'medium-res':
        return Array.from({ length: 10 }, (_, i) => ({
          name: `Day ${i + 1}`,
          temperature: 20 + Math.random() * 10,
          humidity: 50 + Math.random() * 30
        }))
      case 'high-res':
        return Array.from({ length: 24 }, (_, i) => ({
          name: `${i}:00`,
          temperature: 22 + Math.random() * 8,
          humidity: 55 + Math.random() * 25
        }))
      case 'pollution':
        return Array.from({ length: 12 }, (_, i) => ({
          name: `${i * 2}:00`,
          'PM2.5': 20 + Math.random() * 40,
          'NO2': 30 + Math.random() * 30
        }))
      case 'ocean':
        return Array.from({ length: 7 }, (_, i) => ({
          name: `Day ${i + 1}`,
          'wave height': 1 + Math.random() * 3,
          'wind speed': 10 + Math.random() * 20
        }))
      default:
        return []
    }
  }

  const getChartConfig = (modelId) => {
    switch(modelId) {
      case 'medium-res':
      case 'high-res':
        return {
          lines: [
            { key: 'temperature', color: '#8884d8' },
            { key: 'humidity', color: '#82ca9d' }
          ],
          title: 'Temperature and Humidity Forecast'
        }
      case 'pollution':
        return {
          lines: [
            { key: 'PM2.5', color: '#ff7300' },
            { key: 'NO2', color: '#82ca9d' }
          ],
          title: 'Air Quality Indicators'
        }
      case 'ocean':
        return {
          lines: [
            { key: 'wave height', color: '#8884d8' },
            { key: 'wind speed', color: '#82ca9d' }
          ],
          title: 'Maritime Conditions'
        }
      default:
        return { lines: [], title: '' }
    }
  }

  const config = getChartConfig(modelId)
  const data = getData(modelId)

  return (
    <DashboardContainer>
      <Title>{config.title}</Title>
      <ChartContainer>
        <LineChart width={800} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {config.lines.map(line => (
            <Line 
              key={line.key}
              type="monotone" 
              dataKey={line.key} 
              stroke={line.color} 
            />
          ))}
        </LineChart>
      </ChartContainer>
    </DashboardContainer>
  )
}

export default WeatherDashboard
