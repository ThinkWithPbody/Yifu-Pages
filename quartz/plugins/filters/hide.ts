import { QuartzFilterPlugin } from "../types"

export const RemoveHidden: QuartzFilterPlugin<{}> = () => ({
  name: "RemoveHidden",
  shouldPublish(_ctx, [_tree, vfile]) {
    const hideFlag: boolean =
      vfile.data?.frontmatter?.hide === true || vfile.data?.frontmatter?.hide === "true"
    return !hideFlag
  },
})
