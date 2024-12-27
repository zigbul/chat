export function formatMessageTime(date) {
  return new Date(date).toLocaleDateString('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  });
}
