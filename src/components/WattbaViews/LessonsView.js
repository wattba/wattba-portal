import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';
import { Progress, Row, Col, Card, CardHeader, CardBody, CardFooter, Table } from 'reactstrap';
import LessonCard from "../WattbaComponents/LessonCard";

class LessonsView extends Component {
    constructor(props) {
        super(props);
        this.state = { resultsRecommends: [], resultsTrending: [] };
    }

    componentDidMount() {
        fetch(
            "http://wattba.h9ssxfia9b.us-west-2.elasticbeanstalk.com/api/quick/lessons/recommended"
        )
            .then(response => response.json())
            .then(data => this.setState({ resultsRecommends: data }));

        fetch(
            "http://wattba.h9ssxfia9b.us-west-2.elasticbeanstalk.com/api/quick/lessons/trending"
        )
            .then(response => response.json())
            .then(data => this.setState({ resultsTrending: data }));
    }

    render() {
        const dataRecommends = this.state.resultsRecommends;
        const dataTrending = this.state.resultsTrending;

        return (
            <ContentWrapper>
                <div className="content-heading">Lessons
                    <div className="ml-auto">
                        <button className="btn btn-secondary btn-sm" type="button" onClick={() => { document.location.href = "/lesson-author"; }}>Create Lesson</button>
                    </div>
                </div>
                <Row>


                    {dataRecommends.map(data => (
                        <Col xl="4" lg="6">
                            <LessonCard
                                name={data.title}
                                desc={data.description.slice(0, 200) + "..."}
                                tags={data.tags}
                                id={data.id}
                            />
                        </Col>
                    ))}


                </Row>
            </ContentWrapper>
            );
    }
}

export default LessonsView;


