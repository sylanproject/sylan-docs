/* eslint-env node */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  metadataBase: new URL('https://docs.sylan.xyz'),
  title: {
    template: '%s - Sylan Protocol Docs',
  },
  description: 'Sylan Protocol Documentation',
  applicationName: 'Sylan Protocol Docs',
  generator: 'Next.js',
  appleWebApp: {
    title: 'Sylan Protocol Docs',
  },
  other: {
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'msapplication-TileColor': '#fff'
  },
  twitter: {
    site: 'https://x.com/sylanprotocol'
  }
}

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar
      logo={
        <div>
          <b>Sylan</b>{' '}
          <span style={{ opacity: '60%' }}>Protocol Docs</span>
        </div>
      }
      // Next.js discord server
      chatLink="https://discord.gg/"
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          banner={<Banner storageKey="Sylan Alert">⚠️ Alert: Sylan is under active development—only trust contract/wallet addresses announced on our official channels; we will never DM you, ask for funds, or run surprise airdrops/presales.</Banner>}
          navbar={navbar}
          footer={<Footer>MIT {new Date().getFullYear()} © Sylan.</Footer>}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/sylanproject/sylan-docs/blob/main/examples/docs"
          sidebar={{ defaultMenuCollapseLevel: 2 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
