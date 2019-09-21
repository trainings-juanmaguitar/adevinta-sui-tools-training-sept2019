import React from 'react'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

const VariantListItem = ({user}) => (
  <li key={user.id}>
    <Link to={`/detail/${user.id}`}>
      {user.name}[{user.id}]
    </Link>
  </li>
)
VariantListItem.propTypes = {user: PropTypes.object}

export default VariantListItem
