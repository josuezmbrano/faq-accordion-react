import React from 'react'

export default function FaqItem({children, activeId, toggleItem, itemId}) {

    return children(activeId === itemId, () => toggleItem(itemId))
}