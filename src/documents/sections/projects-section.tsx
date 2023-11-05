import {Project} from '../../types'
import {EventHighlightItem, EventItem, EventsSection} from '../events-section'
import {Theme} from '../theme'
import {useTranslation} from 'react-i18next'

export type ProjectItemProps = {
    project: Project
    theme: Theme
}

export function ProjectItem({project, theme}: ProjectItemProps) {
    return (
        <EventItem title={project.name} url={project.url} description={project.description} startDate={project.startDate} endDate={project.endDate} theme={theme}>
            {project.highlights &&
                Array.isArray(project.highlights) &&
                project.highlights.map((hightlight) => hightlight && <EventHighlightItem key={hightlight}>{hightlight}</EventHighlightItem>)}
        </EventItem>
    )
}

//

type SectionProps = {
    projects: Array<Project | null>
    theme: Theme
}

export function ProjectsSection({projects, theme}: SectionProps) {
    const {t} = useTranslation()
    return (
        <EventsSection theme={theme} title={t('projects')}>
            {projects.map((project, index) => project && <ProjectItem key={index} theme={theme} project={project} />)}
        </EventsSection>
    )
}
