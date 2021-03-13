import React, { Component } from "react";
import FruitForm from "../components/FruitForm";
import FruitInformation from "../components/FruitInformation";
import { Row, Col, Container, Alert } from "reactstrap";
import { getLocalFruitDataByFruitName } from "../api/getFruitInfo";

class Home extends Component {
    state = {
        fruit: "",
        fruitData: {},
        errorState: false,
        error: "",
        isLoading: false,
    };

    onClickHandler = () => {
        this.getData();
    };

    getData() {
        const { fruit } = this.state;

        if (fruit) {
            const fruitData = getLocalFruitDataByFruitName(fruit);

            if (fruitData === undefined) {
                this.setState({ errorState: true });
            } else {
                this.setState({ fruitData });
            }
        }
    }

    onInputChange = (e) => {
        const fruit = e.target.value;
        this.setState({
            fruit,
            errorState: false,
            fruitData: {},
        });
    };

    render() {
        console.log("error ", this.state.errorState);
        return (
            <>
                <div style={{ textAlign: "center", margin: "25px 0" }}>
                    <h1>Awesome fruits! </h1>
                </div>
                <Row>
                    <Col>
                        {console.log(this.state.fruit)}
                        <FruitForm
                            onInputChange={this.onInputChange}
                            onClickHandler={this.onClickHandler}
                            onKeyDown={this.onKeyDown}
                        />
                    </Col>
                </Row>

                <Container className="themed-container">
                    {this.state.errorState ? (
                        <Alert color="danger">
                            <div style={{ textAlign: "center" }}>
                                <p>Fruit not found</p>
                            </div>
                        </Alert>
                    ) : (
                        Object.keys(this.state.fruitData).length > 0 && (
                            <Alert color="warning" style={{ padding: "1rem" }}>
                                <FruitInformation
                                    fruit={this.state.fruitData}
                                />
                            </Alert>
                        )
                    )}
                </Container>
            </>
        );
    }
}

export default Home;
