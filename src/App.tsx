import { useCallback, useState } from "react";
import { PDF, useRender, useScale } from "./rendering";
import { Schema, YAMLEditor } from "./editing";
import "split-pane-react/esm/themes/default.css";
import {
  ControlsLayout,
  FileControls,
  PreviewControls,
  TitleControls,
} from "./controls";
import { PanesLayout } from "./panes-layout";
import "./app.css";
import { useYAMLPersistence, downloadFile } from "./persistence";
import { useYAMLParsing } from "./parsing";

export function App() {
  const { queue, blob } = useRender();
  const { zoomIn, zoomOut, scale } = useScale({ minScale: 0.5, maxScale: 2 });
  const [title, setTitle] = useState("Untitled");

  // Parsing
  const onYAMLParsed = useCallback(
    (yaml: string, json: object | undefined) => {
      if (json) queue.push(json);
      else if (!yaml) queue.clear();
    },
    [queue]
  );
  const { setYAML, yaml } = useYAMLParsing({ onYAMLParsed });

  // Persistence
  const onFileOpened = useCallback(
    (fileTitle: string, fileContents: string) => {
      setTitle(fileTitle);
      setYAML(fileContents);
    },
    [setYAML]
  );
  const { save, open } = useYAMLPersistence({
    title,
    yaml: yaml,
    onFileOpened,
  });

  // Export
  const onDownload = useCallback(() => {
    if (blob) {
      downloadFile(title, blob);
    }
  }, [blob, title]);

  return (
    <div className="App">
      <ControlsLayout
        left={<FileControls onOpen={open} onSave={save} />}
        center={<TitleControls title={title} onChange={setTitle} />}
        right={
          <PreviewControls
            onDownload={onDownload}
            onZoomIn={zoomIn}
            onZoomOut={zoomOut}
          />
        }
      />

      <PanesLayout
        left={<YAMLEditor value={yaml} onChange={setYAML} />}
        right={<PDF scale={scale} blob={blob} />}
        bottom={<Schema />}
      />
    </div>
  );
}
