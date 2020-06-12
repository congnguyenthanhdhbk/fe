import React from 'react'
import { CFooter, CLink } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <CLink href="https://coreui.io/react/docs/" target="_blank">
          Library documentation
        </CLink>
      </div>
      <div className="ml-auto">
        <span className="mr-1">Right text</span>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
