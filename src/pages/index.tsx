import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { DragPreview } from "@/components/DragPreview";
import { DndProvider } from "react-dnd";
import {
  MultiBackend,
  Tree,
  getBackendOptions,
} from "@minoru/react-dnd-treeview";
import { Node } from "@/components/Node";
import { useState } from "react";
import SampleData from "../tree-sample-data.json";

export default function Home() {
  const [treeData, setTreeData] = useState(SampleData);
  const handleDrop = (newTree: any) => setTreeData(newTree);

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
            render={(node, options) => <Node node={node} {...options} />}
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
