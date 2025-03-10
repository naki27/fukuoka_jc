export function safeJsonParse(input) {
  try {
    const parsed = JSON.parse(input);
    return { success: true, data: parsed };
  } catch (e) {
    return { success: false, error: 'Invalid JSON' };
  }
}

export function safeJsonParseIgnoreError(input) {
  const result = safeJsonParse(input);
  if (result.success) {
    return result.data;
  } else {
    return {};
  }
}