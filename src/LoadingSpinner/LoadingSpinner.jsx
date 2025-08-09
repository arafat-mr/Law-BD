
import { useState, CSSProperties } from "react";
import { ClipLoader,BarLoader,CircleLoader } from "react-spinners";




function LoadingSpinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("");

  return (
    <div className="sweet-loading absolute top-64 left-40 md:left-[600px] ">
      <button onClick={() => setLoading(!loading)}><CircleLoader
  color="#36d7b7"
  loading
  size={60}
/>

      </button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder=""
      />
             
      {/* <ClipLoader
        color={color}
        loading={loading}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> */}
    </div>
  );
}

export default LoadingSpinner;