import React, {useState, Suspense} from 'react'
const BigLib = React.lazy(() => import('./big-lib'))


function useToggle(init = false) {
  const [on, setOn] = useState(init)
  const toggle = () => setOn(!on)
  return [on, toggle]
}

function Perf300() {
  const [showBigLib, toggleBigLib] = useToggle()
  return (
    <div>
      <label>
        show BigLib
        <input type="checkbox" checked={showBigLib} onChange={toggleBigLib} />
      </label>

      <div style={{height: 150, width: 200}} className="totally-centered">
        {showBigLib ? (
            <Suspense fallback={<div>loading ...</div>}>
              <BigLib/>
            </Suspense>
        ) : null}
      </div>
    </div>
  )
}

export default Perf300
