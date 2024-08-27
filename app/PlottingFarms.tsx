'use client'
import {
    Box,
    Card,
    Flex,
    Heading,
    Progress,
    Table,
    Text,
} from '@radix-ui/themes'
import React from 'react'
import { FiLoader } from 'react-icons/fi'

const PlottingFarms = () => {
    return (
        <Card>
            <Heading size="4" mb="5">
                Farm Activity
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
                                <Flex direction="column" width="100%">
                                    <Heading size="3">Plotting Farm</Heading>
                                    <Text>Terminator Farm, Index 4</Text>
                                    <Flex align="center" gap="2">
                                        <Progress color="red" value={25} size="3" />
										<Text>25%</Text>
                                    </Flex>
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
                                <Flex direction="column" width="100%">
                                    <Heading size="3">Replotting Farm</Heading>
                                    <Text>Terminator Farm, Index 1</Text>
                                    <Flex align="center" gap="2">
                                        <Progress color="green" value={75} size="3" />
										<Text>75%</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table.Root>
        </Card>
    )
}

export default PlottingFarms
