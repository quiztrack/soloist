# React Soloist

```text
📦 -> 📃📃📃...
```

## Examples

```js
setMetaSoloist([{ tag: "en" }, { tag: "ja" }]);

function setSoloiesGlobal() {
  return ({ where: { tag: "en" } });
}

function App() {

  // set en for default
  useSoloistGlobal(setSoloiesGlobal);

  return (
    <Page />
  );
}

function Page() {
  const { data } = useSoloist();

  // ...
}
```