import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';

class CustomModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const images = require.context('../images', true);
    let sc = images(`./${this.props.imagePath}`);
    return (
      <Container>
        <Button color="danger" onClick={this.toggle}> Error/Fail </Button>
        <Modal size="lg"  isOpen={this.state.modal} toggle={this.toggle} >
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            <Container>
              <Row>
                <Col xs={{ size: 'auto' }}>  <img src={sc} alt='Screenshot' /></Col>
              </Row>
              <Row style={{marginTop:'32px'}}>
                <Col xs={{ size: 'auto', offset: 2 }}><h4> {this.props.errorText}</h4> </Col>
              </Row>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default CustomModal;
