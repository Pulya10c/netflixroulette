import React from 'react'
import jss from 'jss'
import plugin from 'jss-plugin-extend'
import { Footer } from './components'
import { Label } from './shared/components'
import { FilmsService } from './shared/services/films.service'
import { FilmsPage } from './components/pages/films-page/films-page'


jss.use(plugin())
const filmService = new FilmsService()

export const App = () => (
    <>
        <FilmsPage filmsService={filmService} />
        <Footer>
            <Label />
        </Footer>
    </>
)
