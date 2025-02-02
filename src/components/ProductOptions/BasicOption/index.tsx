import Button from "@/components/Button";

const BasicOption = ({
  title,
  values,
  selectedVariant,
  setSelectedVariant,
}: {
  title: string;
  values: string[];
  selectedVariant: any;
  setSelectedVariant: Function;
}) => {
  const handleOptionSelect = (title: string, value: string) => {
    if (title === "Renk") {
      setSelectedVariant((prev: any) => ({ ...prev, color: value }));
    } else if (title === "Beden") {
      setSelectedVariant((prev: any) => ({ ...prev, size: value }));
    }
  };

  return (
    <div className="basic-option">
      <div className="title-wrapper">
        <div>{title}</div>
        <div>:</div>
      </div>
      <div className="options-wrapper">
        {values.map((value, index) => (
          <Button
            variant={`option-box ${
              title === "Renk" && selectedVariant.color === value
                ? "active"
                : title === "Beden" && selectedVariant.size === value
                ? "active"
                : selectedVariant.color == "Siyah" &&
                  (value == "M" || value == "XL")
                ? "passive"
                : ""
            }`}
            label={value}
            key={index}
            onClick={() => {
              handleOptionSelect(title, value);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BasicOption;
