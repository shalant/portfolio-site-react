import React from 'react';
import Card from './Card'
import dynamicWine from '../assets/images/dynamicWine.png'
import informedTrades from '../assets/images/informedTrades.png'
import employeeDirectory from '../assets/images/employeeDirectory.png'
import SchedulerAppScreenshot from '../assets/images/SchedulerAppScreenshot.png'
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state= {
            items: [
                {
                    id: 0,
                    title: "Dynamic Wine",
                    subTitle: "Blah",
                    imgSrc: dynamicWine,
                    link: 'https://github.com/carolinetwyman/dynamicwine',
                    selected: true
                },
                {
                    id: 1,
                    title: "Informed Trades",
                    subTitle: "Blah",
                    imgSrc: informedTrades,
                    link: 'https://shalant.github.io/Informed_Trades',
                    selected: false

                },
                {
                    id: 2,
                    title: "Employee Directory",
                    subTitle: "Blah",
                    imgSrc: employeeDirectory,
                    link: 'https://github.com/shalant/employee_directory_react',
                    selected: false

                },
                {
                    id: 3,
                    title: "Scheduler App",
                    subTitle: "Blah",
                    imgSrc: SchedulerAppScreenshot,
                    link: 'https://github.com/shalant/SchedulerApp',
                    selected: false

                },
                // {
                //     id: 4,
                //     title: "Number 1",
                //     subTitle: "Blah",
                //     imgSrc: ,
                //     link: ,
                //     selected: false
                //}
            ]
        }
    }

handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
        if(item.id !== id) {
            item.selected = false;
        }
    });

    this.setState({
        items
    });
}

makeItems = (items) => {
    return items.map(item => {
        return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
}


render() {
    return (
        <Container fluid={true}>
            <Row className='justify-content-around'>
                {this.makeItems(this.state.items)}
            </Row>
        </Container>
    )
}

}

export default Carousel;