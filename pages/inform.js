import React, { useState } from 'react';
import Link from 'next/link'; // Link 컴포넌트를 불러옵니다.
import { Noto_Sans_KR } from 'next/font/google';

const myFont = Noto_Sans_KR ({
    subsets: ['latin'],
    weight: ['400'],
    });

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh', // 화면 전체 높이를 차지하도록 설정합니다.
        backgroundColor: '#fff9e6',
        width: '700px',
        borderRadius: '5px',
        color: 'black',
        margin: '40px auto',
    },
    startButton: {
        padding: '10px 20px',
        fontSize: '18px',
        fontWeight: 'bold',
        backgroundColor: '#FFA500', // 배경색을 흰색으로 변경합니다.
        color: 'black', // 텍스트 색상을 검은색으로 변경합니다.
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        textDecoration: 'none',
        display: 'inline-block',
        textAlign: 'center',
    },
    instruction: {
        padding: '10px 30px',
        fontFamily: myFont,
    },
};

export default function Home() {
    const [messageFromSpringBoot, setMessageFromSpringBoot] = useState('');

    return (
        <div style={styles.container}>
            <h1> 안내사항 </h1>
            <div style={styles.instruction}>
                MOON을 이용해주셔서 감사합니다. 
                <br></br>
                <br></br>
                저희 설문조사는 월경 불규칙 분류 AI 모델을 통해 입력해주신 정보를 바탕으로 자세한 안내를 드릴 예정입니다.
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                이 설문조사에서 수집된 데이터는 연구 목적으로만 사용되며 월경 불규칙성에 대한 이해를 높이는데 사용됩니다. 
                <br></br>
                모든 데이터는 익명화되고 집계됩니다.
                <br></br>
                <br></br>
                설문조사는 객관식 질문과 서술형 질문으로 구성되어 있습니다. 
                <br></br>
                각 질문을 주의 깊게 읽으시고 최대한 정확하게 응답해 주시기 바랍니다.
                <br></br>
                <br></br>
                이 설문조사는 완료하는데 약 10~15분 정도 소요될 것으로 예상됩니다.
                <br></br>
                <br></br>
                이 설문조사를 진행함으로써 귀하는 지침을 읽고 이해했으며 이에 동의합니다.
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                참여에 감사합니다.
                <br></br>
                <br></br>
            </div>
            <Link href="/survey" legacyBehavior>
                <a style={styles.startButton}>시작하기</a>
            </Link>
            <p>{messageFromSpringBoot}</p>
        </div>
    );
}