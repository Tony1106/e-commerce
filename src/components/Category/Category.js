import React, {Component} from 'react';
import { Card, Grid, Image, Button } from 'semantic-ui-react'
import {withRouter} from "react-router-dom";
import classes from './Category.module.css'

class Category extends Component {
    // console.log(props);

    viewProductsHandler = () => {
        this.props.history.push('/products?category=' + this.props.name.replace(/ /g, ''))
    };

    render (){
        return (
            <Grid className={classes.Category}>
                <Grid.Row>
                    <Grid.Column width={6}>
                        <Image src={this.props.imageURL} />
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <h2>{this.props.name}</h2>
                        <p>{this.props.description}</p>
                    </Grid.Column>

                    <Button fluid inverted color='green'
                    onClick={this.viewProductsHandler}>
                        View
                    </Button>
                </Grid.Row>
            </Grid>
        )
    }

};

export default withRouter(Category);
