function FormRowSelect({ label, name, value, list, handdleChange, icon }) {
  return (
    <div className="w-full mt-3">
      <label
        htmlFor={name}
        className="block mb-1 text-sm font-medium text-gray-800 uppercase"
      >
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-800 text-lg">
          {icon}
        </div>
        <select
          name={name}
          id={name}
          value={value}
          onChange={handdleChange}
          className="bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg capitalize w-full outline-none pl-10 p-2.5"
        >
          {list.map((itemValue, index) => (
            <option key={index} value={itemValue}>
              {itemValue}
            </option>
          ))}
        </select>
      </div>
      {/* <select
        name={name}
        id={name}
        value={value}
        onChange={handdleChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg capitalize w-full outline-none pl-10 p-2.5"
      >
        {list.map((itemValue, index) => (
          <option key={index} value={itemValue}>
            {itemValue}
          </option>
        ))}
      </select> */}
    </div>
  );
}

export default FormRowSelect;
