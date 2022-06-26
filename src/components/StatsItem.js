function StatsItem({ count, title, icon, color }) {
  return (
    <div className="bg-white w-full mb-3 sm:mb-0 rounded-lg p-8 h-[180px]">
      <header className="flex items-center justify-between">
        <span className={`text-5xl font-bold mr-2 ${color}`}>{count}</span>
        <span className={`text-3xl ${color} bg-gray-100 p-3 rounded-lg`}>
          {icon}
        </span>
      </header>
      <h5 className="capitalize mt-4 text-gray-600">{title}</h5>
    </div>
  );
}

export default StatsItem;
