export function formatValue(
  value?: number | string,
  showDecimal: boolean = false
) {
  let formattedValue = value;
  if (showDecimal) {
    formattedValue = Number(value).toFixed(2);
  }
  return `R$ ${formattedValue}`
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function parseValue(value?: string) {
  return value!.replace(/R\$\s?|(\.*)/g, "").replace(",", ".");
}
