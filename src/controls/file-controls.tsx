import {CSSProperties} from 'react'
import './file-controls.css'
import {DownloadIcon, FolderIcon, InfoIcon, PlusIcon} from '../icons'
import {useTranslation, Trans} from 'react-i18next'

type Props = {
    onSave: () => void
    onOpen: () => void
    onNew: () => void
    style?: CSSProperties
}

export function FileControls({onSave, onOpen, onNew, style}: Props) {
    const {t} = useTranslation()
    return (
        <div className="FileControls" style={style}>
            <a title="About" data-testin="about" target="_blank" href="https://github.com/vangelov/devresume">
                <InfoIcon size={16} />
                <div>{t('welcome')}</div>
                <Trans i18nKey="author">
                    作者是: <code>{Date.now()}</code>
                </Trans>
            </a>
            {/* <select
                onChange={(evt) => {
                    i18n.changeLanguage(evt.target.value)
                }}>
                {Object.keys(i18n.lngs).map((lng) => (
                    <option key={lng} value={lng} label={lngs[lng].nativeName} style={{fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal'}} />
                ))}
            </select> */}

            <button data-testid="save" onClick={onSave}>
                <DownloadIcon size={14} style={{marginRight: '0.5rem'}} />
                Save
            </button>

            <button data-testid="open" onClick={onOpen}>
                <FolderIcon size={14} style={{marginRight: '0.5rem'}} />
                Open
            </button>

            <button data-testid="new" onClick={onNew}>
                <PlusIcon size={14} style={{marginRight: '0.5rem'}} />
                New
            </button>
        </div>
    )
}
