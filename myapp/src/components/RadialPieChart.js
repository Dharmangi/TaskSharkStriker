import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

//  Radial Pie Chart Data
const data = [
  { name: "Key Assets", value: 2, max: 2, color: "#F5A623", icon: "🔑" },
  { name: "Vulnerabilities", value: 22, max: 22, color: "#C7DA42", icon: "⚡" },
  { name: "Threat Events", value: 45, max: 74, color: "#F66D6D", icon: "👀" },
  { name: "Malware Sandbox", value: 0, max: 0, color: "#FF5252", icon: "🛑" },
  { name: "Identities", value: 0, max: 32, color: "#E91E63", icon: "🛂" },
  { name: "Unknown Phase", value: 0, max: 0, color: "#9C27B0", icon: "❓" },
];

//  Rotating Earth Component
const RotatingEarth = () => {
  const mountRef = useRef(null);

  useEffect(() => { 
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(680, 300); 
    mountRef.current.appendChild(renderer.domElement);

    // Earth Geometry & Texture
    const geometry = new THREE.SphereGeometry(1.5, 64, 64);
    const texture = new THREE.TextureLoader().load("https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg");

    const material = new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.5,
      metalness: 0.1,
    });

    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Softer light
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    // Handle Resizing
    const handleResize = () => {
      renderer.setSize(320, 300);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div ref={mountRef} style={styles.earthContainer}></div>;
};

//  Radial Pie Chart Component
const RadialPieChart = () => {
  if (!data || data.length === 0) {
    return <div style={styles.chartContainer}>No data available.</div>;
  }

  const transformedData = data.map((item) => ({
    ...item,
    percent: item.max > 0 ? (item.value / item.max) * 100 : 0, // Avoid division by zero
  }));

  return (
    <div style={styles.chartContainer}>
      <h2 style={styles.title}>System Security Overview</h2>
      <div style={styles.pieChartContainer}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={transformedData}
              dataKey="percent"
              nameKey="name"
              cx="50%"
              cy="100%"
              startAngle={180}
              endAngle={0}
              innerRadius="60%"
              outerRadius="100%"
              paddingAngle={5}
              label={({ name, percent, index }) => {
                const item = transformedData[index];
                return `${item.icon} ${item.value}/${item.max}`;
              }}
              labelStyle={styles.labelStyle}
            >
              {transformedData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value, name, props) => {
                const dataItem = transformedData.find((item) => item.name === props.payload.name);
                return `${dataItem.value} / ${dataItem.max}`;
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <RotatingEarth />
    </div>
  );
};

//  Combined CSS Styles
const styles = {
  chartContainer: {
    color: "#ffffff",
    padding: "2px",
    marginRight: "1px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
  pieChartContainer: {
    width: "400px",
    height: "250px",
    marginBottom: "20px",
    marginTop: "-160px",
    marginLeft: "370px",
  },
  earthContainer: {
    width: "1140px",
    height: "250px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px auto",
    position:"absolute"
  },
  labelStyle: {
    fill: "white",
    fontSize: "12px",
    fontWeight: "bold",
    textAnchor: "middle",
  },
};

export default RadialPieChart;
