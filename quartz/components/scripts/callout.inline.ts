function toggleCallout(this: HTMLElement) {
    const outerBlock = this.parentElement!;
    outerBlock.classList.toggle("is-collapsed");
    const collapsed = outerBlock.classList.contains("is-collapsed");
    
    // Delay height calculation
    setTimeout(() => {
        const height = collapsed ? this.scrollHeight : outerBlock.scrollHeight;
        outerBlock.style.maxHeight = height + "px";
        adjustParentHeights(outerBlock);
    }, 50); // Adjust delay as needed
}

function adjustParentHeights(element: HTMLElement) {
    let current = element;
    let parent = element.parentElement;
    while (parent && parent.classList.contains("callout")) {
        const collapsed = parent.classList.contains("is-collapsed");
        const height = collapsed ? parent.scrollHeight : parent.scrollHeight + current.scrollHeight;
        parent.style.maxHeight = height + "px";
        current = parent;
        parent = parent.parentElement;
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
            const height = collapsed ? title.scrollHeight : div.scrollHeight
            div.style.maxHeight = height + "px"
        }
    }
}

document.addEventListener("nav", setupCallout)
window.addEventListener("resize", setupCallout)
