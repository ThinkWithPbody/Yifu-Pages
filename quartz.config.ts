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
                darkMode: {
                    light: "#000000",
                    lightgray: "#1A1A1A",
                    gray: "#FFFFFF",
                    darkgray: "#F0F0F0",
                    dark: "#FFFFFF",
                    secondary: "#65FE08", // Bright Lime Green
                    tertiary: "#65FE08",
                    highlight: "rgba(101, 254, 8, 0.2)",
                },
                lightMode: {
                    light: "#FFFFFF",
                    lightgray: "#F0F0F0",
                    gray: "#808080",
                    darkgray: "#404040",
                    dark: "#000000",
                    secondary: "#FF00FF", // CMYK Magenta
                    tertiary: "#FF00FF",
                    highlight: "rgba(255, 0, 255, 0.1)",
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
