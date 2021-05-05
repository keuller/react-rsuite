import { Content, Panel } from 'rsuite'
import PanelHeader from 'lib/PanelHeader'
import { useSpring, animated } from 'react-spring'
import { config } from 'config/spring'
import 'templates/About.css'

const contentStyle = {
    backgroundColor: '#F3F4F6',
    marginTop: '1rem',
    marginLeft: '1rem',
    marginRight: '1rem'
}

export default function About() {
    const props = useSpring(config)
    return (
        <animated.div style={props}>
            <Content style={contentStyle}>
                <Panel id="pnlContent" header={<PanelHeader title="About" />} bordered shaded>
                    <div className="k-container">

                        <div className="k-block k-description">
                            <div>
                                <h3 className="k-title">React Suite</h3>
                                <p className="k-text">
                                    A suite of React components, sensible UI design, and a friendly development experience.
                                </p>
                            </div>
                        </div>

                        <div className="k-block">
                            <div className="k-rsuite-container">
                                <img src="/assets/rsuite-logo.svg" alt="rsuite" className="k-rsuite-logo" />
                            </div>
                            <div className="k-react-logo">
                                <img src="/assets/react-logo.svg" alt="react-logo" />
                            </div>
                        </div>
                    </div>
                </Panel>
            </Content>
        </animated.div>
    )
}
