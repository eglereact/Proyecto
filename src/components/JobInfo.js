function JobInfo({ text, icon }) {
  return (
    <div className="flex items-center space-x-1 capitalize text-gray-800">
      <span>{icon}</span>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

export default JobInfo;
