const QRCode = require('qrcode');
const fs = require('fs');

const url = 'http://localhost:3000/noel-main/index.html'; // Thay bằng link dẫn đến website của bạn

QRCode.toFile('./qrcode.png', url, function (err) {
  if (err) {
    console.error('Lỗi khi tạo QR Code:', err);
  } else {
    console.log('QR Code đã được tạo và lưu dưới tên "qrcode.png".');
  }
});
