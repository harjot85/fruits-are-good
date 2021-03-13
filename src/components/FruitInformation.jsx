import React from "react";
import {ListGroup, ListGroupItem } from "reactstrap";

const FruitInformation = (props) => {
    const { fruit } = props;

    console.log(fruit);
    return (
        <>
            <ListGroup>
            <ListGroupItem>Name: {fruit.name}</ListGroupItem>
                <ListGroupItem>Family: {fruit.family}</ListGroupItem>
                <ListGroupItem>
                    Calories: {fruit.nutritions.calories}
                </ListGroupItem>
            </ListGroup>
        </>
    );
};

export default FruitInformation;
