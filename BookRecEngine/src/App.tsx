import { Flex} from '@chakra-ui/react'
import { Card, CardHeader, CardBody, Heading, Input} from '@chakra-ui/react'
import { Tabs, TabList, Tab, VStack } from '@chakra-ui/react'

function App() {

    return (
        <>
            <Flex h='100%' w='100%' bg='#5E503F' justify='center' align='center'>
                <Card h='500px' w='500px' align='center'>
                  <CardHeader>
                    <Heading size='md'>Magical Book Recommender</Heading>
                  </CardHeader>

                  <CardBody w='75%' gap='20px'>
                    <VStack spacing='10px'>
                        <Input placeholder='What book have you read?'/>
                        <Tabs variant='soft-rounded' justify='center' align='center'>
                            <TabList>
                            <Tab _selected={{ background: '#EAE0D5' }}>💩</Tab>
                            <Tab _selected={{ background: '#EAE0D5' }}>😒</Tab>
                            <Tab _selected={{ background: '#EAE0D5' }}>😐</Tab>
                            <Tab _selected={{ background: '#EAE0D5' }}>🙂</Tab>
                            <Tab _selected={{ background: '#EAE0D5' }}>😃</Tab>
                            </TabList>
                        </Tabs>
                    </VStack>
                  </CardBody>
                </Card>
            </Flex>
        </>
    )
}

export default App
