import "../styles/Loading.css";

const Loading = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
