'use client';

import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QrCodeGenerator: React.FC = () => {
  const [value, setValue] = useState<string>('https://example.com');

  return (
    <div className="flex flex-col items-center gap-4">
      <input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        placeholder="Enter text or URL"
        className="border p-2 rounded w-[300px]"
      />
      <QRCodeCanvas value={value} size={200} />
    </div>
  );
};

export default QrCodeGenerator;