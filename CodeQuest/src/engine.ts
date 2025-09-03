import inquirer from 'inquirer';
import chalk from 'chalk';
import { levels } from './levels';

export async function startGame() {
  console.log(chalk.cyan.bold('\n🚀 Welcome to CodeQuest!\n'));

  for (let i = 0; i < levels.length; i++) {
    const level = levels[i];
    console.log(chalk.yellow(`Level ${i + 1}:`));
    console.log(chalk.white(level.question));

    const { response } = await inquirer.prompt([
      {
        type: 'input',
        name: 'response',
        message: 'Your answer:'
      }
    ]);

    if (response.trim().toLowerCase() === level.answer) {
      console.log(chalk.green('✅ Correct!\n'));
    } else {
      console.log(chalk.red('❌ Wrong! Try again later.\n'));
      break;
    }
  }

  console.log(chalk.magenta.bold('🏆 Game Over. Thanks for playing!\n'));
}