import StudentsRepository from './StudentsRepository'

class ROWStudentsRepository extends StudentsRepository {
  constructor({config, studentsEntityFactory}) {
    super()
    this.config = config
    this._studentsEntityFactory = studentsEntityFactory
  }
  async all() {
    const students = [
      {
        id: 1,
        github: '@anasanjuan',
        name: 'anasanjuan',
        alias: ''
      },
      {
        id: 2,
        github: '@b-rage',
        name: 'Gianluca',
        alias: 'b-rage'
      }
    ]
    return students.map(this._studentsEntityFactory)
  }
}

export default ROWStudentsRepository
