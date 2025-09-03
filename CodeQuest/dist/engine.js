"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startGame = startGame;
const inquirer_1 = require("inquirer");
const chalk_1 = require("chalk");
const levels_1 = require("./levels");
function startGame() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(chalk_1.default.cyan.bold('\n🚀 Welcome to CodeQuest!\n'));
        for (let i = 0; i < levels_1.levels.length; i++) {
            const level = levels_1.levels[i];
            console.log(chalk_1.default.yellow(`Level ${i + 1}:`));
            console.log(chalk_1.default.white(level.question));
            const { response } = yield inquirer_1.default.prompt([
                {
                    type: 'input',
                    name: 'response',
                    message: 'Your answer:'
                }
            ]);
            if (response.trim().toLowerCase() === level.answer) {
                console.log(chalk_1.default.green('✅ Correct!\n'));
            }
            else {
                console.log(chalk_1.default.red('❌ Wrong! Try again later.\n'));
                break;
            }
        }
        console.log(chalk_1.default.magenta.bold('🏆 Game Over. Thanks for playing!\n'));
    });
}
