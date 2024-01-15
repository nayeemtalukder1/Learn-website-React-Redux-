function ErrorMessage({ items }) {
  //let foodItems = [];
  return <>{items.length === 0 && <h2> I am Hungry </h2>}</>;
}
export default ErrorMessage;
