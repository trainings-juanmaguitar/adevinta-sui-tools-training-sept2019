import React, {useState} from 'react'
import PropTypes from 'prop-types'

import AtomButton from '@schibstedspain/sui-atom-button'
import AtomInput from '@s-ui/react-atom-input'

import './index.scss'

const BASE_CLASS = `SearchForm`

const SearchForm = (_, {i18n, router}) => {
  const [query, setQuery] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    const pathToRedirect = `/s/${query}`
    router.push(pathToRedirect)
  }

  const handleChange = (e, {value}) => {
    setQuery(value)
  }

  return (
    <form className={BASE_CLASS} onSubmit={handleSubmit}>
      <AtomInput value={query} onChange={handleChange} />
      <AtomButton>{i18n.t('SEARCH_MOVIES')}</AtomButton>
    </form>
  )
}

SearchForm.contextTypes = {
  i18n: PropTypes.object,
  router: PropTypes.object
}

export default SearchForm
