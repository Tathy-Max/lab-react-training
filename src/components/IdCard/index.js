import style from './idCard.module.css';
export function IdCard(props) {
  return (
    <>
      <div className={style.container}>
        <div>
          <p>
            <strong>Last Name: </strong> {props.lastName}
          </p>
          <p>
            <strong>First Name: </strong>
            {props.firstName}
          </p>
          <p>
            <strong>Last Gender: </strong>
            {props.gender}
          </p>
          <p>
            <strong>Height: </strong>
            {props.height}
          </p>
          <p>
            <strong>Birth: </strong>
            {props.birth}
          </p>
        </div>
        <div>
          <img id="id-img" src={props.picture} alt="foto" />
          {/* <p>{props.picture}</p> */}
        </div>
      </div>
    </>
  );
}
