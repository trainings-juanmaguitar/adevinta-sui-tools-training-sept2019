import React from 'react'
import PropTypes from 'prop-types'

import DetailUser from '../../components/DetailUser'

const Detail = ({user}, {i18n}) => (
  <React.Fragment>
    <h1>{i18n.t('DETAIL_TITLE')}</h1>
    <DetailUser user={user} />
  </React.Fragment>
)

Detail.propTypes = {user: PropTypes.object}
Detail.contextTypes = {i18n: PropTypes.object}
Detail.renderLoading = () => <h1>Loading...</h1>

Detail.getInitialProps = async ({context, routeInfo}) => {
  const {domain} = context
  return {
    user: await domain.user(routeInfo.params.id)
  }
}

export default Detail
