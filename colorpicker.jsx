'use strict';

class ColorPicker extends React.Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<div className="colorpicker">
				<div className="app-desc colorpicker-app-desc">
					<div className="row align-items-center">
						<h1 className="mx-4">colo<sup>u</sup>rpicker</h1>
						<a className="btn btn-secondary btn-sm btn-github" href="https://github.com/evlawless/colorpicker"><img src="./images/GitHub-Mark-32px.png" height="16px" /> view on github</a>
					</div>

					<p>
						this is a thing to make a computer tell you what colors look&nbsp;good&nbsp;together.
						</p>
					<p>
						you'll notice i changed the background on this app to white. this is to keep my own beautiful color scheme from confusing the eye
						</p>
					<p>
						i included a u in the title just because i feel bad when i don't
						</p>
				</div>
				<div className="app-content colorpicker-app-content">
					<div class="form-group input-group col-md-6">
						<div className="input-group-prepend">
							<div className="input-group-text">#</div>
						</div>
						<input type="text" className="form-control" />
						<div className="input-group-append">
							<button className="btn btn-secondary input-group-btn">generate</button>
						</div>
					</div>
					<div className="row">
						<div className="col">###</div>
						<div className="col">###</div>
						<div className="col">###</div>
						<div className="col">###</div>
						<div className="col">###</div>
					</div>
				</div>
			</div>
		);
	}
}
