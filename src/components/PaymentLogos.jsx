// Logos chicos de tarjetas y bancos, dibujados en SVG para no depender de archivos externos.
const PaymentLogos = () => (
  <div className="pay-logos">
    <svg viewBox="0 0 60 36" role="img" aria-label="Visa">
      <rect width="60" height="36" rx="5" fill="#fff" />
      <text x="30" y="24" textAnchor="middle" fill="#1a1f71" fontFamily="Arial, sans-serif" fontSize="17" fontStyle="italic" fontWeight="900">VISA</text>
    </svg>
    <svg viewBox="0 0 60 36" role="img" aria-label="Mastercard">
      <rect width="60" height="36" rx="5" fill="#fff" />
      <circle cx="24" cy="18" r="11" fill="#eb001b" />
      <circle cx="36" cy="18" r="11" fill="#f79e1b" />
      <path d="M30 8.8a11 11 0 0 1 0 18.4a11 11 0 0 1 0-18.4z" fill="#ff5f00" />
    </svg>
    <svg viewBox="0 0 60 36" role="img" aria-label="Santander">
      <rect width="60" height="36" rx="5" fill="#ec0000" />
      <path d="M11 9c2.5 2.6 3.2 4.4 2 6.6c2.2-.9 3-2.7 2.4-4.8c2.6 2.4 3 4.6 1.4 7.2c2.4-.5 3.6 1.1 3.2 3.4c-1.8-1.8-5.4-2.4-9.4-1.6c-1.6-3.3-.8-6.8.4-10.8z" fill="#fff" />
      <text x="38" y="22" textAnchor="middle" fill="#fff" fontFamily="Arial, sans-serif" fontSize="8.5" fontWeight="700">Santander</text>
    </svg>
    <svg viewBox="0 0 60 36" role="img" aria-label="ICBC">
      <rect width="60" height="36" rx="5" fill="#fff" />
      <rect x="8" y="10" width="16" height="16" rx="2" fill="none" stroke="#c4161c" strokeWidth="2.4" />
      <rect x="13" y="15" width="6" height="6" fill="#c4161c" />
      <text x="40" y="22.5" textAnchor="middle" fill="#c4161c" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="900">ICBC</text>
    </svg>
  </div>
);

export default PaymentLogos;
