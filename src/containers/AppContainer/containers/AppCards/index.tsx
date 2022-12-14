import React from 'react'
import {
    SimpleGrid,
    Card,
    Image,
    Text,
    Container,
    AspectRatio,
} from '@mantine/core'
import { cardsStyles, cardsMockData } from './helpers'

export const AppCards: React.FC = () => {
    const { classes } = cardsStyles()

    const cards = cardsMockData.map((article) => (
        <Card
            key={article.title}
            p='md'
            radius='md'
            component='a'
            href='#'
            className={classes.card}
        >
            <AspectRatio ratio={1920 / 1080}>
                <Image src={article.image} />
            </AspectRatio>
            <Text
                color='dimmed'
                size='xs'
                transform='uppercase'
                weight={700}
                mt='md'
            >
                {article.date}
            </Text>
            <Text className={classes.title} mt={5}>
                {article.title}
            </Text>
        </Card>
    ))

    return (
        <Container py='xl'>
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                {cards}
            </SimpleGrid>
        </Container>
    )
}
