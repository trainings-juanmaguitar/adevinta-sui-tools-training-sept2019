import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

import OptimizelyExperiment from '@s-ui/abtesting-optimizely-x'

import ListUsers from '../../components/ListUsers'

const List = ({users, canonical}, {i18n}) => (
  <React.Fragment>
    <Helmet>
      <link rel="canonical" href={canonical} />
    </Helmet>
    <OptimizelyExperiment experimentId={123456}>
      <h1 variationId={0} defaultVariation>
        {i18n.t('LIST_TITLE')}
      </h1>
      <h1 variationId={1} defaultVariation>
        {i18n.t('LIST_TITLE')}!!!!!!!!
      </h1>
    </OptimizelyExperiment>
    <ListUsers users={users} />
  </React.Fragment>
)

List.propTypes = {users: PropTypes.array, canonical: PropTypes.string}
List.contextTypes = {i18n: PropTypes.object}
List.renderLoading = () => <h1>Loading...</h1>
List.getInitialProps = async ({context, routeInfo}) => {
  const {domain} = context
  return {
    users: await domain.users(),
    canonical: 'http:/spa.mock/list'
  }
}

export default List
