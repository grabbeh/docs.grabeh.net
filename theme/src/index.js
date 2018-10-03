import React from 'react'
import { theme, ThemeConfig, DocPreview } from 'docz'
import { ThemeProvider } from 'styled-components'
import themeConfig from './theme'
import H1 from './components/ui/H1'
import Render from './components/ui/Render'
import Link from './components/ui/Link'
import List from './components/ui/List'
import Loading from './components/ui/Loading'
import Table from './components/ui/Table'
import Paragraph from './components/ui/Paragraph'
import InlineCode from './components/ui/InlineCode'
import Menu from './components/shared/SideBar'
import Main from './components/shared/Main'
import Header from './components/shared/Header'

const Theme = () => (
  <ThemeConfig>
    {config => (
      <ThemeProvider theme={config}>
        <div>
          <Header title={config.title} />
          <Menu config={config} />
          <Main>
            <DocPreview
              components={{
                ul: List,
                a: Link,
                h1: H1,
                render: Render,
                loading: Loading,
                inlineCode: InlineCode,
                table: Table,
                p: Paragraph
              }}
            />
          </Main>
        </div>
      </ThemeProvider>
    )}
  </ThemeConfig>
)

export default theme(themeConfig)(Theme)
