interface Props {
  title: string;
  styles?: string;
}

export const Titulo = ({ title, styles }: Props) => {
  return (
    <>
      <h1 className={styles}>{title}</h1>
    </>
  );
};
