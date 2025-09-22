import 'katex/dist/katex.min.css';
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

function Message({ sender, text }) {
  return (
    <div className={`message-row ${sender === "나" ? "me" : "other"}`}>
      <div className="sender">{sender}</div>
      <div className="message-bubble">
        <ReactMarkdown
          children={text}
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
        />
      </div>
    </div>
  );
}

export default Message;

