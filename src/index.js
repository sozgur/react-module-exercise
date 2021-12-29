import { choice, remove } from "./helpers";
import fruits from "./foods";

const selected = choice(fruits);
const remaningItems = remove(fruits, selected);

console.log(`I’d like one ${selected}, please.`);

console.log(`Here you go: ${selected}`);

console.log(`Delicious! May I have another?`);

console.log(`I'm sorry, we're all out. We have ${remaningItems.length} left.`);
