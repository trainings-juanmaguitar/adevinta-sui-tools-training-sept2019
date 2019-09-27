/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'

import MoleculeNavbar from '../../../../frontend-mv--uilib-components/components/molecule/navbar/src/'

import MoleculeSelect from '@s-ui/react-molecule-select'
import MoleculeSelectOption from '@s-ui/react-molecule-dropdown-option'

const IconArrowDown = () => <span>▼</span>

const BASE_CLASS = `sui-MoleculeNavbar`
const CLASS_BLOCK_CATEGORIES = `${BASE_CLASS}-categories`
const CLASS_BLOCK_LANGUAGE = `${BASE_CLASS}-language`

const Navbar = ({title}, {i18n, router}) => {
  const categories = [
    {
      key: 'popular',
      text: i18n.t('POPULAR_MOVIES_TITLE')
    },
    {
      key: 'now_playing',
      text: i18n.t('NOW_PLAYING_MOVIES_TITLE')
    }
  ]

  const languages = [
    {
      key: 'es-ES',
      text: i18n.t('SPANISH')
    },
    {
      key: 'en-GB',
      text: i18n.t('ENGLISH')
    }
  ]

  const handleChangeCategory = (e, {value}) => {
    router.push(`/${value}`)
  }

  const handleChangeLanguage = (e, {value}) => {
    const {
      location: {pathname: currentPath}
    } = router
    i18n.setCulture(value)
    console.log({currentPath})
    console.log(i18n.culture)
    router.push(currentPath)
  }

  return (
    <MoleculeNavbar title={title}>
      <div className={CLASS_BLOCK_CATEGORIES}>
        {categories && (
          <MoleculeSelect
            id="categories"
            placeholder={'Select a Category'}
            onChange={handleChangeCategory}
            iconArrowDown={<IconArrowDown />}
            value={''}
          >
            {categories.map(({text, key}, i) => (
              <MoleculeSelectOption key={i} value={key}>
                {text}
              </MoleculeSelectOption>
            ))}
          </MoleculeSelect>
        )}
      </div>
      <div className={CLASS_BLOCK_LANGUAGE}>
        {languages && (
          <MoleculeSelect
            id="languages"
            placeholder={'Select a language'}
            onChange={handleChangeLanguage}
            iconArrowDown={<IconArrowDown />}
            value={''}
          >
            {languages.map(({text, key}, i) => (
              <MoleculeSelectOption key={i} value={key}>
                {text}
              </MoleculeSelectOption>
            ))}
          </MoleculeSelect>
        )}

        {/* languages.map((language, index) => (
          <AtomButton key={index}>{language}</AtomButton>
        )) */}
      </div>
    </MoleculeNavbar>
  )
}

Navbar.contextTypes = {
  router: PropTypes.object,
  i18n: PropTypes.object
}

Navbar.displayName = 'Navbar'

// Remove these comments if you need
// Navbar.contextTypes = {i18n: PropTypes.object}
Navbar.propTypes = {
  title: PropTypes.any
}

export default Navbar
