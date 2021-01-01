import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import { Form } from 'react-bootstrap'


class ContactPage extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: '',
            emailSent: null
        }
    }
    
    render() {
        return(
            <div>
                <Hero title={this.props.title} />

                <Content>
                    <Form>
                        <Form.Group>
                            <Form.Label htmlFor="Full Name">Full Name</Form.Label>
                            <Form.Control id='full-name' name='name' type='text' value={this.state.name} onChange={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="Full Name">Full Name</Form.Label>
                            <Form.Control id='full-name' name='name' type='text' value={this.state.name} onChange={this.handleChange}/>
                        </Form.Group>
                    </Form>


                </Content>
            </div>
        )
    }
}

export default ContactPage;