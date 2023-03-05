/** @format */

import { defineUserConfig, defaultTheme } from 'vuepress';
import { getDirname, path } from '@vuepress/utils';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
    lang: 'zh-CN',
    markdown: {
        importCode: {
            handleImportPath: str =>
                str.replace(/^@/, path.resolve(__dirname, '')),
        },
    },
    plugins: [
        registerComponentsPlugin({
            components: {
                IframeLoad: path.resolve(
                    __dirname,
                    './components/iframe-load.vue'
                ),
            },
        }),
    ],
});
