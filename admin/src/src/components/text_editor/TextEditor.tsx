import { FC } from "react";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { MenuBar } from "../components";

interface ITextEditorPros {
  setEditorContent: (value: string) => void;
}

const TextEditor: FC<ITextEditorPros> = ({ setEditorContent }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content: "",
    onUpdate({ editor }) {
      setEditorContent(editor.getHTML());
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent
        style={{ height: "15rem", overflow: "scroll" }}
        editor={editor}
      />
    </div>
  );
};

export default TextEditor;
