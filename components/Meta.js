import Head from 'next/head'

function Meta({ title, keywords, description }) {
  return (
    <div>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf8" />
      <link rel="icon" href="/favicon.icon" />
    </div>
  )
}

Meta.defaultProps = {
  title: 'Home',
  keywords: 'web development',
  description: 'Get the latest news ',
}

export default Meta
