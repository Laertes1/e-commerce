import "./button.css"
//! Componente de button
export function Button(props: { texto: string }) {
  return (
    <button className="main-containerPrincipal-box2-box2-viewNow">{props.texto}</button>
    )
}
