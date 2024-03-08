import { FC } from "react";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import { MenuBar } from "../components";

const TextEditor: FC = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content: `HTML element goes here <h1>H1</h1>`,
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent style={{ height: "15rem" , overflow: 'scroll'}} editor={editor} />
    </div>
  );
};

export default TextEditor;