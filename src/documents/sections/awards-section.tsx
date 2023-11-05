import {Award} from '../../types'
import {Text} from '@react-pdf/renderer'
import {EventItem, EventsSection} from '../events-section'
import {ReactElement} from 'react'
import {Theme} from '../theme'
import {useTranslation} from 'react-i18next'

export type AwardItemProps = {
    award: Award
    theme: Theme
}

export function AwardItem({award, theme}: AwardItemProps) {
    const titleDetails: Array<ReactElement> = []

    if (award.awarder) {
        titleDetails.push(<Text>{award.awarder}</Text>)
    }

    return <EventItem theme={theme} title={award.title} description={award.summary} titleDetails={titleDetails} startDate={award.date} />
}

//

type SectionProps = {
    awards: Array<Award | null>
    theme: Theme
}

export function AwardsSection({awards, theme}: SectionProps) {
    const {t} = useTranslation()
    return (
        <EventsSection theme={theme} title={t('awards')}>
            {awards.map((award, index) => award && <AwardItem key={index} theme={theme} award={award} />)}
        </EventsSection>
    )
}
