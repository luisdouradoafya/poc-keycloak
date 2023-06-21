'use client';

import { SelectCard } from "../select-card";
import { List } from "./styles";

type Props = {
    options: Array<any>;
};

export function UserTypeList({
    options
}: Props) {
    const renderOptions = options?.map((item, index) => (
        <SelectCard key={index}>{item}</SelectCard>
    ))
    return (
        <List>
            {renderOptions}
        </List>
    );
};