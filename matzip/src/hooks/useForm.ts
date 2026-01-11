import { useState } from 'react';

interface useFormProps<T> {
  initialValue: T;
}

export function useForm<T>({ initialValue }: useFormProps<T>) {
  const [values, setValues] = useState(initialValue);

  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const [error, setError] = useState<Record<string, boolean>>({});

  const handleValueChange = (name: keyof T, text: string) => {
    setValues(prev => ({ ...prev, [name]: text }));
  };

  const handleBlur = (name: keyof T) => {
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const getTextInputProps = (name: keyof T) => {
    const value = values[name];
    const onBlur = () => handleBlur(name);
    const onChangeText = (value: string) => handleValueChange(name, value);

    return { value, onBlur, onChangeText };
  };

  return { values, touched, error, getTextInputProps };
}
