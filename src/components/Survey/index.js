import React from 'react';
import * as Survey from "survey-react";
import 'survey-react/survey.css';
import { Pie, Line } from 'react-chartjs-2';

class SurveyCreator extends React.Component {
    piechartdata;
    linePointChart;
    constructor(props) {
        super(props);
        let data = [];
        if (props.data) {
            data = JSON.parse(props.data);
        }

        this.state = {
            data: data,
            isCompletesurvey: false,
        };

        this.piechartdata = {
            labels: ['', '', '', '', ''],
            datasets: [
            ]
        };

        this.linePointChart = {
            labels: ['Q’s Culture & Skills', 'Q’s Build & Deploy', 'Q’s Tests', 'Q’s Design & Architecture', 'Q’s Operations', 'Q’s Design & Architecture', 'Q’s Operations'],
            datasets: [{
                // label: 'My First dataset',
                backgroundColor: 'red',
                borderColor: 'red',
                data: [],
                fill: false,
                pointRadius: 10,
                pointHoverRadius: 15,
                showLine: false
            }]
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.data !== this.props.data && this.props.data) {
            let isError = false;
            let data = {};
            try {
                data = JSON.parse(this.props.data);
            }
            catch (e) {
                isError = true;
            }
            if (!isError) {
                this.setState({
                    data
                });
            }
        }
    }

    data = {
        0: []
    };

    onComplete = (sender) => {
        const { data } = this.state;
        for (let i = 0; i < data.pages.length; i++) {
            let row = data.pages[i];
            for (let j = 0; j < row.elements.length; j++) {
                let percentage = {
                    total: 0,
                    totalOptions: 0,
                };
                for (let k = 0; k < row.elements[j].choices.length; k++) {
                    let data = row.elements[j].choices[k];
                    Object.keys(sender.data).forEach(key => {
                        for (let p = 0; p < sender.data[key].length; p++) {
                            let surveyData = sender.data[key][p];
                            if (data == surveyData) {
                                percentage.total += (k + 1);
                            }
                        }
                    });
                }
                percentage.totalOptions = row.elements[j].choices.length;
                this.data[i] = this.data[i] || [];
                let per = (percentage.total / percentage.totalOptions) * 100;
                this.data[i].push({ 'percentage': percentage, 'percent': per });
            }
        }
        let count = 0;
        Object.keys(this.data).forEach(key => {
            for (let b = 0; b < this.data[key].length; b++) {
                count += this.data[key][b].percent;
            }
            count = count / this.data[key].length;
            let color = this.setchartColor(count);
            this.linePointChart.datasets[0].data.push(count)
            this.piechartdata.datasets.push({
                backgroundColor: [color, "#f4f4f4"],
                data: [count, 100 - count]
            });
            this.setState({
                isCompletesurvey: true,
            });
        });
    }

    setchartColor = (count) => {
        let retData = '';
        if (count >= 80) {
            retData = '#a87b51';
        } else if (count < 80 && count >= 60) {
            retData = '#0b9444';
        } else if (count < 80 && count >= 60) {
            retData = '#aabd54';
        } else if (count < 60 && count >= 40) {
            retData = '#ed2027';
        } else if (count < 40 && count >= 20) {
            retData = '#848685';
        } else if (count < 20 && count >= 0) {
            retData = '#fefgf8';
        }
        return retData;
    }

    render() {
        const { data, isCompletesurvey } = this.state;
        var model = new Survey.Model(data);
        model.completedHtml = "<span></span>";
        return (
            <div>
                {!isCompletesurvey &&
                    <Survey.Survey onComplete={this.onComplete} model={model} />
                }
                {isCompletesurvey && <div>
                    <Pie
                        data={this.piechartdata}
                        options={{
                            legend: {
                                display: true,
                                position: 'bottom'
                            }
                        }}
                    />
                    <Line
                        data={this.linePointChart}
                        options={{
                            responsive: true,
                            legend: {
                                display: false,
                            },
                            elements: {
                                point: {
                                    pointStyle: 'circle'
                                }
                            },
                            scales: {
                                xAxes: [{
                                    gridLines: {
                                        drawOnChartArea: false
                                    }
                                }],
                                yAxes: [{
                                    ticks: {
                                        beginAtZero: true,
                                        stepSize: 20
                                    },
                                    gridLines: {
                                        drawOnChartArea: false
                                    }
                                }]
                            }
                        }}
                    />
                </div>}
            </div>
        );
    }
}

export default SurveyCreator;