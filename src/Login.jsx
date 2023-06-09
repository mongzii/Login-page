//로그인 컴포넌트
import React, {useState, useEffect} from 'react'

const User = {
    email: 'test@example.com',
    pw: 'test2323@@@'
}

export default function Login() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const handleEmail = (e)=> {
        setEmail(e.target.value);
        const regex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if(regex.test(email)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);   
        }
    }

    const handlePassword = (e) => {
        setPw(e.target.value);
        const regex = 
            /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)/-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
         if(regex.test(pw)){
            setPwValid(true);
         } else {
            setPwValid(false);
         }
    }

    const onClickConfirmButton = () => {
        //더미데이터와 email, pw 동일한지 확인하는 함수
        if(email === User.email && pw === User.pw){
            alert('로그인에 성공했습니다.');
        } else {
            alert('등록되지 않은 회원입니다.');
        }
    }

    useEffect(() => {
        if(emailValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [emailValid, pwValid]);   //33분 14초

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
                    type='text'
                    className='input'
                    placeholder='test@gmail.com'
                    value={email}
                    onChange={handleEmail}
                    />
                </div>
                <div className='errorMessageWrap'>
                    {!emailValid && email.length > 0 && (
                        <div>올바른 이메일을 입력해주세요.</div>
                    )}
                </div>

                <div style={{ marginTop: '26px' }} className='inputTitle'>비밀번호</div>
                <div className='inputWrap'>
                    <input 
                    type='password'
                    className='input'
                    placeholder='영문, 숫자, 특수문자 포함 8자이상'
                    value={pw}
                    onChange={handlePassword}
                    />
                </div>
                <div className='errorMessageWrap'>
                    {
                        !pwValid && pw.length > 0 && (
                            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                        )}
                    
                </div>
            </div>
            <div>
                <button onClick={onClickConfirmButton} disabled={notAllow} className='bottomButton'>확인</button>
                {/* 일단은 disabled를 true로 해서 비활성화상태만들어둔다. 나중에 state값으로 true값을 변경해준다.*/}
            </div>
        </div>
    )
}