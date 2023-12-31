import { AddItemForm } from "@/components";
import { DragPreview } from "@/components/DragPreview";
import { Node } from "@/components/Node";
import styles from "@/styles/Home.module.css";
import { Container } from "@/styles/main-page";
import { getLastId } from "@/utils/helpers";
import {
  MultiBackend,
  Tree,
  getBackendOptions,
  getDescendants,
} from "@minoru/react-dnd-treeview";
import { Button } from "antd";
import Head from "next/head";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import SampleData from "../tree-sample-data.json";

export default function Home() {
  const [treeData, setTreeData] = useState<any>(SampleData);
  const handleDrop = (newTree: any) => setTreeData(newTree);
  const [showItemForm, setShowItemForm] = useState(false);

  const handleDelete = (id: any) => {
    //Creating deleteIds array starting with the selected id and extracts the id of each descendant node.
    const deleteIds = [
      id,
      ...getDescendants(treeData, id).map((node) => node.id),
    ];

    /*create a new array newTree that contains only the nodes whose id is NOT in the deleteIds array. 
    This effectively removes the nodes with IDs found in the deleteIds array from the treeData array
    */
    const newTree = treeData.filter(
      (node: any) => !deleteIds.includes(node.id)
    );

    setTreeData(newTree);
  };

  const handleCopy = (id: any) => {
    const lastId = getLastId(treeData);

    //locating the specific node within the treeData array with id.
    const targetNode = treeData.find((n: any) => n.id === id);

    //This part is likely a function call. It's asking for the descendants of a node with a specific id in the treeData.
    const descendants = getDescendants(treeData, id);

    /*Create a new array of nodes (partialTree) based on the descendants,
     but with modified IDs and parent references.
     */
    const partialTree = descendants.map((node) => ({
      ...node,
      id: node.id + lastId,
      parent: node.parent + lastId,
    }));

    //Update the treeData array with the copied nodes.
    setTreeData([
      ...treeData,
      {
        ...targetNode, // Add the copied target node with modified ID.
        id: targetNode.id + lastId,
      },
      ...partialTree, // Add the copied descendants with modified IDs.
    ]);
  };

  const handleSubmit = (newNode: any) => {
    const lastId = getLastId(treeData) + 1;

    setTreeData([
      ...treeData,
      {
        ...newNode,
        id: lastId,
      },
    ]);
  };

  const handleTextChange = (id: any, value: any) => {
    const newTree = treeData.map((node: any) => {
      if (node.id === id) {
        return {
          ...node,
          text: value,
        };
      }

      return node;
    });

    setTreeData(newTree);
  };

  return (
    <Container>
      <Head>
        <title>React-DnD-Treeview</title>
        <meta name="description" content="R&D on react-dnd-treeview" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button
        className="add-btn"
        onClick={() => setShowItemForm(!showItemForm)}
      >
        {showItemForm ? "Close Form" : "Add Item +"}
      </Button>
      {showItemForm && <AddItemForm tree={treeData} onSubmit={handleSubmit} />}
      <DndProvider backend={MultiBackend} options={getBackendOptions()}>
        <div className={styles.app}>
          <Tree
            tree={treeData}
            rootId={0}
            render={(node, { onToggle, isOpen, depth, hasChild }) => (
              <Node
                node={node}
                onDelete={handleDelete}
                onCopy={handleCopy}
                onToggle={onToggle}
                isOpen={isOpen}
                depth={depth}
                onTextChange={handleTextChange}
                hasChild={hasChild}
              />
            )}
            dragPreviewRender={(monitorProps) => (
              <DragPreview monitorProps={monitorProps} />
            )}
            onDrop={handleDrop}
            classes={{
              root: styles.treeRoot,
              draggingSource: styles.draggingSource,
              dropTarget: styles.dropTarget,
            }}
            sort={false}
          />
        </div>
      </DndProvider>
    </Container>
  );
}
