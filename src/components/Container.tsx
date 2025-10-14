import type { CSSProperties, PropsWithChildren } from "react";

interface ContainerProps {
    style?: CSSProperties;
}

type Props = PropsWithChildren<ContainerProps>;

export default function Container({ children, style }: Props) {
    return (
        <div style={{display: "flex", flexWrap: "wrap", maxWidth: "1000px", margin: "50px auto", ...style}}>
            {children}
        </div>
    );
}