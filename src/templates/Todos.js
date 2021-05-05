import { Content, Panel, Input } from 'rsuite'
import PanelHeader from 'lib/PanelHeader'
import { useSpring, animated } from 'react-spring'
import { config } from 'config/spring'

const contentStyle = {
    backgroundColor: '#F3F4F6',
    marginTop: '1rem',
    marginLeft: '1rem',
    marginRight: '1rem'
}

export default function Todos() {
    const props = useSpring(config)
    const keyPress = (ev) => {
        if (ev.charCode === 13) {
            ev.preventDefault();
            console.log('enter pressed:', ev.target.value)
            ev.target.value = ''
        }
    }

    return (
        <animated.div style={props}>
            <Content style={contentStyle}>
                <Panel id="pnlContent" header={<PanelHeader title="Todos" />} bordered shaded>
                    <Input placeholder="task description" size="lg" onKeyPress={keyPress} />
                </Panel>
            </Content>
        </animated.div>
    )
}
