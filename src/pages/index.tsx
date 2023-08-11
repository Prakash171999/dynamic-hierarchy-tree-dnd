import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { DragPreview } from "@/components/DragPreview";
import { DndProvider } from "react-dnd";
import {
  MultiBackend,
  Tree,
  getBackendOptions,
  getDescendants,
} from "@minoru/react-dnd-treeview";
import { Node } from "@/components/Node";
import { useState } from "react";
import SampleData from "../tree-sample-data.json";

export default function Home() {
  const [treeData, setTreeData] = useState(SampleData);
  const handleDrop = (newTree: any) => setTreeData(newTree);

  const handleDelete = (id: any) => {
    //Creating deleteIds array starting with the selected id and extracts the id of each descendant node.
    const deleteIds = [
      id,
      ...getDescendants(treeData, id).map((node) => node.id),
    ];

    /*create a new array newTree that contains only the nodes whose id is NOT in the deleteIds array. 
    This effectively removes the nodes with IDs found in the deleteIds array from the treeData array
    */
    const newTree = treeData.filter((node) => !deleteIds.includes(node.id));

    setTreeData(newTree);
  };

  return (
    <>
      <Head>
        <title>React-DnD-Treeview</title>
        <meta name="description" content="R&D on react-dnd-treeview" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DndProvider backend={MultiBackend} options={getBackendOptions()}>
        <div className={styles.app}>
          <Tree
            tree={treeData}
            rootId={0}
            render={(node, options) => (
              <Node node={node} {...options} onDelete={handleDelete} />
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
          />
        </div>
      </DndProvider>
    </>
  );
}
