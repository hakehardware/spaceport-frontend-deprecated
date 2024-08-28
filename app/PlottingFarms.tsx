'use client'
import { Card, Flex, Heading, Progress, Table, Text } from '@radix-ui/themes'
import { FiLoader } from 'react-icons/fi'
import React, { useEffect, useState } from 'react'
import { Farm } from './types'
import PlotProgress from './components/PlotProgress'

const FARM_ACTIVITY_URL =
    'http://192.168.69.12:9998/get/farms?sort_column=farm_index'

interface FarmResponse {
    data: Farm[]
    page: number
    limit: number
    total_rows: number
}

const PlottingFarms = () => {
    const [farms, setFarms] = useState<Farm[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchContainers = async () => {
            try {
                const response = await fetch(FARM_ACTIVITY_URL)
                if (!response.ok) {
                    throw new Error('Error fetching farms')
                }
                const data: FarmResponse = await response.json()

                const activeFarms = data.data.filter(
                    (farm) => farm.farm_plot_progress < 100
                )
                setFarms(activeFarms)
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
                Farm Activity
            </Heading>
            {farms.length === 0 && <Text>No Activity</Text>}
            <Table.Root>
                <Table.Body>
                    {farms.map((farm) => (
                        <Table.Row>
                            <Table.Cell>
                                <Flex align="center" gap="5">
                                    <FiLoader
                                        className="animate-spin"
                                        size="1.5rem"
                                    />
                                    <Flex direction="column" width="100%">
                                        <Heading size="3">
                                            {farm.farm_plot_progress < 100 &&
                                                farm.farm_initial_plot_complete ===
                                                    1 && (
                                                    <Text>Replotting</Text>
                                                )}
                                            {farm.farm_plot_progress < 100 &&
                                                farm.farm_initial_plot_complete ===
                                                    0 && <Text>Plotting</Text>}
                                            {farm.farm_plot_progress ===
                                                100 && (
                                                <Text>Plotting Complete</Text>
                                            )}
                                        </Heading>
                                        <Text>
                                            {' '}
                                            {farm.farmer_id} - Farm{' '}
                                            {farm.farm_index} [{farm.farm_size}]
                                        </Text>
                                        <Flex align="center" gap="2">
                                            <Text>75%</Text>
                                            <PlotProgress
                                                plotProgress={
                                                    farm.farm_plot_progress
                                                }
                                            />
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

export default PlottingFarms
