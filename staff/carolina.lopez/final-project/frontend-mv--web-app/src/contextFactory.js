/* eslint-disable */
import i18nFactory from './literals'
import domain from '../../frontend-mv--lib-movies/src/domain/index'

const i18n = i18nFactory({lang: 'en-GB'})
i18n.setCulture = function(culture) {
    this.culture = culture
  }

export default async (params) => ({domain, i18n})
