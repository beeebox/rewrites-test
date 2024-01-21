const matches = [
  {
    source: '/changelog',
    destination: '/try/changelog',
    // permanent: true
  }
]

module.exports = {
  async rewrites() {
    // console.log('matches', matches)
    return {
      beforeFiles: matches,
      // fallback: matches,
    }
    // return matches
  } 
}
