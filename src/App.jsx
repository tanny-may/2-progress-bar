import { useState } from 'react';
import { ProgressBar } from './components/ProgressBar/ProgressBar';
import './App.css';

function App() {
	const [state, setState] = useState(0);

	return (
		<div>
			<input type='range' min={0} max={1000} step={10} value={state} onChange={(e) => setState(+e.target.value)} />
			<div style={{ width: 500 }}>
				<ProgressBar thresholds={[25, 50, 100, 200, 500, 1000]} value={state} />
			</div>
		</div>
	);
}

export default App;
