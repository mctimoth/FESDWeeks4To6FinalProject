import React, { Component } from 'react';

let e = React.createElement;

export default class Home extends Component {
    render() {
        return (
            e("div", {className: "container-fluid"},
                e("div", {className: "row"},
                    e("div", {className: "col-6"},
                        e("div", {className: "container-fluid"},
                            e("h2", null, "Home - With Home information")
                        ),
                    ),
                    e("div", {className: "col-6"},
                        e("div", {className: "container-fluid"},
                            e("h2", null, "More data in the right side col-6")
                        ),
                    ),
                ),
            )
        )
    }
}