import React from 'react'
import PropTypes from 'prop-types'

const BASE_CLASS = `sui-MoleculeNavbar`
const CLASS_BLOCK_LOGO = `${BASE_CLASS}-logo`

const MoleculeNavbar = ({title, children}) => {
  return (
    <div className="sui-MoleculeNavbar">
      <div className={CLASS_BLOCK_LOGO}>{title}</div>
      {children}
    </div>
  )
}

MoleculeNavbar.displayName = 'MoleculeNavbar'

// Remove these comments if you need
// MoleculeNavbar.contextTypes = {i18n: PropTypes.object}
MoleculeNavbar.propTypes = {
  title: PropTypes.any,
  children: PropTypes.any
}

export default MoleculeNavbar
