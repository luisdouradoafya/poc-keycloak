'use client';

import { CustomHeading } from "./styles";

type Props = {
    children?: string;
};

export function Heading(props: Props) {
    return (
        <CustomHeading>
            {props.children}
        </CustomHeading>
    );
}