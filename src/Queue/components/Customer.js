import React from 'react';
import md5 from 'md5';
import CustomerCard from './CustomerCard';
import ProfilePicture from './ProfilePicture';
import Name from './Name';
import Content from './Content';
import Label from './Label';

export default props => {
  const { currentPosition, expectedTime } = props.customer;
  const { emailAddress, name } = props.customer.customer;
  let gravatarId = emailAddress ? emailAddress.trim().toLowerCase() : '';
  const hash = md5(gravatarId);

  return (
    <CustomerCard>
      <ProfilePicture
        style={{
          backgroundImage: `url(https://www.gravatar.com/avatar/${hash}?s=290)`
        }}
      />
      <Content>
        <Name>{`Pos #${currentPosition} Name: ${name}`}</Name>
        <Label>{new Date(expectedTime).toLocaleString()}</Label>
      </Content>
    </CustomerCard>
  );
};
