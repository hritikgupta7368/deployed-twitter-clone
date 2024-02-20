const Button_function = (arr) => {
  const result = arr.map((item, index) => (
    <button key = {item.id} className="link_button h-[54px]">{item.label}</button>
  ));
  return result;
};

export default Button_function;
