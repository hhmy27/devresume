import {EducationPlace} from '../../types'
import {Link} from '@react-pdf/renderer'
import {EventHighlightItem, EventItem, EventsSection} from '../events-section'
import {ReactElement} from 'react'
import {Theme} from '../theme'
import {useTranslation} from 'react-i18next'

export type EducationPlaceItemProps = {
    educationPlace: EducationPlace
    theme: Theme
}

export function EducationPlaceItem({educationPlace, theme}: EducationPlaceItemProps) {
    const titleDetails: Array<ReactElement> = []

    if (educationPlace.institution) {
        titleDetails.push(
            <Link src={educationPlace.url || ''} style={{color: theme.color.text, textDecoration: 'none'}}>
                {educationPlace.institution}
            </Link>
        )
    }

    return (
        <EventItem
            title={educationPlace.area}
            description={educationPlace.score}
            titleDetails={titleDetails}
            startDate={educationPlace.startDate}
            endDate={educationPlace.endDate}
            theme={theme}>
            {educationPlace.courses &&
                Array.isArray(educationPlace.courses) &&
                educationPlace.courses.map((course) => course && <EventHighlightItem key={course}>{course}</EventHighlightItem>)}
        </EventItem>
    )
}

//

type SectionProps = {
    education: Array<EducationPlace | null>
    theme: Theme
}

export function EducationSection({education, theme}: SectionProps) {
    const {t} = useTranslation()
    return (
        <EventsSection theme={theme} title={t('education')}>
            {education.map((educationPlace, index) => educationPlace && <EducationPlaceItem key={index} theme={theme} educationPlace={educationPlace} />)}
        </EventsSection>
    )
}
