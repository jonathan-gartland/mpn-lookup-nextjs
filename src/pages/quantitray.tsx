import MyComponent from "@/components/MyComponent";

export default function Quantitray() {
  return (
    <div>
      <h1 data-testid="qt-header">QuantiTray&reg; MPN</h1>
      <MyComponent testtype={"quanti"} />
    </div>
  );
}
