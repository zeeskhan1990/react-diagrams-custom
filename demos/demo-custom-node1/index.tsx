import {
	DiagramEngine,
	DiagramModel,
	DefaultNodeModel,
	LinkModel,
	DefaultPortModel,
	DiagramWidget
} from "storm-react-diagrams";
import * as React from "react";

// import the custom models
import { CogliteNodeFactory } from "./CogliteNodeFactory";
import { SimplePortFactory } from "./SimplePortFactory";
import { CogliteNodeModel } from "./CogliteNodeModel";
import { CoglitePortModel } from "./CoglitePortModel";
import { CogliteLinkFactory } from "./CogliteLinkFactory";


export default () => {
	//1) setup the diagram engine
	var engine = new DiagramEngine();
	engine.installDefaultFactories();

	// register some other factories as well
	engine.registerLinkFactory(new CogliteLinkFactory());
	engine.registerPortFactory(new SimplePortFactory("coglite", config => new CoglitePortModel()));
	engine.registerNodeFactory(new CogliteNodeFactory());

	//2) setup the diagram model
	var model = new DiagramModel();

	//3-A) create a default node
	var node1 = new DefaultNodeModel("Node 1", "rgb(0,192,255)");
	var port1 = node1.addOutPort("Out");
	node1.setPosition(100, 150);

	//3-B) create our new custom node
	var node2 = new CogliteNodeModel("cogliteIn", "Coglite Transform block" );
	node2.setPosition(300, 250);

	var node3 = new DefaultNodeModel("Node 3", "red");
	var port3 = node3.addInPort("In");
	node3.setPosition(550, 150);

	var node4 = new CogliteNodeModel("cogliteOut", "Coglite Transform block" );
	node4.setPosition(50, 250);

	//3-C) link the 2 nodes together
	var link1 = port1.link(port3);
	var link2 = port3.link(node2.getPort("rightBottom"));

	var link3 = (node4.getPort("rightTop") as CoglitePortModel).link(node2.getPort("leftBottom"))

	//4) add the models to the root graph
	model.addAll( node2, node4, link3, node1, node3, link1);

	//5) load model into engine
	engine.setDiagramModel(model);

	//6) render the diagram!
	return <DiagramWidget className="srd-demo-canvas" diagramEngine={engine} />;
};
