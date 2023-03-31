import { colors } from '@hulpi-ui/tokens'
import { getContrast } from 'polished'
export function ColorsGrid() {
  return Object.entries(colors).map(([colorName, color]) => {
    return (
      <div key={colorName} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
          }}
        >
          <strong>{colorName}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
