import React from 'react'
import PropTypes from 'prop-types'

import Link from 'react-router/lib/Link'

const DefaultListItem = ({user}) => (
  <li key={user.id}>
    <Link to={`/detail/${user.id}`}>{user.name}</Link>
  </li>
)
DefaultListItem.propTypes = {user: PropTypes.object}

export default DefaultListItem
