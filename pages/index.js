import MyWonderfulComponent from "./MyWonderfulComponent";

const Index = ({ other }) => {
  return <MyWonderfulComponent {...other}></MyWonderfulComponent>;
};

export default Index;

export async function getStaticProps(context) {
  const other = {
    count: 42,
    title: "Hello from SSR",
    id: 12,
    options: {},
  };
  console.log(other.title);
  return {
    props: { other },
  };
}
