import { Card, Flex, Heading, Table, Text } from '@radix-ui/themes'
import React from 'react'
import { convertUtcToLocal } from './helpers'
import { FiLoader } from 'react-icons/fi'
import DateBadge from './components/DateBadge'

const PlottingSectors = () => {
    return (
        <Card>
            <Heading size="4" mb="5">
                Plotting Sectors
            </Heading>
            <Table.Root>
                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Flex align="center" gap="5">
                                <FiLoader
                                    className="animate-spin"
                                    size="1.5rem"
                                />
                                <Flex direction="column" gap="1" align="start">
                                    <Text weight="bold">
                                        Plotting Sector 4523 | Index 4 |
                                        Terminator Farmer
                                    </Text>
                                    <DateBadge dateString="2024-08-26 16:37:17" />
                                </Flex>
                            </Flex>
                        </Table.Cell>
                    </Table.Row>
					<Table.Row>
                        <Table.Cell>
                            <Flex align="center" gap="5">
                                <FiLoader
                                    className="animate-spin"
                                    size="1.5rem"
                                />
                                <Flex direction="column" gap="1" align="start">
                                    <Text weight="bold">
                                        Replotting Sector 534 | Index 1 |
                                        Terminator Farmer
                                    </Text>
                                    <DateBadge dateString="2024-08-26 16:36:12" />
                                </Flex>
                            </Flex>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        </Card>
    )
}

export default PlottingSectors
