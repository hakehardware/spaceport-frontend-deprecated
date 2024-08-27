'use client'
import { Card, Flex, Heading, Table, Text } from '@radix-ui/themes'
import React, { useEffect, useState } from 'react'
import { Event } from './types'
import DateBadge from './components/DateBadge'
import EntityIcon from './components/EntityIcon'

const LATEST_EVENTS_URL =
    'http://192.168.69.12:9998/get/events?sort_column=event_datetime&limit=5'

const LatestEvents = () => {
    const [eventData, setEventData] = useState<Event[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(LATEST_EVENTS_URL)
                if (!response.ok) {
                    throw new Error('Error fetching latest events')
                }
                const data = await response.json()
                setEventData(data.data)
            } catch (error: any) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        fetchEvents()
    }, [])

    return (
        <Card>
            <Heading size="4" mb="5">
                Latest Events
            </Heading>
            <Table.Root>
                <Table.Body>
                    {eventData.map((event) => (
                        <Table.Row key={event.event_id}>
                            <Table.Cell>
                                <Flex align="center" gap="5">
                                    <EntityIcon
                                        entity={event.event_container_type}
                                    />
                                    <Flex
                                        direction="column"
                                        align="start"
                                        gap="1"
                                    >
                                        <Text weight="bold">{event.event_name}</Text>
                                        <Text >
                                            {event.event_container_alias}
                                        </Text>

                                        <DateBadge
                                            dateString={event.event_datetime}
                                        />
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

export default LatestEvents
