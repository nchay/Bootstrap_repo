import React from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

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
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <Breadcrumb>

                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish= {props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments dishComments={props}/>
                        </div>                    
                    </div>
                </div>
            </React.Fragment>
        );
}

export default DishDetail;