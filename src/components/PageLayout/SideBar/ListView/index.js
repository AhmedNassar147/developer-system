import React from "react";
import { Container, TitleContainer, Title } from "./styled";
import { isArrayHasData } from "../../../../utils/isThereData";

const { Suspense, lazy } = React;
const Menu = lazy(() => import("antd/es/menu"));
const MenuItem = lazy(() => import("./styled"));
const Icon = lazy(() => import("../../../Icon"));

const ListView = ({ title, onClickAdd, items }) => {
  const isThereItems = isArrayHasData(items);

  return isThereItems ? (
    <Suspense fallback={null}>
      <Container>
        <TitleContainer>
          <Title>{title}</Title>
          <Suspense fallback={null}>
            <Icon onClick={onClickAdd} size={18} type="plus-circle" />
          </Suspense>
        </TitleContainer>
        <Menu theme="dark" mode="vertical">
          {items.map(({ key, value, iconName, iconColor, iconSize }, idx) => (
            <MenuItem key={key || idx}>
              {iconName && (
                <Suspense fallback={null}>
                  <Icon
                    type={iconName}
                    size={iconSize || 17}
                    color={iconColor || "#fff"}
                  />
                </Suspense>
              )}
              <span>{value}</span>
            </MenuItem>
          ))}
        </Menu>
      </Container>
    </Suspense>
  ) : null;
};

export default ListView;
