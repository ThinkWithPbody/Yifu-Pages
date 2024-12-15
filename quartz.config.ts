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
                header: "Gentium Plus",
                body: "Noto Sans",
                code: "Fira Code",
            },
            colors: {
                lightMode: {
                    light: "#FFFFFF",
                    lightgray: "#E1E1E1",
                    gray: "#8A8A8A",
                    darkgray: "#050505",
                    dark: "#000000",
                    secondary: "#121212",
                    tertiary: "#FFA000",
                    highlight: "#D9D9D9",
                },
                darkMode: {
                    light: "#000000",
                    lightgray: "#1E1E1E",
                    gray: "#757575",
                    darkgray: "#FAFAFA",
                    dark: "#FFFFFF",
                    secondary: "#EDEDED",
                    tertiary: "#FFCA42",
                    highlight: "#262626",
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
