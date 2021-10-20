import { FilmModel } from './types'

export class FilmsService {
    public getFilmsData(): Promise<FilmModel[]> {
        return fetch('./assets/mock/movies.json').then((response) =>
            response.json()
        )
    }
}
