import { twMerge } from "tailwind-merge";
import "./textarea.css";

type BaseTextAreaAttributes = React.ComponentPropsWithoutRef<"textarea">;

interface TextAreaProps extends BaseTextAreaAttributes {
  className?: string;
  id: string;
  handleOnChange?: (e: React.ChangeEvent<HTMLTextAreaElement>, id: string) => void;
  handleOnKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}
export const Textarea = (props: TextAreaProps) => {
  const { value, id, className, handleOnChange, handleOnKeyDown, ...rest } = props;
  return (
    <>
      <label className="hidden">{props.value}</label>
      <div
        className="text-area-container grid flex-1 after:invisible after:col-start-1 after:row-start-1 after:whitespace-pre-wrap"
        data-replicated-value={props.value}
      >
        <textarea
          {...rest}
          rows={1}
          name="text"
          className={twMerge(className, "text-area col-start-1 row-start-1 resize-none overflow-hidden outline-0")}
          onChange={(e) => props.handleOnChange?.(e, props.id)}
          onKeyDown={(e) => props.handleOnKeyDown?.(e)}
          value={props.value}
          autoFocus
        />
      </div>
    </>
  );
};
