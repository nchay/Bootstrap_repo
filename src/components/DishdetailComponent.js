import React, {Component} from "react";
import {Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap';

class DishDetail extends Component{
    constructor(props){
        super(props)
        this.state = {
            selectedDish: null
        }
    }

    renderDish() {
        if (this.props.dish != null)
            return(
                <Card>
                    <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                    <CardBody>
                      <CardTitle>{this.props.dish.name}</CardTitle>
                      <CardText>{this.props.dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(dishComments) {
        if (dishComments != null){
            return(
                <div className="container">
                    <h4>Comments</h4>
                        {dishComments.map(function(eachComment) {
                            return(
                            <ul className="list-unstyled">
                            <li>{eachComment.comment}</li>
                            <li>-- {eachComment.author}, {new Date((eachComment.date)).toString()}</li>    
                            </ul>
                            )})};                        
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render(){
        return(
            <div className='container'>
                <div className='row'>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish()}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>                    
                </div>
            </div>
        );
    }
}
export default DishDetail;