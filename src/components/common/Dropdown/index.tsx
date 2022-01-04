import React, { FC, useState } from "react";
import styled from "styled-components";
import { sizes, colors, fontFamilies, DropdownProps } from "../../../variables";

const Dropdown: FC<DropdownProps> = ({ options, name }) => {
  const [selected, setSelected] = useState(options[0].content);
  const [imageUrl, setImageUrl] = useState(options[0].image);
  const [toggle, setToggle] = useState(false);
  const toggleClass = () => {
    setToggle(!toggle);
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    setSelected((e.target as HTMLInputElement).value);
    toggleClass();
  };

  const handleChange = (e: React.MouseEvent<HTMLLabelElement>) => {
    setImageUrl(
      ((e.target as HTMLElement).children[0] as HTMLImageElement)?.src
    );
  };

  return (
    <Wrapper>
      <Select id="selected-choice" onClick={toggleClass}>
        {selected}
        {imageUrl !== null ? <DropdownImage src={imageUrl} /> : null}
      </Select>
      <DropdownList visibility={toggle.toString()} id={name}>
        {options.map(
          (
            choice: { content: string; image: string | null },
            index: number
          ) => {
            return (
              <React.Fragment key={index}>
                <RadioInput
                  type="radio"
                  id={choice.content}
                  name={name}
                  value={choice.content}
                  onClick={handleClick}
                />
                <Option htmlFor={choice.content} onClick={handleChange}>
                  {choice.content}
                  {choice.image !== null ? (
                    <DropdownImage src={choice.image} />
                  ) : null}
                </Option>
              </React.Fragment>
            );
          }
        )}
      </DropdownList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 5px;
`;

const Select = styled.span`
  position: relative;
  box-sizing: border-box;
  height: ${sizes.size22};
  color: ${colors.orange6};
  padding: 0;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size16};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size22};
`;

const DropdownList = styled.div<{ visibility: string }>`
  box-sizing: border-box;
  position: absolute;
  width: 70px;
  display: ${(props) => (props.visibility === "true" ? "flex" : "none")};
  flex-direction: column;
  border: ${sizes.size1} solid ${colors.white};
  border-radius: ${sizes.size6};
  box-shadow: 0 2px 8px 0 ${colors.grey14};
  z-index: 1;
`;

const Option = styled.label`
  background-color: ${colors.white};
  height: 16px;
  color: black;
  font-family: ${fontFamilies.fontFamilyOsRegular};
  font-size: ${sizes.size14};
  letter-spacing: ${sizes.size0};
  line-height: ${sizes.size16};
  padding: 12px 5px;
  text-align: left;
`;

const RadioInput = styled.input`
  display: none;
`;

const DropdownImage = styled.img`
  margin-left: 2px;
`;

export default Dropdown;
