
const panelHeader = {
    fontWeight: 600,
    padding: '.5rem 4px',
    fontSize: '20px',
    lineHeight: '1.2rem',
    borderBottom: '1px solid #ddd'
}

export default function PanelHeader({ title }) {
    return (
        <h3 style={panelHeader}>{title}</h3>
    )
}
