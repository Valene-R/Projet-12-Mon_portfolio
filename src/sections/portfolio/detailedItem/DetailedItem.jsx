import React from 'react';
import { Root, Title, Description, Item, Paragraph } from './detailedItem.styled';

const DetailedItem = ({ title, description }) => {
  return (
    <Root>
    <Title>{title}</Title>
    {Array.isArray(description) ? (
        <Description>
          {description.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </Description>
      ) : (
        <Paragraph>{description}</Paragraph>
      )}
  </Root>
  );
};

export default DetailedItem;