import PodcastsRepositoriesFactory from '../Repositories/factory'
import ListPodcastsUseCase from './ListPodcastsUseCase'

export default class PodcastsUseCasesFactory {
  static listPodcastsUseCase = ({config}) =>
    new ListPodcastsUseCase({
      repository: PodcastsRepositoriesFactory.firebasePodcastsRepository({
        config
      })
    })
}
