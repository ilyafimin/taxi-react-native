import { FC, useEffect, useState, useRef } from 'react';

import { 
    NativeSyntheticEvent, 
    TextInputChangeEventData 
} from 'react-native';

import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native';

type OTPContainerProps = {
    code: string,
    numberOfFields: number,
    setCode: React.Dispatch<React.SetStateAction<string>>,
}

const OTPContainer: FC<OTPContainerProps> = ({
    code,
    setCode,
    numberOfFields,
}) => {

    const getNewRef = () => useRef();

    const [codeArray, setCodeArray] = useState<string[]>(
        Array(numberOfFields).fill('')
    )

    const [inputsRefs, setInputRefs] = useState<React.MutableRefObject<null>[]>(
        Array(numberOfFields)
            .fill(null)
            .map(() => useRef(null))
    )

    const [autoCompleted, setAutoCompleted] = useState<boolean>();

    const handleEnterCodeEvent = (
        event: NativeSyntheticEvent<TextInputChangeEventData>,
        index: number,
    ) => {
        const { nativeEvent: { text } } = event

        setCodeArray((prev) => {
            prev[index] = text;
            return prev;
        });

        if (text && !(index == numberOfFields - 1)) inputsRefs[index + 1].current.focus()

        if (!text && (index - 1 > -1)) inputsRefs[index - 1].current.focus()

        if (text && (index == numberOfFields)) setAutoCompleted(true)

    };

    return (
        <View style={styles.forms_row__container}>
            {
                inputsRefs.length && (
                    inputsRefs.map((
                        ref: React.MutableRefObject<null>,
                        index: number,
                    ) => (
                        <TextInput
                            autoFocus={!index}
                            ref={ref}
                            style={styles.input}
                            key={index}
                            keyboardType='number-pad'
                            onChange={(event) => handleEnterCodeEvent(event, index)}
                            maxLength={1}
                        />
                    ))
                )
            }
        </View>
    )
};

const styles = StyleSheet.create({
    forms_row__container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
        paddingVertical: 20,
    },
    input: {
        width: 65,
        height: 65,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#D1D1D1',
        fontSize: 26,
        textAlign: 'center'
    },
    active: {
        borderColor: 'green',
    },
})

export default OTPContainer;