import { Flex, Grid } from '@radix-ui/themes'
import { Metadata } from 'next'
import LatestEvents from './LatestEvents'
import PlottingFarms from './PlottingFarms'
import PlottingSectors from './PlottingSectors'

export default function Home() {
    return (
        <Grid columns={{ initial: '1', md: '2' }} gap="5">
            <Flex direction="column" gap="5">
                <PlottingFarms />
                <PlottingSectors />
            </Flex>
            <LatestEvents />
        </Grid>
    )
}

export const metadata: Metadata = {
    title: 'SpacePort - Dashboard',
}
