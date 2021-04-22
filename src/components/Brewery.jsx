import React from 'react';
import { Card, List } from 'semantic-ui-react';
import styled from 'styled-components';

const CardContent = styled(Card.Content)`
    min-height: 150px;
`;

export const Brewery = ({ brewery }) => {
    return (
        <Card>
            <CardContent>
                <List>
                    <List.Item>
                        <List.Icon name="users" />
                        <List.Content>{brewery.name}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="marker" />
                        <List.Content>
                            {brewery.street}, {brewery.city}, {brewery.state} {brewery.postal_code}
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="phone" />
                        <List.Content>
                            <a href={`tel:${brewery.phone}`}>{brewery.phone}</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name="linkify" />
                        <List.Content>
                            <a target="_blank" rel="noopener noreferrer" href={brewery.website_url}>
                                {brewery.website_url}
                            </a>
                        </List.Content>
                    </List.Item>
                </List>
            </CardContent>
        </Card>
    );
};
