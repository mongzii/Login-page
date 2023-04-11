//로그인 컴포넌트

import React, {useState} from 'react'

export default function Login() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);

    const handleEmail = (e)=> {
        setEmail(e.target.value);
        const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(regex.test(email)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);   //26분16초부터 듣기
        }
    }

    return (
        <div className='page'>
            <div className='titleWrap'>
                이메일과 비밀번호를
                <br/>
                입력해주세요
            </div>

            <div className='contentWrap'>
                <div className='inputTitle'>이메일 주소</div>
                <div className='inputWrap'>
                    <input 
                    className='input'
                    placeholder='test@gmail.com'
                    value={email}
                    onChange={handleEmail}
                    />
                </div>
                <div className='errorMessageWrap'>
                    올바른 이메일을 입력해주세요.
                </div>

                <div style={{ marginTop: '26px' }} className='inputTitle'>비밀번호</div>
                <div className='inputWrap'>
                    <input 
                    className='input'
                    placeholder='영문, 숫자, 특수문자 포함 8자이상'
                    value={pw}
                    />
                </div>
                <div className='errorMessageWrap'>
                    영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.
                </div>
            </div>
            <div>
                <button disabled={true} className='bottomButton'>확인</button>
                {/* 일단은 disabled를 true로 해서 비활성화상태만들어둔다. 나중에 state값으로 true값을 변경해준다.*/}
            </div>
        </div>
    )
}