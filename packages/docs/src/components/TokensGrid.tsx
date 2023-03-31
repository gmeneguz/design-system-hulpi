import React from 'react'
import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  isRem?: boolean
}
export function TokensGrid({ tokens, isRem = false }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {isRem && <th>Pixels</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {isRem && <td>{Number(value.replace('rem', '')) * 16}px</td>}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
