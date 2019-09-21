import domain from './domain'
import i18nFactory from './literals'

export default async () => ({domain, i18n: i18nFactory({lang: 'es-ES'})})
