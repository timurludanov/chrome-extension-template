function findElementByText(elName: string, className: string, text: string, isIncludeText: boolean = false): HTMLElement | null {
  const elements = Array.from(document.querySelectorAll<HTMLElement>(`${elName}.${className}`));

  for (const el of elements) {
    if (el.innerHTML === text)
      return el;

    if (isIncludeText && el.innerText.includes(text))
      return el;
  }

  return null;
};

export default findElementByText;