import { useEffect, useState } from 'react'
import { Segmented } from 'antd'
import { init3D } from './init-3d'
import { init2D } from './init-2d'

function Main() {
  useEffect(() => {
    const dom = document.getElementById('threejs-3d-container')!
    init3D(dom)
    return () => {
      dom.innerHTML = ''
    }
  }, [])

  useEffect(() => {
    const dom = document.getElementById('threejs-2d-container')!
    init2D(dom)
    return () => {
      dom.innerHTML = ''
    }
  }, [])

  const [curMode, setCurMode] = useState<'2d' | '3d'>('2d')

  return (
    <div className="main-content">
      <div
        id="threejs-3d-container"
        style={{ display: curMode === '3d' ? 'block' : 'none' }}
      />
      <div
        id="threejs-2d-container"
        style={{ display: curMode === '2d' ? 'block' : 'none' }}
      />
      <div className="mode-change-btns">
        <Segmented
          options={[
            { label: '2D', value: '2d' },
            { label: '3D', value: '3d' },
          ]}
          value={curMode}
          onChange={(value) => setCurMode(value as '2d' | '3d')}
        />
      </div>
    </div>
  )
}

export default Main
