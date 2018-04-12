import * as React from "react";
import { DiamondNodeModel } from "./DiamondNodeModel";
import { PortWidget, BaseWidget, BaseWidgetProps } from "storm-react-diagrams";
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Divider from 'material-ui/Divider';


const styles = theme => ({
  cardBasic: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    minWidth: 180
  },
  content: {
    flex: '1 0 auto',
    backgroundColor: 'white'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: theme.spacing.unit,
    backgroundColor: theme.palette.background.default
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  headerText: {
    paddingRight:10
  },
  name: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export interface DiamonNodeWidgetProps extends BaseWidgetProps{
	node: DiamondNodeModel;
	size?: number;
}

export interface DiamonNodeWidgetState {}


export class DiamonNodeWidget extends BaseWidget<DiamonNodeWidgetProps, DiamonNodeWidgetState> {
	public static defaultProps: DiamonNodeWidgetProps = {
		size: 150,
		node: null
	};

	constructor(props: DiamonNodeWidgetProps) {
		super("srd-diamond-node", props);
		this.state = {};
	}

	render() {
		return (
			<div
				className={"diamond-node"}
				style={{
					position: "relative",
					width: this.props.size,
					height: this.props.size
				}}
			>
				<svg
					width={this.props.size}
					height={this.props.size}
					dangerouslySetInnerHTML={{
						__html:
							`
          <g id="Layer_1">
          </g>
          <g id="Layer_2">
            <polygon fill="purple" stroke="#000000" stroke-width="3" stroke-miterlimit="10" points="10,` +
							this.props.size / 2 +
							` ` +
							this.props.size / 2 +
							`,10 ` +
							(this.props.size - 10) +
							`,` +
							this.props.size / 2 +
							` ` +
							this.props.size / 2 +
							`,` +
							(this.props.size - 10) +
							` "/>
          </g>
        `
					}}
				/>
				<div
					style={{
						position: "absolute",
						zIndex: 10,
						top: this.props.size / 2 - 8,
						left: -8
					}}
				>
					<PortWidget name="leftBottom" node={this.props.node} />
					<div>Teest</div>
				</div>
				<div
					style={{
						position: "absolute",
						zIndex: 10,
						left: this.props.size / 2 - 8,
						top: -8
					}}
				>
					<PortWidget name="leftTop" node={this.props.node} />
				</div>
				<div
					style={{
						position: "absolute",
						zIndex: 10,
						left: this.props.size - 8,
						top: this.props.size / 2 - 8
					}}
				>
					<PortWidget name="rightTop" node={this.props.node} />
				</div>
				<div
					style={{
						position: "absolute",
						zIndex: 10,
						left: this.props.size / 2 - 8,
						top: this.props.size - 8
					}}
				>
					<PortWidget name="rightBottom" node={this.props.node} />
				</div>
			</div>
		);
	}
}
