import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

class DishDetail extends Component {
    renderDish(dish){
        if (dish != null) {
            return(
                <div className="col 12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />  
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
        else {
            return(
                <div></div>
            )
        }
    } 

    renderComments(comments) {
        if (comments != null) {
            const commentItems = comments.map((commentItem) => {                
                return (
                    <ListGroupItem key={commentItem.id}  className="border-0">
                        {commentItem.comment}<br />
                        -- {commentItem.author}, {new Date(commentItem.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </ListGroupItem>
                )
            });

            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ListGroup>
                        {commentItems}
                    </ListGroup>
                </div>                
            )
        } else {
            return(
                <div></div>
            )
        }
    }

    render() {
        console.log('Dish Detail Component render is invoked');
        const { selectedDish } = this.props;

        return (
            <div className="row">
                { this.renderDish(selectedDish) }
                { this.renderComments(selectedDish?.comments) }                    
            </div>
        );
    }
}

export default DishDetail;