import React from 'react'
import PropTypes from 'prop-types'

import AtomButton from '@schibstedspain/sui-atom-button'

import MoleculeSelect from '@s-ui/react-molecule-select'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

const IconArrowDown = () => <span>▼</span>

const BASE_CLASS = `sui-MoleculeNavbar`
const CLASS_BLOCK_CATEGORIES = `${BASE_CLASS}-categories`
const CLASS_BLOCK_LANGUAGE = `${BASE_CLASS}-language`
const CLASS_BLOCK_LOGO = `${BASE_CLASS}-logo`

const MoleculeNavbar = ({
  languages,
  onChangeOption,
  options,
  placeholder,
  currentOption,
  title
}) => {
  return (
    <div className="sui-MoleculeNavbar">
      <div className={CLASS_BLOCK_LOGO}>{title}</div>
      <div className={CLASS_BLOCK_CATEGORIES}>
        <MoleculeSelect
          placeholder={placeholder}
          onChange={onChangeOption}
          iconArrowDown={<IconArrowDown />}
          value={currentOption}
        >
          {options.map(({text, key}, i) => (
            <MoleculeSelectOption key={i} value={key}>
              {text}
            </MoleculeSelectOption>
          ))}
        </MoleculeSelect>
      </div>
      <div className={CLASS_BLOCK_LANGUAGE}>
        {languages.map((language, index) => (
          <AtomButton key={index}>{language}</AtomButton>
        ))}
      </div>
    </div>
  )
}

MoleculeNavbar.displayName = 'MoleculeNavbar'

// Remove these comments if you need
// MoleculeNavbar.contextTypes = {i18n: PropTypes.object}
MoleculeNavbar.propTypes = {
  languages: PropTypes.object,
  options: PropTypes.object,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeOption: PropTypes.function,
  currentOption: PropTypes.string
}

MoleculeNavbar.defaultProps = {
  languages: [],
  options: [],
  title: 'My App',
  placeholder: 'Select an option',
  onChangeOption: () => {},
  currentOption: ''
}

export default MoleculeNavbar
