export let selectDomElement = (element: string): Array<HTMLElement> | HTMLElement | null => {
    const selectedElements: NodeListOf<HTMLElement> = document.querySelectorAll(element)
    if (selectedElements.length > 1) {
        return [...selectedElements] as Array<HTMLElement>
    } else if (selectedElements.length === 1) {
        return selectedElements[0]
    } else {
        return null
    }
}