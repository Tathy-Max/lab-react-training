// import style from './greetings.style.css';
export function Greetings(props) {
  console.log(props);
  const de = 'Hallo';
  const fr = 'Bonjour';

  return (
    <>
      <p>
        {de} {props.children}
      </p>
      <p>
        {fr} {props.children}
      </p>
    </>
  );
}
