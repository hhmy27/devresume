import {Font} from '@react-pdf/renderer'

Font.register({
    family: 'Roboto',
    fonts: [
        {
            src: 'AdobeSongStd-Light.otf',
            // src: "RobotoRegular.ttf",
            fontWeight: 'normal'
        },

        {
            src: 'AdobeKaitiStd-Regular.otf',
            // src: "RobotoMedium.ttf",
            fontWeight: 'medium'
        },

        {
            src: 'AdobeHeitiStd-Regular.otf',
            // src: "RobotoItalic.ttf",
            fontStyle: 'italic'
        }
    ]
})

Font.registerHyphenationCallback((word) => {
    if (word.length === 1) {
        return [word]
    }

    return Array.from(word)
        .map((char) => [char, ''])
        .reduce((arr, current) => {
            arr.push(...current)
            return arr
        }, [])
})
