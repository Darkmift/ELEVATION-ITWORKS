import chalk from 'chalk';
import contacts from './data/contacts.json' with { type: 'json' };
import { getContactName } from './utils/contacts.js';

console.log(chalk.redBright('Hello world!'),chalk.green('Welcome!'));

console.log(contacts.results.length);

console.log(getContactName(contacts.results[0]));
