/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';
import ImagesUploader from '../../lib/index';
import '../../styles.css';
import '../../font.css';

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { author: '', text: '', picture: {} };
    this.onDrop = this.onDrop.bind(this);
  }

	onDrop(picture) {
		this.setState({
			picture: this.state.picture,
		});
	}

	render() {
		return (
			<div className="examples-container">
				<ImagesUploader
					url="http://localhost:9090/multiple"
					optimisticPreviews
					onLoadEnd={(err) => {
						if (err) {
							console.error(err);
						}
					}}
					label="Upload multiple images"
					/>
				<ImagesUploader
					url="http://localhost:9090/notmultiple"
					optimisticPreviews
					multiple={false}
					onLoadEnd={(err) => {
						if (err) {
							console.error(err);
						}
					}}
					styles={{
						container: {
							paddingTop: 15,
						},
					}}
					label="Upload a picture"
					onChange={this.onDrop}
					/>
			</div>
		);
	}
}

ReactDOM.render(<Example />, document.getElementById('root'));
