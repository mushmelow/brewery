import React from 'react';
import { Breadcrumb } from 'semantic-ui-react';

export const NavBar = ({ name }) => (
    <Breadcrumb>
        <Breadcrumb.Section href="/">Home</Breadcrumb.Section>
        <Breadcrumb.Divider />
        <Breadcrumb.Section active>{name}</Breadcrumb.Section>
    </Breadcrumb>
);
