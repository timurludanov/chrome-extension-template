import { delay, random } from "../proccess";

async function setInputValue(
  element: HTMLElement,
  value: string,
  skipHandInput: boolean = false
): Promise<void> {
  const nativeTextAreaValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value"
  )?.set;

  if (!nativeTextAreaValueSetter) return;

  if (skipHandInput) {
    nativeTextAreaValueSetter.call(element, value);

    const event = new Event("input", { bubbles: true });
    element.dispatchEvent(event);
    return;
  }

  let resValue = "";

  for (let i = 0; i < value.length; ++i) {
    await delay(random(200, 500));
    resValue += value.charAt(i);

    nativeTextAreaValueSetter.call(element, resValue);

    const event = new Event("input", { bubbles: true });
    element.dispatchEvent(event);
  }
}

export default setInputValue;
