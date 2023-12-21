import React from "react";

const times = () => {
  const [popups, setpopus] = useState(false);
  const handlepopup = () => {
    setpopus(!popups);
  };

  return (
    <div class="go">
      <div class="ki">
        <div class="ji">
          <CircularProgressbar value={60} text={`60%`} />;
        </div>
      </div>
      <div class="lo">
        <button class="hi">Start</button>
        <button class="hi">Pause</button>
        <button class="hi">Reset</button>
      </div>
      <div class="op">
        <button class="li" onClick={handlepopup}>
          Settings
        </button>
      </div>

      <div>
        <div>
          <input type="button" value="" />
        </div>
      </div>
    </div>
  );
};

export default times;
