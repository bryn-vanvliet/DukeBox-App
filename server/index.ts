import server from './server.ts'

const port = 5000

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Proxy server running at http://localhost:${port}`)
})
