//로그인 컴포넌트

import React from 'react'

export default function Login() {
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
                    <input className='input'/>
                </div>
                <div className='errorMessageWrap'></div>

                <div className='inputTitle'>비밀번호</div>
                <div className='inputWrap'>
                    <input className='input'/>
                </div>
            </div>
        </div>
    )
}