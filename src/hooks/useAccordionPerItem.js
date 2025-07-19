import React from 'react'
export default function useAccordionPerItem() {
    const [isId, setIsId] = React.useState(null)

    function toggleItem (identificador) {
        if (identificador === isId) {
            setIsId(null)
        } else if (identificador !== isId) {
            setIsId(identificador)
        }
    }

    return [isId, toggleItem]
}