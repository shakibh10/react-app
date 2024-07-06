import { LineChart as CHline, Line } from 'recharts';

const LineChart = () => {

    const students = [
        { id: 1, name: 'Student 1', math: 78, physics: 82, chemistry: 79 },
        { id: 2, name: 'Student 2', math: 85, physics: 87, chemistry: 90 },
        { id: 3, name: 'Student 3', math: 92, physics: 89, chemistry: 94 },
        { id: 4, name: 'Student 4', math: 68, physics: 72, chemistry: 70 },
        { id: 5, name: 'Student 5', math: 74, physics: 76, chemistry: 75 },
        { id: 6, name: 'Student 6', math: 88, physics: 90, chemistry: 89 },
        { id: 7, name: 'Student 7', math: 91, physics: 93, chemistry: 92 },
        { id: 8, name: 'Student 8', math: 83, physics: 85, chemistry: 84 },
        { id: 9, name: 'Student 9', math: 76, physics: 78, chemistry: 77 },
        { id: 10, name: 'Student 10', math: 95, physics: 97, chemistry: 96 }
      ];
      
      
    return (
        <div>
            <CHline width={500} height={400} data={students}>

            <Line dataKey="math" stroke='green'></Line>
            <Line dataKey="physics" stroke='yellow'></Line>
            <Line dataKey="chemistry" stroke='blue'></Line>

            </CHline>
        </div>
    );
};

export default LineChart;