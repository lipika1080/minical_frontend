import { Box, Button, Input, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { calculate } from "./api";

function App() {
    const [numbers, setNumbers] = useState<string>("");
    const [result, setResult] = useState<string>("");

    const handleCalculate = async (operation: string) => {
        const numArray = numbers.split(",").map(Number);
        const response = await calculate(operation, numArray);
        setResult(JSON.stringify(response));
    };

    return (
        <VStack spacing={4} p={5}>
            <Text fontSize="2xl">Calculator App</Text>
            <Input
                placeholder="Enter numbers separated by commas"
                value={numbers}
                onChange={(e) => setNumbers(e.target.value)}
            />
            <Box>
                <Button colorScheme="blue" onClick={() => handleCalculate("add")}>Add</Button>
                <Button colorScheme="green" onClick={() => handleCalculate("subtract")}>Subtract</Button>
                <Button colorScheme="red" onClick={() => handleCalculate("multiply")}>Multiply</Button>
                <Button colorScheme="purple" onClick={() => handleCalculate("divide")}>Divide</Button>
            </Box>
            <Text fontSize="lg">Result: {result}</Text>
        </VStack>
    );
}

export default App;
