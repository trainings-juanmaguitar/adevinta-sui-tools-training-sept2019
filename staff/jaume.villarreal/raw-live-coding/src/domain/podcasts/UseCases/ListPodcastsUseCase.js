import {useCase} from './node_modules/@s-ui/domain'

export default class ListPodcastsUseCase extends UseCase {
    cosntructor ({repository}){
        super()
        this._repository = repository
    }
    execute(ListPodcastsUseCaseParams)
}
