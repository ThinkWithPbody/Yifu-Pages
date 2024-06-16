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
    header: [
        Component.MobileOnly(
            Component.ExplorerBurger({
                folderDefaultState: "open",
                folderClickBehavior: "link",
                iconSettings: iconsOptions,
            }),
        ),
        Component.MobileOnly(Component.PageTitle()),
        Component.MobileOnly(Component.Spacer()),
        Component.Search(),
        Component.Darkmode(),
    ],
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
        Component.ContentMeta({ showReadingTime: true }),
        Component.TagList(),
    ],
    left: [
        Component.DesktopOnly(Component.PageTitle()),
        Component.DesktopOnly(
            Component.ExplorerBurger({
                folderClickBehavior: "link",
                folderDefaultState: "collapsed",
                useSavedState: true,
                title: "",
                iconSettings: iconsOptions,
            }),
        ),
    ],
    right: [
        Component.DesktopOnly(Component.Graph()),
        Component.TableOfContents(),
        Component.DesktopOnly(Component.Backlinks()),
    ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
    beforeBody: defaultContentPageLayout.beforeBody,
    left: defaultContentPageLayout.left,
    right: [],
}

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
      opacityScale: 1, // how quickly do we fade out the labels when zooming out?
      removeTags: [], // what tags to remove from the graph
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

  // Folder Tree Sort
Component.Explorer({
    sortFn: (a, b) => {
        if ((!a.file && !b.file) || (a.file && b.file)) {
            // Check if either a or b has a name matching its parent's name
            const aMatchesParent = a.fullPath.endsWith(`/${a.name}/${a.name}`);
            const bMatchesParent = b.fullPath.endsWith(`/${b.name}/${b.name}`);

            if (aMatchesParent && !bMatchesParent) {
                return -1;
            }
            if (!aMatchesParent && bMatchesParent) {
                return 1;
            }

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