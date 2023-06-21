import { useState } from 'react';

import type { UserTypeList } from './types';

export function useTypeList() {
    const [selected, setSelected] = useState<UserTypeList | null>(null);
    const options: Array<string> = ['Estudante', 'Médico', 'Especialista'];

    const handleSelect = (value: UserTypeList): void => {
        setSelected(value);
    };

    return {
        selected,
        handleSelect,
        options
    }
}