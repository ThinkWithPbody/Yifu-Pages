import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
    configuration: {
        pageTitle: "Yifu's Lab",
        enableSPA: true,
        enablePopovers: true,
        analytics: {
            provider: "plausible",
        },
        locale: "en-US",
        baseUrl: "https://thinkwithpbody.github.io/Yifu-Pages",
        ignorePatterns: ["private", "templates", ".obsidian"],
        defaultDateType: "created",
        theme: {
            fontOrigin: "googleFonts",
            cdnCaching: true,
            typography: {
                header: "Noto Sans Mono",
                body: "Fira Code",
                code: "Fira Code",
            },
            colors: {
                lightMode: {
                    light: "#FAFAFA",
                    lightgray: "#E1E1E1",
                    gray: "#8A8A8A",
                    darkgray: "#050505",
                    dark: "#000000",
                    secondary: "#121212",
                    tertiary: "#FFCA42",
                    highlight: "#EDEDED",
                },
                darkMode: {
                    // Original: #000000 | New: editor.background
                    light: "#1C2022",
                    // Original: #1E1E1E | New: editorGroup.border (tick box or graph view border)
                    lightgray: "#111518",
                    // Original: #757575 | New: input.foreground (subtitle)
                    gray: "#C0C0C0",
                    // Original: #FAFAFA | New: menu.foreground (main text)
                    darkgray: "#C0C0C0",
                    // Original: #FFFFFF | New: menu.selectionBackground (secondary menu items and table of contents)
                    dark: "#24282A",
                    // Original: #EDEDED | New: activityBar.background (main menu items)
                    secondary: "#1C2022",
                    // Original: #FFCA42 | New: editor.selectionBackground
                    tertiary: "#40a8f348",
                    // Original: #262626 | New: sideBar.background (background for secondary)
                    highlight: "#191d1f",
                },
            }

            //   colors: {
            //     lightMode: {
            //       light: "#faf8f8",
            //       lightgray: "#e5e5e5",
            //       gray: "#b8b8b8",
            //       darkgray: "#4e4e4e",
            //       dark: "#2b2b2b",
            //       secondary: "#284b63",
            //       tertiary: "#84a59d",
            //       highlight: "rgba(143, 159, 169, 0.15)",
            //     },
            //     darkMode: {
            //       light: "#161618",
            //       lightgray: "#393639",
            //       gray: "#646464",
            //       darkgray: "#d4d4d4",
            //       dark: "#ebebec",
            //       secondary: "#7b97aa",
            //       tertiary: "#84a59d",
            //       highlight: "rgba(143, 159, 169, 0.15)",
            //     },
            //   },
        },
    },
    plugins: {
        transformers: [
            Plugin.FrontMatter(),
            Plugin.CreatedModifiedDate({
                priority: ["frontmatter", "filesystem"],
            }),
            Plugin.Latex({ renderEngine: "katex" }),
            Plugin.SyntaxHighlighting({
                theme: {
                    light: "github-light",
                    dark: "github-dark",
                },
                keepBackground: false,
            }),
            Plugin.ObsidianFlavoredMarkdown({ comments: true }),
            Plugin.GitHubFlavoredMarkdown(),
            Plugin.TableOfContents(),
            Plugin.CrawlLinks({ markdownLinkResolution: "relative" }),// relative, absolute, shortest
            Plugin.Description(),
            Plugin.HardLineBreaks(),
        ],
        filters: [Plugin.RemoveDrafts()],
        emitters: [
            Plugin.AliasRedirects(),
            Plugin.ComponentResources(),
            Plugin.ContentPage(),
            //   Plugin.FolderPage(),
            Plugin.TagPage(),
            Plugin.ContentIndex({
                enableSiteMap: true,
                enableRSS: true,
            }),
            Plugin.Assets(),
            Plugin.Static(),
            Plugin.NotFoundPage(),
        ],
    },
}

export default config
