const langDecider = (lang: string, en: string | JSX.Element, fa: string | JSX.Element) => {
    return lang == 'en' ? en : fa
}

export default langDecider