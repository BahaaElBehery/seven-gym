const GymProgress = ({ percentage, text }) => {
  const radius = 60;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="black"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="yellow"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="white"
          fontSize="18px"
          fontWeight="bold"
        >
          {percentage}%
        </text>
      </svg>

      <p className="mt-2 text-lg font-semibold text-white max-sm:text-sm">
        {text}
      </p>
    </div>
  );
};

export default GymProgress;
