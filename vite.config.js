
import {createVuePlugin} from 'vite-plugin-vue2'
import ViteComponents from 'vite-plugin-components'

export default {
    plugins: [
        createVuePlugin(),
        ViteComponents(),  // No error when this plugin removed
    ],
    css: {
        preprocessorOptions: {
            sass: {
                additionalData: '$color: #f00',
            },
        },
    },
    build: {
        sourcemap: true,
    },
}
