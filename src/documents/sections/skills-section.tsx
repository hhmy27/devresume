import {Skill} from '../../types'
import {GroupItem, GroupedSection} from '../grouped-section'
import {Theme} from '../theme'
import {useTranslation} from 'react-i18next'

type SkillItemProps = {
    skill: Skill
}

export function SkillItem({skill}: SkillItemProps) {
    const {keywords} = skill
    const description = keywords && Array.isArray(keywords) ? keywords.join(', ') : ''

    return <GroupItem title={skill.name} description={description} />
}

//

type Props = {
    skills: Array<Skill | null>
    theme: Theme
}

export function SkillsSection({skills, theme}: Props) {
    const {t} = useTranslation()
    return (
        <GroupedSection theme={theme} title={t('skills')}>
            {skills.map((skill, index) => skill && <SkillItem key={index} skill={skill} />)}
        </GroupedSection>
    )
}
