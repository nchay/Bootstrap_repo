import React from "react";
import {Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap';

function RenderDish({dish}) {       
        if (dish != null){
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else
            return(
                <div></div>
            );
    }

function RenderComments({dishComments}) {
        if (dishComments && dishComments.comments != null){
            return(
                <div className="container">
                    <h4>Comments</h4>
                        {dishComments.comments.map(function(eachComment) {
                            return(
                            <ul className="list-unstyled">
                            <li>{eachComment.comment}</li>
                            <li>-- {eachComment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(eachComment.date)))}</li>    
                            </ul>
                            )})}                        
                </div>
            );
        }
        else {
            return(
                <div></div>
            );
        }
}

const  DishDetail = (props) =>{
        return(
            <div className='container'>
                <div className='row'>
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish= {props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments dishComments={props.dish}/>
                    </div>                    
                </div>
            </div>
        );
}

export default DishDetail;