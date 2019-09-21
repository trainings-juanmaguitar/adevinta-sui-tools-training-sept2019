/* eslint-disable no-console */
import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const List = ({users}, {i18n}) => (
  <React.Fragment>
    <Helmet>
      <link rel="canonical" href="http://spa.mock/" />
    </Helmet>
    <h1>List users</h1>
    <ul>
      {users.map(({name, username, email}, index) => (
        <li key={index}>
          <strong>{username}</strong> → <em>{name}</em>
        </li>
      ))}
    </ul>
  </React.Fragment>
)

List.propTypes = {users: PropTypes.array}

List.contextTypes = {i18n: PropTypes.object}
List.getInitialProps = async ({context, routeInfo}) => {
  console.log({context, routeInfo})
  const {domain} = context
  return {
    users: await domain.users()
  }
}

export default List
