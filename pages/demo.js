import React from 'react'


export default class demo extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			token: ''
		}
	}

	componentDidMount() {
		this.fetchToken()
	}

	fetchToken = () => {
		fetch('http://dietapi.orbtron.io/api/token', {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'GET',
			mode: 'cors'
		}).then( res => {
			console.log(res)
			return res.json()
		}).then( data => {
			console.log(data)
			this.setState({ token: data._token })
		}).catch( err => {
			console.log(err)
		})
	}

	render() {
		return (
			<div>
				<p>This is your token: {this.state.token}</p>
			</div>
		);
	}

}