type Props = {
  title: string;
  des?: string;
};

function Header({ title, des }: Props) {
  return (
    <header>
      <h1>{title}</h1>
      <p>{des}</p>
    </header>
  );
}

export default Header;
