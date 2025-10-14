/**
 * Định dạng số tiền Việt Nam — ví dụ "10000.00 ₫" → "10.000"
 */
export function formatCurrencyVN(value: string | number): string {
  if (value === null || value === undefined) return "";

  const raw = value.toString().replace(/[^\d.-]/g, ""); // bỏ ký tự ₫, space, etc.
  const number = parseFloat(raw);
  if (isNaN(number)) return "";

  return number.toLocaleString("vi-VN", { maximumFractionDigits: 0 });
}

/**
 * Parse ngược lại từ "10.000 ₫" → 10000 (số)
 */
export function parseCurrencyVN(value: string): number {
  return Number(value.replace(/[^\d]/g, "")) || 0;
}
