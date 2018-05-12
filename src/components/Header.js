import React from 'react'

import FontAwesome from 'react-fontawesome'

import { NavLink } from 'react-router-dom'

import moment from 'moment'

export default class Header extends React.Component {
	constructor(props) {
		super(props)

        /* Localize store to class object. */
        this.store = this.props.store
	}

    render() {
        return <div id="container" style={ styles.container }>
      		<div class="row">
	      		<div class="col-6 justify-content-center align-self-center" style={ styles.logo }>
		          	<img style={ this.store.device.isPhone ? styles.logoImgPhone : styles.logoImg } src="../images/logo0bit.png" />
	      		</div>

	      		<div class="col-5 text-right" style={ styles.navLinks }>
                    <div style={ styles.buttons }>
                        <NavLink to="/">
                            <button type="submit" class="btn btn-outline-info">
                                Home <FontAwesome name='home' />
                            </button>
                        </NavLink>
                    </div>

                    <div style={ styles.buttons }>
                        <NavLink to="/new-post">
                            <button type="submit" class="btn btn-outline-secondary">
                                Post ad <FontAwesome name='bullhorn' />
                            </button>
                        </NavLink>
                    </div>
	      		</div>
      		</div>
      	</div>
    }
}

/* Initialize stylesheet. */
const styles = {
  	container: {
  		// color: '#3563a8',
    	fontSize: '1.1em',
    	fontWeight: 'bold',

  		borderBottom  : '2px solid #3563a8',
  		marginBottom  : '1em',
    	paddingBottom : '0.5em',
  	},
  	logo: {
  		marginTop  : '5px',
  		marginLeft : '10px'
  	},
    logoImg: {
        width: '265px'
    },
    logoImgPhone: {
        width: '225px'
    },
  	navLinks: {
    	fontSize: '1.2em'
  	},
    buttons: {
        marginTop: '5px'
    }
}
