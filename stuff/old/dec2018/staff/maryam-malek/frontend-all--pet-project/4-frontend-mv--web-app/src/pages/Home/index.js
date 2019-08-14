import React, {Component} from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

class Home extends Component {
  render() {
    const {i18n} = this.context
    return (
      <React.Fragment>
        <Helmet>
          <link rel="canonical" href="http://spa.mock/" />
        </Helmet>
        <h1>{i18n.t('APP_TITLE')}</h1>
      </React.Fragment>
    )
  }
}

Home.contextTypes = {domain: PropTypes.object, i18n: PropTypes.object}

export default Home
