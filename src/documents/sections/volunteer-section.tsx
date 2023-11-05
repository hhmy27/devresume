import {Voluteering} from '../../types'
import {Link} from '@react-pdf/renderer'
import {EventHighlightItem, EventItem, EventsSection} from '../events-section'
import {ReactElement} from 'react'
import {Theme} from '../theme'
import {useTranslation} from 'react-i18next'

export type VolunteeringItemProps = {
    volunteering: Voluteering
    theme: Theme
}

export function VolunteeringItem({volunteering, theme}: VolunteeringItemProps) {
    const titleDetails: Array<ReactElement> = []

    if (volunteering.organization) {
        titleDetails.push(
            <Link src={volunteering.url || ''} style={{color: theme.color.text, textDecoration: 'none'}}>
                {volunteering.organization}
            </Link>
        )
    }

    return (
        <EventItem
            title={volunteering.position}
            description={volunteering.summary}
            titleDetails={titleDetails}
            startDate={volunteering.startDate}
            endDate={volunteering.endDate}
            theme={theme}>
            {volunteering.highlights &&
                Array.isArray(volunteering.highlights) &&
                volunteering.highlights.map((highlight) => highlight && <EventHighlightItem key={highlight}>{highlight}</EventHighlightItem>)}
        </EventItem>
    )
}

//

type SectionProps = {
    volunteer: Array<Voluteering | null>
    theme: Theme
}

export function VolunteerSection({volunteer, theme}: SectionProps) {
    const {t} = useTranslation()
    return (
        <EventsSection theme={theme} title={t('otherinfo')}>
            {volunteer.map((volunteering, index) => volunteering && <VolunteeringItem key={index} theme={theme} volunteering={volunteering} />)}
        </EventsSection>
    )
}
