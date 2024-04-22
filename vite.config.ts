import react from '@vitejs/plugin-react'
import vike from 'vike/plugin'
import { UserConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'

const config: UserConfig = {
  plugins: [react(), vike(), legacy({
    targets: ['> 0.1%', 'last 2 versions', 'not dead']
  })]
}

export default config
