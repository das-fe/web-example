import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import { execSync } from 'child_process'
import { dasFeWebBuild } from '@das-fe/cli'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const cwd = resolve(__dirname, '../../')

dasFeWebBuild().then(() => {
  execSync(`npx vite build`, { cwd, stdio: 'inherit' })
})
