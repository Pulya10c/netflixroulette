import React from 'react'
import cn from 'classnames'


import { textInputStyles } from './text-input.style'
import { AtomReactComponent } from '../../../components/types'

type props = {
    placeHolder: string
    value?: string | number
}

export const TextInput: AtomReactComponent<props> = ({
    placeHolder,
    className,
    value,
}) => {
    const classes = textInputStyles()
    return (
        <input
            className={cn(classes.input, className)}
            value={value}
            placeholder={placeHolder}
        />
    )
}
