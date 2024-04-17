import React from "react";

const nodes = [
  { id: 1, label: "Nodo 1", info: "Información del nodo 1" },
  { id: 2, label: "Nodo 2", info: "Información del nodo 2" },
  { id: 3, label: "Nodo 3", info: "Información del nodo 3" },
  { id: 4, label: "Nodo 4", info: "Información del nodo 4" },
  { id: 5, label: "Nodo 5", info: "Información del nodo 5" },
  { id: 6, label: "Nodo 6", info: "Información del nodo 6" },
  { id: 7, label: "Nodo 7", info: "Información del nodo 7" },
  { id: 8, label: "Nodo 8", info: "Información del nodo 8" },
];

const ServiciosMes = ({ mes }) => {
  const centerX = window.innerWidth / 2; // Centro horizontal
  const centerY = window.innerHeight / 2; // Centro vertical

  // Radio de los nodos
  const nodeRadius = 30; // Aumenta el radio de los nodos

  // Radio del círculo exterior
  const outerRadius = Math.min(window.innerWidth, window.innerHeight) / 3; // Mayor radio para ocupar más espacio

  // Ángulo de separación entre nodos
  const angleStep = (2 * Math.PI) / nodes.length;

  return (
    <div className="w-full h-full flex justify-center items-center">
      <svg className="w-full h-full">
        {/* Dibujar flechas desde el centro a cada nodo */}
        {nodes.map((node, index) => {
          const angle = index * angleStep;
          const x = centerX + outerRadius * Math.cos(angle);
          let y = centerY + outerRadius * Math.sin(angle);
          const nodeWidth = 200; // Ancho del nodo
          const nodeHeight = 100; // Alto del nodo
          y -= nodeHeight / 2; // Centra verticalmente el nodo
          return (
            <g key={node.id}>
              {/* Flecha */}
              <line
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y + nodeHeight / 2}
                stroke="black"
              />
              {/* Nodo */}
              <foreignObject
                x={x - nodeWidth / 2}
                y={y}
                width={nodeWidth}
                height={nodeHeight}
              >
                <div className="node w-full h-full bg-red-100 flex flex-col justify-center items-center">
                  <div>{node.label}</div>
                  <div className="info">{node.info}</div>
                </div>
              </foreignObject>
            </g>
          );
        })}
        {/* Nodo central */}
        <circle cx={centerX} cy={centerY} r={nodeRadius} fill="blue" />
      </svg>
    </div>
  );
};

export default ServiciosMes;
