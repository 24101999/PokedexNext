import Navbar from "./Navbar";

type ch<T> = T;

// interface test<T extends string | number> {
//   name?: string;
// }

export default function Main({ children }: ch<any>) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
    </>
  );
}
