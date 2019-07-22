module.exports = {
  types: [
    {
      value: 'feat',
      name: '✨  feat:     A new feature' // 新增功能
    },
    {
      value: 'fix',
      name: '🐞  fix:      A bug fix' // 修复bug
    },
    {
      value: 'docs',
      name: '📚  docs:     Documentation only changes' // 文档变更
    },
    {
      value: 'style',
      name:
        '💅  style:    Code Style, Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)' // 代码格式（空格、分号等格式修改）
    },
    {
      value: 'refactor',
      name:
        '🛠  refactor: A code change that neither fixes a bug nor adds a feature' // 代码重构
    },
    {
      value: 'test',
      name: '🏁  test:     Add missing tests or correcting existing tests' // 测试
    },
    {
      value: 'chore',
      name:
        "🗯  chore:    Changes that don't modify src or test files. Such as updating build tasks, package manager" // 变更构建流程或辅助工具
    },
    {
      value: 'revert',
      name: '⏪  revert:   Revert to a commit' // 代码回滚
    }
  ],

  scopes: [],

  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix']
}
