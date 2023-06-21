'use client';

import Image from "next/image";
import type { ImageProps } from "next/image";

type Props = ImageProps;

export function Brand() {
    return <Image width={300} height='150' src="/assets/png/logo-afya-gptw.png" alt="Logo Afya"/>
};