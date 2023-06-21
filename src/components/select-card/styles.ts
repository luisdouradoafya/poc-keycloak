'use client';

import styled from 'styled-components';

const COLOR = '#D31C5B';

export const Card = styled.button`
    padding: 12px;
    border: 1px solid #333;
    border-radius: 5px;
    transition: all 0.3s;

    &:hover {
        cursor: pointer;
        color: ${COLOR};
        border-color: ${COLOR};
    }
`;