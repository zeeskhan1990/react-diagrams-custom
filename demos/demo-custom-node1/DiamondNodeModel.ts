import { NodeModel, DiagramEngine } from "storm-react-diagrams";
import { DiamondPortModel } from "./DiamondPortModel";
import * as _ from "lodash";

export class DiamondNodeModel extends NodeModel {
	//Possibe options, diamondIn & diamondOut
	cogType: string;
	name: string;
	color: string;
	constructor(cogType: string = "diamondIn", name: string = "Untitled", color: string = "rgb(0,192,255)") {
		super("diamond");
		this.cogType = cogType;
		this.name = name;
		this.color = color;
		this.addPort(new DiamondPortModel("leftTop"));
		this.addPort(new DiamondPortModel("leftBottom"));
		this.addPort(new DiamondPortModel("rightTop"));
		this.addPort(new DiamondPortModel("rightBottom"));
	}

	deSerialize(object, engine: DiagramEngine) {
		super.deSerialize(object, engine);
		this.cogType = object.cogType
		this.name = object.name;
		this.color = object.color;
	}

	serialize() {
		return _.merge(super.serialize(), {
			cogType: this.cogType,
			name: this.name,
			color: this.color
		});
	}
}
