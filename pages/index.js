import React, { useState } from 'react';
import Link from 'next/link'; // Link 컴포넌트를 불러옵니다.

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh', // 화면 전체 높이를 차지하도록 설정합니다.
    },
    startButton: {
        padding: '10px 20px',
        fontSize: '18px',
        fontWeight: 'bold',
        backgroundColor: 'white', // 배경색을 흰색으로 변경합니다.
        color: 'black', // 텍스트 색상을 검은색으로 변경합니다.
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        textDecoration: 'none',
        display: 'inline-block',
        textAlign: 'center',
    },
};

export default function Home() {
    const [messageFromSpringBoot, setMessageFromSpringBoot] = useState('');

    return (
        <div style={styles.container}>
            <Link href="/inform" legacyBehavior>
                <a style={styles.startButton}>시작하기</a>
            </Link>
            <p>{messageFromSpringBoot}</p>
        </div>
    );
}
