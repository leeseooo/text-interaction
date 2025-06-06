import './App.css';
import AnimatedText from './components/AnimatedText';

function App() {
  const line = `우측 회전근개파열을 조심하세요!\n좌측 회전근개파열을 조심하세요!\n전면 회전근개파열을 조심하세요!`;
  return (
    <div className="container">
      <AnimatedText text="안녕하세요. 제로입니다!" preset="slide" />
      <AnimatedText text="오늘은 아침부터 크로스핏을 다녀왔습니다." split="word" />
      <AnimatedText text={line} split="line" />
    </div>
  );
}

export default App;
