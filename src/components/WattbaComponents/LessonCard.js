import React, { Component } from 'react';
import { Progress, Row, Col, Card, CardHeader, CardBody, CardFooter, Table } from 'reactstrap';
import Sparkline from "../Common/Sparklines";

class LessonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        };
    }

    like() {
        this.setState({ liked: !this.state.liked });
    }

    redirectToTarget = () => {
        this.context.router.history.push(`/lesson-detail`)
    }

    render() {
        const tags = this.props.tags.split(",");
        console.log(this.props.tags);
        let heart;
        if (this.state.liked)
            heart = (
                <i
                    className="fas fa-bookmark like"
                    onClick={this.like.bind(this)}
                    style={{ color: "red" }}
                />
            );
        else
            heart = (
                <i className="fas fa-bookmark like" onClick={this.like.bind(this)} />
            );
        return (
            <div>
                <Card className="b">
                    <CardHeader>
                        <div className="float-right">
                            <div className="badge badge-info">started</div>
                        </div>
                        <h4 className="m-0">{this.props.name}</h4>
                        <small className="text-muted">Sed amet lectus id.</small>
                    </CardHeader>
                    <CardBody>
                        <div className="d-flex align-items-center">
                            <div className="w-100" data-title="Health">
                                <Progress className="progress-xs m-0" value="22" color="warning"/>
                            </div>
                            <div className="wd-xxs text-right">
                                <div className="text-bold text-muted">22%</div>
                            </div>
                        </div>
                    </CardBody>
                    <Table>
                        <tbody>
                        <tr>
                            <td>
                                <strong>Start date</strong>
                            </td>
                            <td>01/01/2016</td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Members</strong>
                            </td>
                            <td>
                                <a className="inline" href="">
                                    <img className="rounded-circle thumb24 mr-1" src="img/user/02.jpg" alt="project member"/>
                                </a>
                                <a className="inline" href="">
                                    <img className="rounded-circle thumb24 mr-1" src="img/user/04.jpg" alt="project member"/>
                                </a>
                                <a className="inline" href="">
                                    <img className="rounded-circle thumb24 mr-1" src="img/user/05.jpg" alt="project member"/>
                                </a>
                                <a className="inline" href="">
                                    <img className="rounded-circle thumb24 mr-1" src="img/user/06.jpg" alt="project member"/>
                                </a>
                                <a className="inline" href="">
                                    <strong>+5</strong>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Leader</strong>
                            </td>
                            <td>
                                <a href="" title="Team leader">
                                    <img className="rounded-circle thumb24 mr-1" src="img/user/03.jpg" alt="project member"/>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Metrics</strong>
                            </td>
                            <td>
                                <Sparkline values="20,80"
                                           options={{
                                               type:"pie",
                                               height:"24",
                                               sliceColors:["#edf1f2", "#23b7e5"]
                                           }}
                                           className="sparkline inline mr-2"/>
                                <Sparkline values="60,40"
                                           options={{
                                               type:"pie",
                                               height:"24",
                                               sliceColors:["#edf1f2", "#27c24c"]
                                           }}
                                           className="sparkline inline mr-2"/>
                                <Sparkline values="90,10"
                                           options={{
                                               type:"pie",
                                               height:"24",
                                               sliceColors:["#edf1f2", "#ff902b"]
                                           }}
                                           className="sparkline inline"/>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                    <CardFooter className="text-center">
                        <button className="btn btn-secondary" type="button" onClick={() => { document.location.href = "/lesson-detail"; }}>View Lesson</button>
                    </CardFooter>
                </Card>
            </div>
        );
    }
}

export default LessonCard;


{/*<div*/}
{/*    className="col-md-12 lessons-card"*/}
{/*    style={{ marginBottom: "20px", marginTop: "10px" }}*/}
{/*>*/}
{/*    <Card style={{ width: "auto", height: "230px", borderRadius: "15px" }}>*/}
{/*        <Card.Body>*/}
{/*            <div className="row">*/}
{/*                <div className="col-md-4">*/}
{/*                    <Card.Title className="card-title">*/}
{/*                        {this.props.name}*/}
{/*                    </Card.Title>*/}
{/*                </div>*/}
{/*                <div className="col-md-8">*/}
{/*                    {tags.map(tags => (*/}
{/*                        <div className="tag">{tags}</div>*/}
{/*                    ))}*/}
{/*                </div>*/}
{/*            </div>*/}
{/*            <Card.Text>{this.props.desc}</Card.Text>*/}
{/*        </Card.Body>*/}
{/*        <div className="row">*/}
{/*            <div className="col-md-6">{heart}</div>*/}
{/*            <div className="col-md-6">*/}
{/*                <a href={"/lesson/" + this.props.id}>*/}
{/*                    <i className="fas fa-arrow-circle-right arrow" />*/}
{/*                </a>*/}
{/*            </div>*/}
{/*        </div>*/}
{/*    </Card>*/}
{/*</div>*/}