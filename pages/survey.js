import React, { useState } from 'react';
import axios from 'axios';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        fontFamily: 'sans-serif, Arial',
    },
    tip: {
        height: '350px',
    },
    questionBox: {
        backgroundColor: 'white',
        borderRadius: '10px', // 모서리를 둥글게
        padding: '20px',
        margin: '10px',
        maxWidth: '400px', // 문항 박스의 최대 너비
        width: '100%', // 최대 너비 이내로 확장
    },
    button: {
        backgroundColor: 'orange',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    title: {
        color: 'white',
        fontFamily: 'sans-serif, Arial',
    },
};

export default function Survey({ surveyData }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({}); // 사용자 답변을 저장하는 상태
  
    const questions = [
      {
        number: 1,
        text: '1. 이름을 입력해주세요',
        inputType: 'text',
        key: 'name',
      },
      {
        number: 2,
        text: '2. 나이를 입력해주세요 (숫자만 입력 가능합니다)',
        inputType: 'text',
        key: 'age',
      },
      {
        number: 3,
        text: '3. 성별을 선택해주세요',
        inputType: 'radio',
        key: 'gender',
        options: ['MALE', 'FEMALE', 'OTHER'],
      },
      {
        number: 4,
        text: '4. 사용하는 프로그래밍 언어는 무엇인가요?',
        inputType: 'radio',
        key: 'language',
        options: ['JavaScript', 'Python', 'Java', 'C#', '기타'],
      },
      // 다른 질문들을 추가하세요
    ];
  
    const handleInputChange = (key, value) => {
      setAnswers({ ...answers, [key]: value });
    };
  
    const handleNextQuestion = () => {
      setCurrentQuestion(currentQuestion + 1);
    };
  
    const handleSubmit = async () => {
        try {
            console.log(answers);
            const response = await axios.post('http://localhost:8080/survey', answers);
            if (response.status === 200) {
                console.log('Survey data submitted successfully');
                // You can add logic here to handle success
            } else {
                console.error('Failed to submit survey data');
                // Handle the error as needed
            }
        } catch (error) {
            console.error('An error occurred while submitting survey data:', error);
            // Handle the error as needed
        }
    };
  
    return (
      <div style={styles.container}>
        <div style={styles.tip}>
          <h1 style={styles.title}>생리 불규칙성 분류 설문지</h1>
        </div>
        {questions.slice(0, currentQuestion + 1).map((question, index) => (
          <div key={index} style={styles.questionBox}>
            <h3>{question.text}</h3>
            <div>
              {question.inputType === 'text' && (
                <input
                  type="text"
                  value={answers[question.key] || ''}
                  onChange={(e) => handleInputChange(question.key, e.target.value)}
                />
              )}
              {question.inputType === 'radio' && (
                <div>
                  {question.options.map((option) => (
                    <label key={option}>
                      <input
                        type="radio"
                        value={option}
                        checked={answers[question.key] === option}
                        onChange={() => handleInputChange(question.key, option)}
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        {currentQuestion < questions.length ? (
          <button style={styles.button} onClick={handleNextQuestion}>다음</button>
        ) : (
          <button style={styles.button} onClick={handleSubmit}>제출</button>
        )}
      </div>
    );
  }