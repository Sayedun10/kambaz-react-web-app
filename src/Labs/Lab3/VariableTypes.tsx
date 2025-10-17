export default function VariableTypes() {
  // eslint-disable-next-line
  let numberVariable = 123;
  // eslint-disable-next-line
  let floatingPointNumber = 234.345;
  // eslint-disable-next-line
  let stringVariable = "Hello World!";
  // eslint-disable-next-line
  let booleanVariable = true;
  // eslint-disable-next-line
  let isNumber = typeof numberVariable;
  // eslint-disable-next-line
  let isString = typeof stringVariable;
  // eslint-disable-next-line
  let isBoolean = typeof booleanVariable;
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}
      <br />
      floatingPointNumber = {floatingPointNumber}
      <br />
      stringVariable = {stringVariable}
      <br />
      booleanVariable = {booleanVariable + ""}
      <br />
      isNumber = {isNumber}
      <br />
      isString = {isString}
      <br />
      isBoolean = {isBoolean}
      <hr />
    </div>
  );
}
