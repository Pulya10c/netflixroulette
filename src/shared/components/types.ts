import React from 'react'

type atomReactProps = { className?: string }

export type StupidReactComponent<T extends Object = {}> = React.FC<
    T & atomReactProps
>
