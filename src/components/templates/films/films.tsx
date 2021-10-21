import React from 'react'

import { FilmModel } from '../../../shared/services/types'
import { FilmPreview, FilmsActionPanel, FilmsList, FilmsSearching } from '../../films'
import { filmsStyles } from './films.style'

type props = {
    films: FilmModel[]
    selectedFilm: FilmModel
    onDeleteFilm: (filmId: number) => void
    onUpdateFilm: (filmId: number) => void
    onSelectFilm: (filmId: number) => void
    onShowSearching: () => void
    onAddFilm: () => void
    onSetSortedCategory: (category: keyof FilmModel) => void
    sortedCategory: string
}
export const Films: React.FC<props> = ({
    films,
    selectedFilm,
    onDeleteFilm,
    onUpdateFilm,
    onShowSearching,
    onAddFilm,
    onSelectFilm,
    sortedCategory,
    onSetSortedCategory,
}) => {
    const classes = filmsStyles()

    return (
        <>
            <div className={classes.headerSection}>
                {selectedFilm ? (
                    <FilmPreview
                        film={selectedFilm}
                        onShowSearching={onShowSearching}
                    />
                ) : (
                    <FilmsSearching onAddFilm={onAddFilm} />
                )}
            </div>

            <div className={classes.filmsSection}>
                <FilmsActionPanel
                    films={films}
                    sortedCategory={sortedCategory}
                    onSetSortedCategory={onSetSortedCategory}
                />
                <FilmsList
                    films={films}
                    onDeleteFilm={onDeleteFilm}
                    onUpdateFilm={onUpdateFilm}
                    onSelectFilm={onSelectFilm}
                />
            </div>
        </>
    )
}
