import React from 'react'
 
import { observer } from 'mobx-react'

@observer
export default class Help extends React.Component {
    render() {
        return (
            <div>
                <h2>GOT QUESTIONS?</h2>
                <p>The easiest thing to do is post on
                our <a href="javascript://">forums</a>.
                </p>
            </div>
        )
    }
}
