// create progressBar template

const ProgressBar: React.FC<{value: number}> = ({value}) => {


  return (
<div className="w-full bg-white border rounded-md">
  <div
    className="bg-primary p-0.5 text-center text-xs font-medium leading-none text-primary-100 w-7/12"
    style={{ width: `${value}%` }}>
    {value}
  </div>
</div>
  );
}

export default ProgressBar;