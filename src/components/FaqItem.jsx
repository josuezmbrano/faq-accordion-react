import React from 'react'
import useToggle from '../hooks/useToggle'

export default function FaqItem({children}) {
    const [isOpen, toggle] = useToggle()

    return children(isOpen, toggle)
}