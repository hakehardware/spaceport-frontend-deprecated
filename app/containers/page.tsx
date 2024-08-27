'use client'
import {
    Badge,
    Box,
    Card,
    Flex,
    Grid,
    Heading,
    Table,
    Text,
} from '@radix-ui/themes'
import React, { useEffect, useState } from 'react'
import { PiShippingContainer } from 'react-icons/pi'
import DateBadge from '../components/DateBadge'
import { Container } from '../types'
import EntityIcon from '../components/EntityIcon'
import moment from 'moment'

const CONTAINERS_URL =
    'http://192.168.69.12:9998/get/containers?sort_column=container_alias'

const Containers = () => {
    const [containers, setContainers] = useState<Container[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchContainers = async () => {
            try {
                const response = await fetch(CONTAINERS_URL)
                if (!response.ok) {
                    throw new Error('Error feetching containers')
                }
                const data = await response.json()
                setContainers(data.data)
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchContainers()
    }, [])

    return (
        <Card>
            <Heading size="4" mb="5">
                Containers
            </Heading>
            <Table.Root>
                <Table.Body>
                    {containers.map((container) => (
                        <Table.Row key={container.container_id}>
                            <Table.Cell>
                                <Flex align="center" gap="5">
                                    <EntityIcon
                                        entity={container.container_type}
                                    />
                                    <Flex direction="column" gap="2">
                                        <Flex
                                            className="md:col-span-3"
                                            align="center"
                                            gap="5"
                                        >
                                            <Text weight="bold">
                                                {container.container_alias}
                                            </Text>
                                            <Badge color="green">
                                                {container.container_status}
                                            </Badge>
                                            {container.container_is_cluster ===
                                                1 && (
                                                <Badge color="crimson">
                                                    Cluster
                                                </Badge>
                                            )}
                                        </Flex>
                                        <Flex gap="1">
                                            <Text size="1" weight="bold">
                                                ID:
                                            </Text>
                                            <Text size="1">
                                                ...
                                                {container.container_id.slice(
                                                    -10
                                                )}
                                            </Text>
                                        </Flex>
                                        <Flex gap="1">
                                            <Text size="1" weight="bold">
                                                Type:
                                            </Text>
                                            <Text size="1">
                                                {container.container_type} (
                                                {container.container_image})
                                            </Text>
                                        </Flex>
                                        <Flex gap="1">
                                            <Text size="1" weight="bold">
                                                Started:
                                            </Text>
                                            <Text size="1">
                                                {moment(
                                                    container.container_started_at
                                                ).fromNow()}
                                            </Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Card>
    )
}

export default Containers
