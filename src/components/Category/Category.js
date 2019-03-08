import React from 'react';
import { Card, Icon, Image, Button, Grid} from 'semantic-ui-react'
import classes from './Category.module.css'

const category = (props)=>{
    return (
        <Card className={classes.Category}>
            <Image src={props.imageURL} />
            <Card.Content>
                <Card.Header>{props.title}</Card.Header>
                {/*<Card.Meta>*/}
                    {/*<span className='date'>Joined in 2015</span>*/}
                {/*</Card.Meta>*/}
                <Card.Description>{props.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Grid >
                    <Grid.Column floated='right' width={6}>
                        <Button inverted color='green' onClick={props.clicked}>
                            View
                        </Button>
                    </Grid.Column>
                </Grid>
            </Card.Content>
        </Card>
    )
};

export default category;
