function toggleCallout(this: HTMLElement) {
    const outerBlock = this.parentElement!
    outerBlock.classList.toggle("is-collapsed")
    const collapsed = outerBlock.classList.contains("is-collapsed")
    const height = collapsed ? this.scrollHeight + "px" : "100%"
    outerBlock.style.maxHeight = height

    // walk and adjust height of all parents
    let current = outerBlock
    let parent = outerBlock.parentElement
    while (parent) {
        if (!parent.classList.contains("callout")) {
            return
        }

        const collapsed = parent.classList.contains("is-collapsed")
        const height = collapsed ? parent.scrollHeight + "px" : "100%"
        parent.style.maxHeight = height

        current = parent
        parent = parent.parentElement
    }
}

function setupCallout() {
    const collapsible = document.getElementsByClassName(
        `callout is-collapsible`,
    ) as HTMLCollectionOf<HTMLElement>
    for (const div of collapsible) {
        const title = div.firstElementChild

        if (title) {
            title.addEventListener("click", toggleCallout)
            window.addCleanup(() => title.removeEventListener("click", toggleCallout))

            const collapsed = div.classList.contains("is-collapsed")
            const height = collapsed ? title.scrollHeight + "px" : "100%"
            div.style.maxHeight = height
        }
    }
}

document.addEventListener("nav", setupCallout)
window.addEventListener("resize", setupCallout)
