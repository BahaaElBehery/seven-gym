const CAtText = ({ txt, number }) => {
  return (
    <div className="flex items-center justify-between text-[#c4c4c4] text-sm">
      <p>{txt}</p>
      <span>{number}</span>
    </div>
  );
};

export default CAtText;
