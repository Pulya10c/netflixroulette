import React from 'react'

import { DateInput, Select, ThemeButton } from '../../../shared/components'
import { GENRES } from '../../../shared/components/const'
import { TextInput } from '../../../shared/components/text-nput/text-input'
import { Card } from '../../card/card'

import { addFilmFormStyles } from './add-film-form.style'

type props = {
    onCloseForm: () => void
    onAddFilm: (filmId: string) => void
}

export const AddFilmForm: React.FC<props> = ({ onCloseForm }) => {
    const classes = addFilmFormStyles()
    return (
        <Card>
            <div className={classes.form}>
                <div className={classes.content}>
                    <p className={classes.title}>Add movie</p>

                    <span className={classes.label}>Title</span>
                    <TextInput placeHolder="Tile here" />

                    <span className={classes.label}>Release Date</span>
                    <DateInput placeHolder="Select Date" />

                    <span className={classes.label}>Movie URL</span>
                    <TextInput placeHolder="Movie URL here" />

                    <span className={classes.label}>Genre</span>
                    <Select
                        className={classes.select}
                        placeholder="Select Genre"
                        onSelect={console.log}
                        items={GENRES}
                    ></Select>

                    <span className={classes.label}>Overview</span>
                    <TextInput placeHolder="Overview here" />

                    <span className={classes.label}>Runtime</span>
                    <TextInput placeHolder="Runtime here" />

                    <div className={classes.buttonArea}>
                        <ThemeButton theme="DARK">Reset</ThemeButton>
                        <ThemeButton theme="LIGHT">Confirm</ThemeButton>
                    </div>
                </div>
                <span className={classes.cross} onClick={onCloseForm}>
                    &#215;
                </span>
            </div>
        </Card>
    )
}
