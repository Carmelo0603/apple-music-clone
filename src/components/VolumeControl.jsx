import React, { useState } from "react";
import { Form, Stack } from "react-bootstrap";
import { FiVolume1, FiVolume2 } from "react-icons/fi";

export default function VolumeControl() {
  const [value, setValue] = useState(30);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div style={{ width: 100 }}>
      <Stack direction="horizontal" gap={2} className="align-items-center">
        <FiVolume2 className="text-secondary" />
        <Form.Range className="apple-slider" value={value} onChange={handleChange} />
      </Stack>
    </div>
  );
}
