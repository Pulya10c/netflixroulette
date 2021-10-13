import React from 'react'
import { FilmModel } from '../../../shared/services/types'
import { FilmCard } from '../film-card/film-card'
import { filmsListStyles } from './films-list.style'

type props = {
    films: FilmModel[]
    onDeleteFilm: (filmId: number) => void
    onUpdateFilm: (filmId: number) => void
}

export const FilmsList: React.FC<props> = ({
    films,
    onDeleteFilm,
    onUpdateFilm,
}) => {
    const classes = filmsListStyles()
    return (
        <div className={classes.filmsList}>
            {films.map((film) => (
                <FilmCard
                    key={film.id}
                    film={film}
                    onUpdateFilm={onUpdateFilm}
                    onDeleteFilm={onDeleteFilm}
                />
            ))}
        </div>
    )
}
