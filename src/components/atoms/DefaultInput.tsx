import React, {
    HTMLInputTypeAttribute,
    SetStateAction,
    useEffect,
} from 'react';
import styled from 'styled-components';
import { colors } from '../../constant/colors';
import { InputValueTypes } from '../../types/defaultTypes';

interface LocalProps {
    type: HTMLInputTypeAttribute;
    value?: InputValueTypes;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    name?: string;
    checked?: boolean;
    onBlur?: () => Promise<void>;
    isPossible?: boolean;
}
const DefaultInput = ({
    type,
    onChange,
    value,
    name,
    placeholder,
    onBlur,
    isPossible,
}: LocalProps) => {
    return (
        <StyledInput
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            onBlur={onBlur}
            isPossible={isPossible}
        />
    );
};

export default DefaultInput;

const StyledInput = styled.input<{
    type: HTMLInputTypeAttribute;
    isPossible?: boolean;
}>`
    display: ${(props) => (props.type === 'radio' ? 'none' : 'flex')};
    outline: none;
    width: 10rem;
    align-items: center;
    padding: 10px 8px;
    border: 1px solid ${colors.gray};
    border-radius: 4px;
    background: transparent;
    &:focus {
        border: 2px solid ${colors.violet};
    }
    /* color: ${(props) => (props.isPossible ? 'black' : 'red')}; */
`;
