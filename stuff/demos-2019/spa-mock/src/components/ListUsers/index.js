import React from 'react'
import PropTypes from 'prop-types'

import OptimizelyExperiment from '@s-ui/abtesting-optimizely-x'

import VariantListItem from './VariantListItem'
import DefaultListItem from './DefaultListItem'

const ListUsers = ({users}) => (
  <ul className="ListUsers">
    {users.map(user => (
      <OptimizelyExperiment key={user.id} experimentId={225671}>
        <DefaultListItem variationId={0} defaultVariation user={user} />
        <VariantListItem variationId={1} user={user} />
      </OptimizelyExperiment>
    ))}
  </ul>
)
ListUsers.propTypes = {users: PropTypes.array}

export default ListUsers
