'use client'
import React, { useEffect, useState } from 'react'
import { Farmer } from '../types'
import { Card, Heading, Table, Flex, Badge, Text } from '@radix-ui/themes'
import EntityIcon from '../components/EntityIcon'

const FARMERS_URL =
    'http://192.168.69.12:9998/get/farmers?sort_column=farmer_id'

const Farmers = () => {
    const [farmers, setFarmers] = useState<Farmer[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchContainers = async () => {
            try {
                const response = await fetch(FARMERS_URL)
                if (!response.ok) {
                    throw new Error('Error fetching farmers')
                }
                const data = await response.json()
                setFarmers(data.data)
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
                Farmers
            </Heading>
            <Table.Root>
                <Table.Body>
                    {farmers.map((farmer) => (
                        <Table.Row key={farmer.farmer_id}>
                            <Table.Cell>
                                <Flex align="center" gap="5">
                                    <EntityIcon entity="cluster_farmer" />
                                    <Flex direction="column" gap="2">
                                        <Flex
                                            className="md:col-span-3"
                                            align="center"
                                            gap="5"
                                        >
                                            <Text weight="bold">
                                                {farmer.farmer_id}
                                            </Text>
                                        </Flex>
                                        <Flex gap="1">
                                            <Text size="1" weight="bold">
                                                ID:
                                            </Text>
                                            <Text size="1">
                                                ...
                                                {farmer.container_id.slice(-10)}
                                            </Text>
                                        </Flex>
                                        <Flex gap="1">
                                            <Text size="1" weight="bold">
                                                Reward Address:
                                            </Text>
                                            <Text size="1">
                                                ...
                                                {farmer.farmer_reward_address.slice(
                                                    -10
                                                )}
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

export default Farmers
