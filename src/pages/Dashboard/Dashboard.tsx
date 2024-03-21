import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Label,
  LabelList,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import UsersIcon from "../../icons/UsersIcon";
import "./dashboard.css";
import ProgressBar from "../../components/ProgressBar";
import BolarBar from "../../components/BolarBar";
import ProgressBarLayout from "../../layouts/ProgressBarLayout";

export default function Dashboard() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
    },
    {
      name: "Page B",
      uv: 3000,
    },
    {
      name: "Page C",
      uv: 2000,
    },
    {
      name: "Page D",
      uv: 2780,
    },
    {
      name: "Page E",
      uv: 1890,
    },
    {
      name: "Page F",
      uv: 2390,
    },
    {
      name: "Page G",
      uv: 3490,
    },
  ];

  const data02 = [
    {
      name: "A",
      uv: 2000,
      gv: 5000,
      pv: 3000,
      uvp: "20%",
      gvp: "50%",
      pvp: "30%",
    },
  ];

  const data01 = [
    {
      name: "Stocked",
      value: 400,
      fill: "#46bcff",
    },
    {
      name: "Space",
      value: 300,
      fill: "#243a48",
    },
  ];

  return (
    <div className="dashboard-grid">
      {[1, 2, 3].map(() => (
        <div className="card summery-card">
          <div className="icon-container">
            <UsersIcon />
          </div>
          <div>
            <h4>Main</h4>
            <p>$10,000</p>
          </div>
        </div>
      ))}
      <div className="card sales-card">
        <div className="card-header">
          <h2>Title</h2>
          <div className="dropdown">
            <p>Monthly</p>
            <div className="arrow-down"></div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={data}>
            <Tooltip />
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4cd3c2" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#4cd3c2" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <Area
              dataKey="uv"
              stroke="#4cd3c2"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="card statistics-card">
        <h2 className="mb-2">Statistics</h2>
        <div className="mb-2">
          <BolarBar
            title="Payment Type"
            valueA={60}
            total={100}
            labelA="Online"
            labelB="COD"
          />
        </div>
        <div className="card-header">
          <h2>Title</h2>
          <div className="dropdown">
            <p>Monthly</p>
            <div className="arrow-down"></div>
          </div>
        </div>
        <ProgressBarLayout total={3320}>
          <ProgressBar label="Electronics" max={3320} value={1000} />
          <ProgressBar label="Grocery" max={3320} value={200} />
          <ProgressBar label="Women's" max={3320} value={1500} />
          <ProgressBar label="Men's wear" max={3320} value={120} />
          <ProgressBar label="Furniture" max={3320} value={500} />
        </ProgressBarLayout>
      </div>
      <div className="card overview-card">
        <h2 className="mb-2">Wearhouse</h2>
        <ResponsiveContainer width="100%" height={150}>
          <PieChart>
            <Pie
              stroke="#1c1c1c"
              paddingAngle={2}
              innerRadius={40}
              dataKey="value"
              data={data01}
              outerRadius={65}
              onMouseMove={(state) => {
                console.log(state);
              }}
            >
              <Label width={30} position="center" fontSize={30} fill="white">
                {(
                  (data01[0].value / (data01[1].value + data01[0].value)) *
                  100
                ).toFixed() + "%"}
              </Label>
            </Pie>
            <Legend align="left" verticalAlign="top" layout="vertical" />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="card overview-card">
        <h2 className="mb-2">Wearhouse</h2>
        <div className="d-flex justify-content-between">
          <ul style={{ width: "50%", marginTop: 25 }}>
            <li className="d-flex gap-05 mb-1 align-items-center">
              <div
                style={{ width: 20, height: 20, backgroundColor: "white" }}
              ></div>
              UV: 1000
            </li>
            <li className="d-flex gap-05 mb-1 align-items-center">
              <div
                style={{ width: 20, height: 20, backgroundColor: "white" }}
              ></div>
              UV: 1000
            </li>
            <li className="d-flex gap-05 mb-1 align-items-center">
              <div
                style={{ width: 20, height: 20, backgroundColor: "white" }}
              ></div>
              UV: 1000
            </li>
          </ul>
          <BarChart barGap={0} data={data02} height={120} width={100}>
            <Tooltip cursor={false} label="Something:" />
            <Bar dataKey="pv" fill="#46bcff">
              <LabelList position="top" fontSize={10} dataKey="pvp" />
            </Bar>
            <Bar dataKey="uv" fill="#ff0808">
              <LabelList position="top" fontSize={10} dataKey="uvp" />
            </Bar>
            <Bar dataKey="gv" fill="#4cd3c2">
              <LabelList position="top" fontSize={10} dataKey="gvp" />
            </Bar>
          </BarChart>
        </div>
      </div>
      <div className="card overview-card">
        <h2 className="mb-2">Wearhouse</h2>
      </div>
    </div>
  );
}
