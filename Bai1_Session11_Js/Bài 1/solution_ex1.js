const devices = [
  { id: "D01", name: "Điều hòa phòng khách", isActive: true, powerWatts: 1500 },
  { id: "D02", name: "Đèn ngủ", isActive: true, powerWatts: 20 }
];

const findDeviceById = (devices, targetId) => {
  for (let i = 0; i < devices.length; i++) {
    if (devices[i].id === targetId) {
      return devices[i];
    }
  }
  return null;
};

const updateDevice = (devices, targetId, updatedData) => {
  const targetDevice = findDeviceById(devices, targetId);
  if (targetDevice === null) return false;

  if (updatedData.name !== undefined) {
    targetDevice.name = updatedData.name;
  }

  if (updatedData.isActive !== undefined) {
    targetDevice.isActive = updatedData.isActive;
  }

  if (updatedData.powerWatts !== undefined) {
    targetDevice.powerWatts = updatedData.powerWatts;
  }

  return true;
};

console.log("--- TRẠNG THÁI THIẾT BỊ BAN ĐẦU ---");
console.table(devices);

updateDevice(devices, "D01", { isActive: false });
console.log("--- SAU KHI TẮT ĐIỀU HÒA (D01) ---");
console.table(devices);

updateDevice(devices, "D02", { powerWatts: 0 });
console.log("--- SAU KHI HẠ CÔNG SUẤT ĐÈN NGỦ (D02) VỀ 0W ---");
console.table(devices);
