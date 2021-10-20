import React from 'react'
import cn from 'classnames'

import { StupidReactComponent } from '../types'
import { dateInputStyles } from './date-input.style'

type props = {
    placeHolder: string
    value?: string | number
}

export const DateInput: StupidReactComponent<props> = ({
    placeHolder,
    className,
    value,
}) => {
    const classes = dateInputStyles()
    return (
        <input
            className={cn(classes.input, className)}
            type="date"
            value={value}
            placeholder={placeHolder}
        />
    )
}
