export function Random(props) {
  console.log(props);
  const min = 1;
  const max = 45;
  return (
    <>
      <p>
        Random value between {props.min} and {props.max}
        {'=>'} {Math.floor(Math.random() * (max - min + 1)) + min};
      </p>
    </>
  );
}
