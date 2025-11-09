function WelcomeMessage() {
  return (
    <div
      style={{
        backgroundColor: "#f0f8ff", // light blue background
        border: "2px solid navy",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "center",
        width: "60%",
        margin: "40px auto",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ color: "navy", fontSize: "28px" }}>
        Hello everyone, I am learning React at ALX!
      </h1>
      <p style={{ color: "darkslategray", fontSize: "18px" }}>
        This is a simple JSX component.
      </p>
      <p style={{ color: "#333", fontStyle: "italic" }}>
        I am learning about JSX!
      </p>
    </div>
  );
}

export default WelcomeMessage;
