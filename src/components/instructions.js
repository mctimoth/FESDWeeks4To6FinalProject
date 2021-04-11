import React, { Component } from 'react';
import '../App.css';
import ApiCheck from '../rest/ApiCheck';

let e = React.createElement;

class Instructions extends Component {
    render() {
        return (
            e("div", {className: "container-fluid"},
                e("div", {className: "row"},
                    e("div", {className: "col-6"},
                        e("div", {className: "instructions container-fluid"},
                            e("h2", null, "FESD React Weeks 4 - 6:  Final Project"),
                            e("h3", null, "Instructions"),
                                e("ol",null,
                                    e("li", null, "Using an online API of your choice, or multiple APIs (or if no API can be found, using an array for in-memory storage is okay as well), create a React project of your choice. You will be working on this for the next three weeks."),
                                    e("li", null, "Project must meet the following criteria",
                                        e("ol", {type: "a"},
                                            e("li",null, "Use React Router and have at least 3 pages"),
                                            e("li",null, "Use React Bootstrap or an alternative styling library"),
                                            e("li",null, "Contain at least 10 components"),
                                            e("li",null, "Allow for all CRUD operations")
                                        ),
                                    e("li", null, "Be sure to implement the following options:",
                                        e("ol", {type: "a"},
                                            e("li",null, "NoMatch - When sites have no landing place, show 404 or something similar."),
                                            e("li",null, "Slider for the Instruction"),
                                            e("li",null, "..."),
                                            e("li",null, "...")
                                        ),
                                    )
                                    )
                                )
                        )
                    ),
                    e("div", {className: "col-6"},
                        e("div", {className: "instructions container-fluid"},
                            e("h2", null, "API Check"),
                            <ApiCheck />
                        )
                    )
                )
            )   
        )
    }
}

export default Instructions;