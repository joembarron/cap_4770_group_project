import { useState } from 'react';
import { Button, Flex, Tag, TagCloseButton, TagLabel, Card, CardBody, CardHeader, Heading, Input, Tabs, Tab, TabList, VStack } from '@chakra-ui/react';

function App() {

    interface Book {
        title: string;
        rating: number;
    }

    const [bookTitle, setBookTitle] = useState('');
    const [selectedRating, setRating] = useState(1);
    const [bookList, setBookList] = useState<Book[]>([]);

    const addBook = () => {
        if (bookTitle && selectedRating) {

            // Create the new book
            const newBook: Book = { title: bookTitle, rating: selectedRating };

            // Update the list with the new book
            setBookList([...bookList, newBook]);

            // Reset title state
            setBookTitle('');
        }
    };

    const removeBook = (index: number) => {

        // Create copy for editing
        const updatedBookList = [...bookList];

        // Remove the book at the correct index
        updatedBookList.splice(index, 1);

        // Update the hard copy list with the edited list
        setBookList(updatedBookList);
    };

    const handleEmojiClick = (rating: number) => {
        setRating(rating);
    };

    const sendBooksToServer = async () => {
        // TODO

        // Reset book list
        setBookList<Book[]>([])
    }

    return (
        <>
            <Flex h='100%' w='100%' bg='#EBEBEB' justify='center' align='center' direction='column' gap='20px'>
                <Card h='500px' w='500px' align='center'>
                    <CardHeader>
                        <Heading size='md'>Magical Book Recommender</Heading>
                    </CardHeader>

                    <CardBody w='75%' gap='20px'>
                        <VStack spacing='20px'>
                            <Input value={ bookTitle } onChange={(e) => setBookTitle(e.target.value)} placeholder='What book have you read?'/>
                            <Tabs variant='soft-rounded' align='center'>
                                <TabList>
                                    <Tab _selected={{ background: '#C0C0C0' }} onClick={() => handleEmojiClick(1)}>💩</Tab>
                                    <Tab _selected={{ background: '#C0C0C0' }} onClick={() => handleEmojiClick(2)}>😒</Tab>
                                    <Tab _selected={{ background: '#C0C0C0' }} onClick={() => handleEmojiClick(3)}>😐</Tab>
                                    <Tab _selected={{ background: '#C0C0C0' }} onClick={() => handleEmojiClick(4)}>🙂</Tab>
                                    <Tab _selected={{ background: '#C0C0C0' }} onClick={() => handleEmojiClick(5)}>😃</Tab>
                                </TabList>
                            </Tabs>
                            <Button w='50%' color='white' bg='#004E98' _hover={{ background: '#C0C0C0' }} onClick={addBook}>Add Book</Button>

                            {bookList.map((book, index) => (
                                <Tag key={index} size='md' borderRadius='full' variant='solid' bg='#FF6700'>
                                    <TagLabel>{book.title}: {book.rating}</TagLabel>
                                    <TagCloseButton onClick={() => removeBook(index)} />
                                </Tag>
                            ))}

                        </VStack>
                    </CardBody>
                </Card>

                <Button w='300px' color='white' bg='#004E98' _hover={{ background: '#FF6700' }} onClick={sendBooksToServer}>Generate</Button>

            </Flex>
        </>
    )
}

export default App
