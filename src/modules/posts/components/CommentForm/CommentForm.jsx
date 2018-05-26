import React, { PureComponent } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from 'reactstrap';

class CommentForm extends PureComponent {
  state = {
    email: '',
    text: '',
  }

  handleChangeEmail = (event) => {
    const { value } = event.currentTarget;
    this.setState(() => ({ email: value }))
  }

  handleChangeText = (event) => {
    const { value } = event.currentTarget;
    this.setState(() => ({ text: value }))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, text } = this.state;
    this.props.onSubmit({ email, text });
  }

  render() {
    const { className, submitting, error } = this.props;
    return (
      <div className={className}>
        <h4>Leave your comment</h4>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Your email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
              required
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              placeholder="Your comment"
              value={this.state.text}
              onChange={this.handleChangeText}
              required
            />
          </FormGroup>

          <Button
            color="primary"
            disabled={submitting}
          >Send comment</Button>

          {!!error && <Alert color="danger">{error}</Alert>}
        </Form>
      </div>
    );

  }
}

export default CommentForm;

