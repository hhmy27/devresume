import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

export const lngs = {
    en: {nativeName: 'English'},
    zh: {nativeName: '中文'}
}

i18n
    // 检测用户当前使用的语言
    // 文档: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // 注入 react-i18next 实例
    .use(initReactI18next)
    // 初始化 i18next
    // 配置参数的文档: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: {
                    skills: `Skills`,
                    projects: `Projects`,
                    education: `Education`,
                    works: `Work Experience`,
                    awards: 'Awards',
                    publications: 'Publications',
                    save: 'Save',
                    open: 'Open',
                    new: 'New',
                    export: 'Export'
                }
            },
            zh: {
                translation: {
                    skills: `技术栈`,
                    projects: `项目经历`,
                    education: `教育背景`,
                    works: `工作经历`,
                    awards: '荣誉',
                    publications: '发表',
                    save: '保存',
                    open: '打开',
                    new: '新建',
                    export: '导出'
                }
            }
        }
    })

export default i18n
