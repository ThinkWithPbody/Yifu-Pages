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
                    // Original: #000000 | New: #1C2022 editor.background
                    light: "rgb(28,32,34)",
                    // Original: #1E1E1E | New: #111518 editorGroup.border (tick box or graph view border)
                    lightgray: "rgb(100,100,100)",
                    // Original: #757575 | New: #C0C0C0 input.foreground (subtitle)
                    gray: "rgb(255,255,255)",
                    // Original: #FAFAFA | New: #C0C0C0 menu.foreground (main text)
                    darkgray: "rgb(237,237,237)",
                    // Original: #FFFFFF | New: #24282A menu.selectionBackground (secondary menu items and table of contents)
                    dark: "rgb(237,237,237)",
                    // Original: #EDEDED | New: #1C2022 activityBar.background (main menu items)
                    secondary: "rgb(255,255,255)",
                    // Original: #FFCA42 | New: #40a8f348 ditor.selectionBackground
                    tertiary: "rgb(255,202,66)",
                    // Original: #262626 | New: #191d1f sideBar.background (background for secondary)
                    highlight: "rgb(55,65,64)",
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
            Plugin.SyntaxHighlighting({
                theme: {
                    light: "github-light",
                    dark: "github-dark",
                },
                keepBackground: false,
            }),
            Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
            Plugin.GitHubFlavoredMarkdown(),
            Plugin.TableOfContents(),
            Plugin.CrawlLinks({ markdownLinkResolution: "relative" }),// relative, absolute, shortest
            Plugin.Description(),
            Plugin.Latex({ renderEngine: "katex" }),
            Plugin.HardLineBreaks(),
        ],
        filters: [
            Plugin.RemoveDrafts(),
            Plugin.RemoveHidden(),
        ],
        emitters: [
            Plugin.AliasRedirects(),
            Plugin.ComponentResources(),
            Plugin.ContentPage(),
            Plugin.FolderPage(),
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
