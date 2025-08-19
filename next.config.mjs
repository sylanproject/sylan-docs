import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  },
  contentDirBasePath: '/'
})

export default withNextra({
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  reactStrictMode: true
})
