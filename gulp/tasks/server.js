import { notify } from "browser-sync"


export const server = (done) => {
    app.plugins.browserSync.init({
        server: {
            baseDir: `${app.path.build.html}` /* базовая папка откуда нужно запустить файл */
        },
        notify: false, /* сообщение в браузере */
        port: 3000
    })
} 