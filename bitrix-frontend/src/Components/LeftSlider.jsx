import React from "react";
import { GiTeamIdea, GiArcheryTarget } from "react-icons/gi";
import {
  AiOutlineFileProtect,
  AiFillFunnelPlot,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { MdContacts, MdAndroid } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
import { ImDropbox } from "react-icons/im";
import { IoIosArrowDropdownCircle, IoMdSettings } from "react-icons/io";
import { BiSitemap } from "react-icons/bi";

import { VStack } from "@chakra-ui/react";

export const LeftSlider = () => {
  return (
    <>
      <div
        style={{ marginTop: "10px", marginBottom: "10px", marginLeft: "14px" }}
      >
        <FiAlignJustify size="20px" />
      </div>
      <hr style={{ width: "10px", margin: "auto" }} />
      <div
        style={{
          marginTop: "20px",
          marginBottom: "40px",
          marginLeft: "0px",
        }}
      >
        <VStack spacing="20px">
          <GiTeamIdea size="20px" />
          <AiOutlineFileProtect size="20px" />
          <AiFillFunnelPlot size="20px" />
          <GiArcheryTarget size="20px" />
          <BsFillCartFill size="20px" />
          <MdContacts size="20px" />
          <MdAndroid size="20px" />
          <ImDropbox size="20px" />
          <IoIosArrowDropdownCircle size="20px" />
        </VStack>
      </div>
      <div>
        <VStack spacing="15px">
          <BiSitemap size="15px" />
          <IoMdSettings size="15px" />
          <AiOutlinePlus />
        </VStack>
      </div>
    </>
  );
};
