import PlaceholderLoading from "react-placeholder-loading";

export default function TextLoader(props) {
  const lines = [];
  for (let i = 0; i < props.lines; i++) {
    lines.push(
      <>
        <PlaceholderLoading
          shape="rect"
          width={props.width}
          height={props.height}
        />
        <div className={props.lineHeight}></div>
      </>
    );
  }
  return <>{lines.map((line) => line)}</>;
}
