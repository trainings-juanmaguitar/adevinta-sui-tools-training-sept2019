import {EntryPointFactory} from '@s-ui/domain'

const config = {}
const useCases = {}

const Domain = EntryPointFactory({useCases})

const instance = new Domain({config})

export default instance