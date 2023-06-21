'use client';

import React from 'react';

import { Card } from './styles';

type Props = {
    children?: React.ReactNode;
};

export function SelectCard(props: Props) {
    return (
        <Card>
            {props.children}
        </Card>
    );
};