function Button(props) {
  return (
    <button className="text-slate-400 p-2 rounded-md" {...props}>
      {props.children}
    </button>
  );
}

export default Button;
