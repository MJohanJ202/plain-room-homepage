import { MouseEvent } from 'react'

export type handleClick = (event: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>) => void
export type handleToggle = (stop?: false) => void
