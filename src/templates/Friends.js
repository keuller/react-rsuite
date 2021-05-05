import { useEffect, useState  } from 'react'
import { Grid, Col, List, AutoComplete } from 'rsuite'

const gridStyle = {
    marginBottom: '1rem'
}

const itemStyle = {
    backgroundColor: '#F3F4F6'
}

const imgStyle = {
    display: 'block',
    width: '300px',
    marginLeft: 'auto',
    marginRight: 'auto'
}

export default function Friends() {
    const [list, setList] = useState([])

    useEffect(function init() {
        fetch('https://raw.githubusercontent.com/keuller/react-rsuite/main/data/friends.json')
            .then(res => res.json())
            .then(data => setList(data))
    }, [])

    return (
        <>
            <Grid style={gridStyle} fluid>
                <Col md={12}>
                    <h4> Members </h4>
                    <List>
                    {list.map(member => (
                        <List.Item style={itemStyle} key={member.id}>{member.name}</List.Item>
                    ))}
                    </List>
                </Col>

                <Col md={12}>
                    <img src="/assets/friends.jpg" alt="friends" style={imgStyle} />
                </Col>
            </Grid>
        </>
    )
}
