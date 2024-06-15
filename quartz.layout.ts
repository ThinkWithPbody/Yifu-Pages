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


Component.Explorer({
    sortFn: (a, b) => {
        function getParentFolderName(node) {
            const pathParts = node.split('/');
            return pathParts[pathParts.length - 2];
        }

        if ((!a.file && !b.file) || (a.file && b.file)) {
            // sensitivity: "base": Only strings that differ in base letters compare as unequal. Examples: a ≠ b, a = á, a = A
            // numeric: true: Whether numeric collation should be used, such that "1" < "2" < "10"
            if (a.name === getParentFolderName(a) && b.name !== getParentFolderName(b)) {
                return 1
            } else if (a.name !== getParentFolderName(a) && b.name === getParentFolderName(b)) {
                return -1
            } else {
                return a.displayName.localeCompare(b.displayName, undefined, {
                    numeric: true,
                    sensitivity: "base",
                })
            }
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