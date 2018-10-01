export const imports = {
  'home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "home" */ 'home.mdx'),
  'theme.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "theme" */ 'theme.mdx'),
  'components/Box.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-box" */ 'components/Box.mdx'),
  'components/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-button" */ 'components/Button.mdx'),
  'components/Checkbox.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-checkbox" */ 'components/Checkbox.mdx'),
  'components/Input.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-input" */ 'components/Input.mdx'),
  'components/Select.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-select" */ 'components/Select.mdx'),
  'components/Tabs.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "components-tabs" */ 'components/Tabs.mdx'),
}
