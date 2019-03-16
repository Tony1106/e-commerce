import React from 'react';
import {Button, Card, Grid, Image} from "semantic-ui-react";
import classes from './Product.module.css'

const product = (props) => {
    return (
        <Card className={classes.Product}>
            <Image src={props.imageURL} />
            <Card.Content>
                <Card.Header>{props.name}</Card.Header>
                <Card.Description>{props.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
            <Grid.Column floated='right' width={6}>
                <Button inverted color='green' onClick={props.onProductSelected}>
                    Select
                </Button>
            </Grid.Column>
            </Card.Content>
        </Card>

    )
};

export default product;
