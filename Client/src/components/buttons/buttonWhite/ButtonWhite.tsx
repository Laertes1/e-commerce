import "./buttonWhite.css";
//! Componente de button
export function ButtonWhite(props: { texto: string }) {
  return (
    <button className="main-containerPrincipal-box2-box2-viewNow-buttonWhite">
      {props.texto}
    </button>
  );
}
 