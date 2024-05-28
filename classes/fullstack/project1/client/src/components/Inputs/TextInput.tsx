type Props = {
  defaultValue?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
};

const TextInput = (props: Props) => {
  return (
    <>
      <span>{props.label}</span>
      <input
        className={`text-input ${props.className}`}
        type="text"
        defaultValue={props.defaultValue}
        onChange={props.onChange}
      />
    </>
  );
};

export default TextInput;
