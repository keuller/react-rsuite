import { Content, Panel, Button } from 'rsuite'
import PanelHeader from 'lib/PanelHeader'
import { useSpring, animated } from 'react-spring'
import { config } from 'config/spring'
import Friends from 'templates/Friends'

const contentStyle = {
    backgroundColor: '#F3F4F6',
    marginTop: '1rem',
    marginLeft: '1rem',
    marginRight: '1rem'
}

export default function Home() {
    const props = useSpring(config)
    return (
        <animated.div style={props}>
            <Content style={contentStyle}>
                <Panel id="pnlContent" header={<PanelHeader title="Home" />} bordered shaded>
                    <Friends />
                </Panel>
            </Content>
        </animated.div>
    )
}