import React, { useCallback, useState } from 'react';
import { COLOR } from '../constants/color-constants';
import { Box } from './common-components/Box';
import { Form } from './common-components/Form';
import FormGroup from './common-components/FormGroup';
import { Text } from "./common-components/Text";
import {
    formatPhoneNumber,
    validBirthday,
    validEmail,
    validFirstLastName, validMessage,
} from "../api/validation/validation";
import {TextArea} from "./common-components/TextArea";
import {FlexBox} from "./common-components/FlexBox";
import { Button } from './common-components/Button';

const FormCheckout = () => {
    const [firstLastName, setFirstLastName] = useState({
        firstLastName: '',
        error: true,
        dirty: false
    })

    const [email, setEmail] = useState({
        email: '',
        error: true,
        dirty: false
    })

    const [phone, setPhone] = useState({
        phone: '',
        error: true,
        dirty: false
    })

    const [birthday, setBirthday] = useState({
        birthday: '',
        error: true,
        dirty: false
    })

    const [message, setMessage] = useState({
        message: '',
        error: true,
        dirty: false
    })

    const [formRes, setFormRes] = useState('')

    const isCorrectData = () => {
        return !(!firstLastName.error && !phone.error && !email.error && !birthday.error && !message.error)
    }

    const sendForm = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()

        if(!firstLastName.error && !phone.error && !email.error && !message.error){
            // можно в отдельную функции вынести
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    name: firstLastName.firstLastName,
                    phone: phone.phone,
                    email: email.email,
                    message: message.message
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(
                    (result) => {
                        setFormRes('Отправка прошла успешно')
                        setFirstLastName({...firstLastName, firstLastName: ''})
                        setPhone({...phone, phone: '', error: true, dirty: false})
                        setEmail({...email, email: '', error: true, dirty: false})
                        setBirthday({...birthday, birthday: '', error: true, dirty: false})
                        setMessage({...message, message: '', error: true, dirty: false})
                    },
                    (error) => {
                        setFormRes('Ошибка при отправке')
                        console.log('err ', error)
                    })
        }
    }

    const blurHandler = (e: any) => {
        switch (e.target.name) {
            case 'firstLastName':
                setFirstLastName({...firstLastName, dirty: true})
                break
            case 'email':
                setEmail({...email, dirty: true})
                break
            case 'birthday':
                setBirthday({...birthday, dirty: true})
                break
            case 'message':
                setMessage({...message, dirty: true})
                break
        }
    }

    const handleFirstLastName = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        !validFirstLastName(event.target.value)
            ? setFirstLastName({...firstLastName, firstLastName: event.target.value, error: true})
            : setFirstLastName({...firstLastName, firstLastName: event.target.value, error: false})
    },[firstLastName])

    const handlePhone = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhoneNumber = formatPhoneNumber(event.target.value)
        setPhone({...phone, phone: formattedPhoneNumber, error: false})
    },[phone])

    const handleEmail = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        !validEmail(event.target.value)
            ? setEmail({...email, email: event.target.value, error: true})
            : setEmail({...email, email: event.target.value, error: false})
    },[email])

    const handleBirthday = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        !validBirthday(event.target.value)
            ? setBirthday({...birthday, birthday: event.target.value, error: true})
            : setBirthday({...birthday, birthday: event.target.value, error: false})
    },[birthday])

    const handleMessage = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        !validMessage(event.target.value)
            ? setMessage({...message, message: event.target.value, error: true})
            : setMessage({...message, message: event.target.value, error: false})
    },[message])

    return (
        <Form>
            <Box width={500} marginAuto borderColor={COLOR.primary}>
                <Text size={24} marginBottom={24} textAlign={'center'}>Форма</Text>
                <FormGroup
                    labelName={'firstLastName'}
                    labelText={'Имя Фамилия'}
                    inputName={'firstLastName'}
                    inputType={'text'}
                    value={firstLastName.firstLastName.toUpperCase()}
                    placeholder={'Александр Светогор'}
                    onBlur={blurHandler}
                    onChange={handleFirstLastName}
                    error={'Это поле должно содержать только буквы'}
                    displayError={firstLastName.error && firstLastName.dirty}
                />
                <FormGroup
                    labelName={'email'}
                    labelText={'Email'}
                    inputName={'email'}
                    inputType={'email'}
                    value={email.email}
                    placeholder={'sasha.svetogor@gmail.com'}
                    onChange={handleEmail}
                    onBlur={blurHandler}
                    error={'неккоректный email'}
                    displayError={email.error && email.dirty}
                />
                <FormGroup
                    labelName={'phone'}
                    labelText={'Телефон (+7)'}
                    inputName={'phone'}
                    inputType={'tel'}
                    value={phone.phone}
                    placeholder={'Введите последние 10 цифр'}
                    onBlur={blurHandler}
                    onChange={handlePhone}
                    error={'введите последние 10 цифр'}
                    displayError={phone.error && phone.dirty}
                />
                <FormGroup
                    labelName={'birthday'}
                    labelText={'День рождения'}
                    inputName={'birthday'}
                    inputType={'date'}
                    value={birthday.birthday}
                    onChange={handleBirthday}
                    onBlur={blurHandler}
                    error={'неккоректно введены данные'}
                    displayError={birthday.error && birthday.dirty}
                />
                <FlexBox columnGap={18} justifyContent={'space-between'}>
                    <Text>Сообщение</Text>
                    <TextArea onChange={handleMessage} onBlur={blurHandler} name={'message'} value={message.message} />
                </FlexBox>
                <Text
                    size={12}
                    color={COLOR.secondary}
                    display={(message.error && message.dirty) ? 'block' : 'none'}
                >
                    больше 10 и менее 300 символов
                </Text>
                <Button
                    onClick={sendForm}
                    disabled={isCorrectData()}
                    prl={140}
                    color={COLOR.white}
                    backgroundColor={COLOR.primary}
                    fontSize={18}
                    borderColor={COLOR.primary}
                    marginAuto
                    marginTop={20}
                    marginBottom={20}
                >
                    Отправить
                </Button>
                <Text>{formRes}</Text>
            </Box>
        </Form>
    );
};

export default FormCheckout;