import {useTranslation} from 'react-i18next'
// export function formatDate(stringOrNumber: string | number): string | null {
//     const dateString = stringOrNumber.toString()
//     const parts = dateString.split('-').filter((part) => part !== '')
//     const partsCount = parts.length
//     if (partsCount === 0) return null

//     const year = parts[0]
//     if (partsCount === 1) return year

//     const date = new Date(dateString)
//     const month = date.toLocaleString('en-US', {month: 'short'})
//     return `${month} ${year}`
// }

export function formatDate(stringOrNumber: string | number): string | null {
    const {t} = useTranslation()
    const dateString = stringOrNumber.toString()
    const parts = dateString.split('-').filter((part) => part !== '')
    const partsCount = parts.length
    if (partsCount === 0) return null

    const year = parts[0]
    if (partsCount === 1) return year

    const date = new Date(dateString)
    // const month = t('monthNames')[date.getMonth() + 1]
    const month = parts[1]
    return `${year} 年 ${month} 月`
}
