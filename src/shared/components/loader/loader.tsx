import React from 'react'
import cn from 'classnames'

import { StupidReactComponent } from '../types'
import { loaderStyle } from './loader.style'

export const Loader: StupidReactComponent = ({ className }) => {
    const classes = loaderStyle()
    return (
        <div className={cn(classes.ring, className)}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
