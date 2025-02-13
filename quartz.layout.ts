import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { IconFolderOptions } from "./quartz/plugins/components/FileIcons";

// components shared across all pages

const iconsOptions: IconFolderOptions = {
    rootIconFolder: "quartz/static/icons",
    default: {
        file: "file",
    },
};

export const sharedPageComponents: SharedLayout = {
    head: Component.Head(),
    header: [],
    afterBody: [],
    footer: Component.Footer({
        links: {
            "Email": "mailto:yifuding.twp@gmail.com",
            "LinkedIn": "https://www.linkedin.com/in/yifu-ding/",
            "Instagram": "https://www.instagram.com/yifu_ding_/",
        },
    }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
    beforeBody: [
        Component.Breadcrumbs(),
        Component.ArticleTitle(iconsOptions),
        Component.ContentMeta({ showReadingTime: false }),
        Component.TagList(),
    ],
    left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Search(),
        Component.Darkmode(),
        Component.DesktopOnly(Component.Explorer()),
    ],
    right: [
        Component.Graph(),
        Component.DesktopOnly(Component.TableOfContents()),
        Component.Backlinks(),
    ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
    beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
    left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Search(),
        Component.Darkmode(),
        Component.DesktopOnly(Component.Explorer()),
    ],
    right: [],
}

// Explorer
Component.Explorer({
    title: "Explorer", // title of the explorer component
    folderClickBehavior: "link", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
    folderDefaultState: "open", // default state of folders ("collapsed" or "open")
    useSavedState: true, // whether to use local storage to save "state" (which folders are opened) of explorer
    // Sort order: folders first, then files. Sort folders and files alphabetically
    sortFn: (a, b) => {
        if ((!a.file && !b.file) || (a.file && b.file)) {
            // sensitivity: "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A
            // numeric: true: Whether numeric collation should be used, such that "1" < "2" < "10"
            return a.displayName.localeCompare(b.displayName, undefined, {
                numeric: true,
                sensitivity: "base",
            })
        }
        if (a.file && !b.file) {
            return 1
        } else {
            return -1
        }
    },
    filterFn: filterFn: (node) => node.name !== "tags", // filters out 'tags' folder
    mapFn: undefined,
    // what order to apply functions in
    order: ["filter", "map", "sort"],
  })


// Graph
Component.Graph({
    localGraph: {
        drag: true, // whether to allow panning the view around
        zoom: true, // whether to allow zooming in and out
        depth: 2, // how many hops of notes to display
        scale: 1.1, // default view scale
        repelForce: 0.5, // how much nodes should repel each other
        centerForce: 0.3, // how much force to use when trying to center the nodes
        linkDistance: 30, // how long should the links be by default?
        fontSize: 0.6, // what size should the node labels be?
        opacityScale: 2, // how quickly do we fade out the labels when zooming out?
        removeTags: ["navigation"], // what tags to remove from the graph
        showTags: true, // whether to show tags in the graph
    },
    globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,
        scale: 0.9,
        repelForce: 0.5,
        centerForce: 0.3,
        linkDistance: 30,
        fontSize: 0.6,
        opacityScale: 1,
        removeTags: [], // what tags to remove from the graph
        showTags: true, // whether to show tags in the graph
    },
})