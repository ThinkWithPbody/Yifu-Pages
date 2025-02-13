import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { IconFolderOptions } from "./quartz/plugins/components/FileIcons";

// components shared across all pages
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
        Component.ArticleTitle(),
        Component.ContentMeta({ showReadingTime: false }),
        Component.TagList(),
    ],
    left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Search(),
        Component.Darkmode(),
        Component.Explorer({
            folderClickBehavior: "link",
            folderDefaultState: "open",
            filterFn: (node) => {
                return (
                    node.file?.frontmatter?.tags?.includes("badtag") !== true &&
                    node.file?.frontmatter?.hide !== true
                )
            },
        }),
    ],
    right: [
        Component.Graph({
            localGraph: {
                drag: true, // whether to allow panning the view around
                zoom: true, // whether to allow zooming in and out
                depth: 2, // how many hops of notes to display
                scale: 1.5, // default view scale
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
        }),
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
        Component.Explorer({
            folderClickBehavior: "link",
            folderDefaultState: "open",
            filterFn: (node) => {
                console.log("Processing:", node.file?.name, "HIDE VALUE:", node.file?.frontmatter?.hide, "TYPE:", typeof node.file?.frontmatter?.hide);
                return (
                    node.file?.frontmatter?.tags?.includes("badtag") !== true &&
                    node.file?.frontmatter?.hide !== true
                )
            },
        }),
    ],
    right: [],
}

// Explorer
Component.Explorer({
    folderClickBehavior: "link", // what happens when you click a folder ("link" to navigate to folder page on click or "collapse" to collapse folder on click)
    folderDefaultState: "open", // default state of folders ("collapsed" or "open")
    useSavedState: true, // whether to use local storage to save "state" (which folders are opened) of explorer

    filterFn: (node) => {
        // set containing names of everything you want to filter out
        const omit = new Set(["tags", "hosting"])
        return !omit.has(node.name.toLowerCase())
    },

    filterFn: (node) => {
        // exclude files with the tag "badtag"
        return node.file?.frontmatter?.tags?.includes("badtag") !== true
    },

    mapFn: (node) => {
        node.displayName = node.displayName.toUpperCase()
    },

    mapFn: (node) => {
        // dont change name of root node
        if (node.depth > 0) {
            // set emoji for file/folder
            if (node.file) {
                node.displayName = "📄 " + node.displayName
            } else {
                node.displayName = "📁 " + node.displayName
            }
        }
    },
    order: ["filter", "sort", "map"],
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