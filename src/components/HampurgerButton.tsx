interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className: string;
}

export default function HampurgerButton(props: ButtonProps) {
  return (
    <button className={props.className} onClick={props.onClick}>
      <div></div>
      <div></div>
      <div></div>
    </button>
  );
}
