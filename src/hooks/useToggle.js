import React from 'react'

function useToggle () {
    const [isOpen, setIsOpen] = React.useState(false)

    function toggleOpen() {
        setIsOpen(prevOpen => !prevOpen)
    }

    return [isOpen, toggleOpen]
}
export default useToggle