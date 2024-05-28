import React, { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { setBuildsPerWeek } from '../../store/slices/builds.slice';
import Graph from './Graph';

const TestGraph: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Simulate fetching data and dispatching to the store
    const simulatedData = {
      'Week 1': 100,
      'Week 2': 200,
      'Week 3': 150,
      'Week 4': 220,
      'Week 5': 300,
      'Week 6': 230,
      'Week 7': 400,
    };
    dispatch(setBuildsPerWeek(simulatedData));
  }, [dispatch]);

  return (
    <div>
      {/* <Graph /> */}
    </div>
  );
};

export default TestGraph;
