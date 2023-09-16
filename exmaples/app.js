setMetaSoloist([
  {
    tag: "en"
  },
  {
    tag: "ja"
  },
  "soloist"
]);

function setSoloiesGlobal() {
  return ({ where: soloist });
}

function App() {

  // set en for default
  useSoloistGlobal(setSoloiesGlobal);

  return (
    <div></div>
  );
}

function Page() {
  const { data } = useSoloist();

  return (
    <div>{data[""]}</div>
  )
}