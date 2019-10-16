import React from 'react'
import PropTypes from 'prop-types'

const BASE_CLASS = 'MoleculeCard'

const MoleculeCard = ({title, description, image, language, release}) => (
  <div className={BASE_CLASS}>
    <img src={image} />
    <h2>{title}</h2>
    <p>{description}</p>
    <p>{language}</p>
    <p>{release}</p>

  </div>
)

MoleculeCard.displayName = 'MoleculeCard'

// Remove these comments if you need
// MoleculeCard.contextTypes = {i18n: PropTypes.object}
MoleculeCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  language: PropTypes.string,
  release: PropTypes.string
}
// MoleculeCard.defaultProps = {}

export default MoleculeCard
