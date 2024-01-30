export function handleChange (field: string, value: string, formData,setFormData) {
    if (field === "title") {
      if (value.length > 100) {
        return;
      }
    } else {
      if (value.length > 1000) {
        return;
      }
    }
    setFormData({
      ...formData,
      [field]: value,
    });
}