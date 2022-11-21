import React from 'react'
import { Container, Text, Button, Group } from '@mantine/core'
import { GithubIcon } from '@mantine/ds'
import { titleStyles } from './helpers'

export const AppTitle: React.FC = () => {
    const { classes } = titleStyles()

    return (
        <div className={classes.wrapper}>
            <Container size={700} className={classes.inner}>
                <h1 className={classes.title}>
                    A{' '}
                    <Text
                        component='span'
                        variant='gradient'
                        gradient={{ from: 'blue', to: 'cyan' }}
                        inherit
                    >
                        fully featured
                    </Text>{' '}
                    React components and hooks library
                </h1>

                <Text className={classes.description} color='dimmed'>
                    Build fully functional accessible web applications with ease
                    – Mantine includes more than 100 customizable components and
                    hooks to cover you in any situation
                </Text>

                <Group className={classes.controls}>
                    <Button
                        size='xl'
                        className={classes.control}
                        variant='gradient'
                        gradient={{ from: 'blue', to: 'cyan' }}
                    >
                        Get started
                    </Button>

                    <Button
                        component='a'
                        href='https://github.com/EgoVanik'
                        size='xl'
                        variant='default'
                        className={classes.control}
                        leftIcon={<GithubIcon size={20} />}
                    >
                        GitHub
                    </Button>
                </Group>
            </Container>
        </div>
    )
}
