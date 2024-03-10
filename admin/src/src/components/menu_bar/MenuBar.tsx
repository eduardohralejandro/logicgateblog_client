import { FC } from "react";
import { Divider } from "antd";
import { Editor } from "@tiptap/react";
import {
  Heading1,
  Heading2,
  AlignJustify,
  Strikethrough,
  Bold,
  Pilcrow,
  Highlighter,
  AlignLeft,
  AlignRight,
  Heading3Icon,
  ItalicIcon,
} from "lucide-react";

import styles from "./menu_bar.module.scss";

interface IMenuBarProps {
  editor: Editor | null;
}

const MenuBar: FC<IMenuBarProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className={styles.menu_bar}>
      <span
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        <Heading1 strokeWidth={1} />
      </span>

      <span
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        <Heading2 strokeWidth={1} />
      </span>
      <span
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        <Heading3Icon strokeWidth={1} />
      </span>
      <span
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        <Pilcrow strokeWidth={1} />
        <Divider
          type="vertical"
          style={{ height: "1.5rem", marginBottom: "1rem" }}
        />
      </span>
      <span
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <Bold strokeWidth={1} />
      </span>
      <span
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <ItalicIcon strokeWidth={1} />
      </span>
      <span
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <Strikethrough strokeWidth={1} />
      </span>
      <span
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={editor.isActive("highlight") ? "is-active" : ""}
      >
        <Highlighter strokeWidth={1} />
        <Divider
          type="vertical"
          style={{ height: "1.5rem", marginBottom: "1rem" }}
        />
      </span>

      <span
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={editor.isActive({ textAlign: "left" }) ? "is-active" : ""}
      >
        <AlignLeft strokeWidth={1} />
      </span>
      <span
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={editor.isActive({ textAlign: "center" }) ? "is-active" : ""}
      >
        <AlignJustify strokeWidth={1} />
      </span>
      <span
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={editor.isActive({ textAlign: "right" }) ? "is-active" : ""}
      >
        <AlignRight strokeWidth={1} />
      </span>
    </div>
  );
};

export default MenuBar;
