import Link from "next/link";

type ButtonType = React.HTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
    as: 'button'
} | {
    children: React.ReactNode;
    as: 'link';
    to: string;
}
const buttonStyles = "bg-slate-600 text-white p-0.5 px-1.5 rounded-sm";
export const Button = (props: ButtonType) => {

    if(props.as === "button" ) {
        return (
            <button {...props} type="button" className={buttonStyles}>{props.children}</button>
        );
    }
    return (
        <Link href={props.to} className={buttonStyles}>{props.children}</Link>
    )
};