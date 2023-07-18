export function addWrapper(Child: any) {
  const WrappedComp = (props: any) => {
    return (
      <div className="wrapper">
        <Child {...props} />
      </div>
    );
  };
  return WrappedComp
}
