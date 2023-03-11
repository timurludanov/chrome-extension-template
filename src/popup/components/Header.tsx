import React, { FC } from "react";

type Props = {
  title: string
}

const Header: FC<Props> = (props: Props) => {
  return <h1>{props.title}</h1>
};

export default Header;