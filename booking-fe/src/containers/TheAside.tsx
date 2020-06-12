import React from 'react'
import { useDispatch } from 'react-redux'
import {
  CSidebar,
  CSidebarClose
} from '@coreui/react'

import { useTypedSelector } from '../store'

const TheAside = () => {
  const show = useTypedSelector((state) => state.asideShow)
  const dispatch = useDispatch()
  const setState = (state: boolean) => dispatch({type: 'set', asideShow: state})

  return (
    <CSidebar
      aside
      colorScheme='light'
      size='lg'
      overlaid
      show={show}
      onShowChange={(state: boolean) => setState(state)}
    >
      <CSidebarClose onClick={() => setState(false) } />
      {/*aside content*/}
      <div className="nav-underline">
        <div className="nav nav-tabs">
          <div className="nav-item">
            <div className="nav-link">Aside</div>
          </div>
        </div>
      </div>
    </CSidebar>
  )
}

export default React.memo(TheAside)
