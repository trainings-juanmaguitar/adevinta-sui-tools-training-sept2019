import React from 'react'
import PropTypes from 'prop-types'

const DetailUser = ({user}) => (
  <div className="DetailUser">
    <h1>{user.name}</h1>
    <p>{user.username}</p>
    <p>{user.website}</p>
  </div>
)
DetailUser.propTypes = {user: PropTypes.object}

export default DetailUser
