import concurrently from 'concurrently'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const cwd = resolve(__dirname, '../../')

concurrently(
  [
    { command: `node scripts/dev/das-fe.js`, name: 'das-fe' },
    { command: `npx vite`, name: 'vite' },
  ],
  { cwd },
)
