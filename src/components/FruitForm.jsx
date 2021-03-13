import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import React from "react";

const FruitForm = (props) => {
    const { onInputChange, onClickHandler, onKeyDown } = props;

    return (
        <>
            <Form>
                <FormGroup>
                    <Row>
                        <Col style={{textAlign: 'right'}}>
                            <Label style={{verticalAlign: 'sub'}} > Enter a fruit name</Label>
                        </Col>
                    
                        <Col>
                            <Input
                                type="text"
                                name="fruitName"
                                placeholder="Please enter a fruit name "
                                onChange={onInputChange}
                                onKeyDown={onKeyDown}
                                maxLength="25"
                            />
                        </Col>
                    
                        <Col>
                            <Button color="warning" id="submit" onClick={onClickHandler}>
                                Get Info
                            </Button>
                        </Col>
                    </Row>
                </FormGroup>
            </Form>
        </>
    );
};

export default FruitForm;
