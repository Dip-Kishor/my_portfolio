'use client'

import Snowfall from 'react-snowfall'

export default function Snow() {
  return (
    <Snowfall
      color="white"
      snowflakeCount={120}
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        zIndex: 0, // 👈 important (background layer)
        pointerEvents: 'none',
      }}
    />
  )
}