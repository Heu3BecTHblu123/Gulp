import plumber from 'gulp-plumber'; /* обработка ошибок */
import notify from 'gulp-notify'; /* Вывод сообщения */
import browserSync from 'browser-sync'; /* Этот плагин для открытия браузера и перезагрузки */


// Экспортируем объект 
export const plugins = {
    plumber,
    notify,
    browserSync
}