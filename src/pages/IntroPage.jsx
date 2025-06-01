//serves as the welcome screen with quiz instructions.
import '../App.css';

const IntroPage = ({ username, setUsername }) => {
  const handleStart = () => {
    if (username.trim() !== '') {
      setUsername(username.trim());
    }
  };

  return (
    <div className="intro-page">
      <h1>Welcome to the Exam App</h1>
      <p>Please enter your name to begin.</p>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your name"
        className="mb-4 p-2 border rounded w-full max-w-md"
      />
      <button onClick={handleStart}>Start Exam</button>
    </div>
  );
};

export default IntroPage;
