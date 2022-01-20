import React, { FC, useState } from "react";
import styled from "styled-components";
import { sizes, colors, fontFamilies } from "../../../variables";
import { DropdownProps } from "../interfaces";
import DownArrow from "../../../assets/common/dropdown/down_arrow.png";
import OutsideAlerter from "../../OutsideClickAlert";
import Label from "../label";
import Image from "../image";

const Dropdown: FC<DropdownProps> = ({ options, name, arrow, className }) => {
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
    if (imageUrl !== null) {
      setImageUrl(
        ((e.currentTarget as HTMLElement).children[0] as HTMLImageElement)?.src
      );
    }
  };

  return (
    <Wrapper>
      <OutsideAlerter handlePress={() => setToggle(false)}>
        <Select
          onClick={toggleClass}
          className={className}
          content={selected}
        />
        {imageUrl !== null ? <DropdownImage src={imageUrl} /> : null}
        {arrow === true ? (
          <ArrowImage
            src={DownArrow}
            className={toggle.toString()}
            onClick={toggleClass}
          />
        ) : null}
        <DropdownList className={toggle.toString()} id={name}>
          {options
            .filter((option) => {
              return (
                `${selected}${imageUrl}` !== `${option.content}${option.image}`
              );
            })
            .map(
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
                    <Option
                      htmlFor={choice.content}
                      onClick={handleChange}
                      className={className}
                    >
                      {choice.content}
                      {choice.image !== null ? (
                        <DropdownImage src={choice.image} />
                      ) : null}
                    </Option>
                    {index !== options.length - 2 ? <Underline /> : null}
                  </React.Fragment>
                );
              }
            )}
        </DropdownList>
      </OutsideAlerter>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-left: 5px;
`;

const Select = styled(Label)`
  position: relative;
  box-sizing: border-box;
  color: ${colors.orange_fca100};
  padding: 0;
  font-family: ${(props) =>
    props.className === "semibold"
      ? `${fontFamilies.fontFamilyOsSemiBold}`
      : `${fontFamilies.fontFamilyOsRegular}`};
`;

const DropdownList = styled.div<{ className: string }>`
  box-sizing: border-box;
  background-color: ${colors.white_ffffff};
  position: absolute;
  display: ${(props) => (props.className === "true" ? "flex" : "none")};
  flex-direction: column;
  border: ${sizes.size1} solid ${colors.white_ffffff};
  border-radius: ${sizes.size5};
  box-shadow: 0 2px 8px 0 ${colors.grey_949494_34};
  z-index: 1;
  padding: 0px 18px;
  margin-top: 6px;
`;

const Option = styled.label`
  height: ${sizes.size22};
  color: ${colors.grey_4a4a4a};
  font-family: ${(props) =>
    props.className === "semibold"
      ? `${fontFamilies.fontFamilyOsSemiBold}`
      : `${fontFamilies.fontFamilyOsRegular}`};
  font-size: ${sizes.size16};
  letter-spacing: 0.11px;
  line-height: ${sizes.size22};
  padding: 15px 0px;
  text-align: left;
  white-space: nowrap;
`;

const Underline = styled.div`
  box-sizing: border-box;
  height: 2px;
  width: auto;
  border: 1px solid ${colors.grey_979797};
  opacity: 0.44;
`;

const RadioInput = styled.input`
  display: none;
`;

const DropdownImage = styled(Image)`
  object-fit: none;
  margin-left: 2px;
`;

const ArrowImage = styled(Image)<{ className: string }>`
  display: inline-block;
  transform: ${(props) =>
    props.className === "true" ? "rotate(180deg)" : "rotate(0deg)"};
  -webkit-transform: ${(props) =>
    props.className === "true" ? "rotate(180deg)" : "rotate(0deg)"};
  margin-left: 10.92px;
  vertical-align: middle;
`;

export default Dropdown;
