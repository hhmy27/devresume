import {Publication} from '../../types'
import {Text} from '@react-pdf/renderer'
import {EventItem, EventsSection} from '../events-section'
import {ReactElement} from 'react'
import {Theme} from '../theme'
import {useTranslation} from 'react-i18next'

export type PublicationItemProps = {
    publication: Publication
    theme: Theme
}

export function PublicationItem({publication, theme}: PublicationItemProps) {
    const titleDetails: Array<ReactElement> = []
    const {name, url, publisher, releaseDate, summary} = publication

    if (publisher) titleDetails.push(<Text>{publisher}</Text>)

    return <EventItem title={name} description={summary} url={url} titleDetails={titleDetails} startDate={releaseDate} theme={theme} />
}

//

type SectionProps = {
    publications: Array<Publication | null>
    theme: Theme
}

export function PublicationsSection({publications, theme}: SectionProps) {
    const {t} = useTranslation()
    return (
        <EventsSection theme={theme} title={t('publications')}>
            {publications.map((publication, index) => publication && <PublicationItem key={index} theme={theme} publication={publication} />)}
        </EventsSection>
    )
}
