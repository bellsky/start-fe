// app.js
// modal.js 구현
import { openModal } from './modal';

$btn.addEventListener('click', () => {
  openModal({
    text: '모달입니다.',
  });
});