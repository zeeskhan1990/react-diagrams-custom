import * as SRD from "storm-react-diagrams";
import { DiamonNodeWidget } from "./DiamondNodeWidget";
import { DiamondNodeModel } from "./DiamondNodeModel";
import * as React from "react";

export class DiamondNodeFactory extends SRD.AbstractNodeFactory<DiamondNodeModel> {
	constructor() {
		super("diamond");
	}

	generateReactWidget(diagramEngine: SRD.DiagramEngine, node: DiamondNodeModel): JSX.Element {
		return <DiamonNodeWidget node={node} />;
	}

	getNewInstance(initialConfig?: any) {
		return new DiamondNodeModel();
	}
}
