import React, { Component } from 'react'

export default class DateStamp extends Component {

    render() {
        const now = new Date();
        return (
            <div>
                {now.toDateString()}
            </div>
        )
    }
}
