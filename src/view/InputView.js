import { Console } from '@woowacourse/mission-utils';
import MESSAGE from "../constant/Message.js";

const InputView = {
    async readDate() {
        const input = await Console.readLineAsync(MESSAGE.getVisitDayMessage);
        return input;
    },
    async readMenu() {
        const input = await Console.readLineAsync(MESSAGE.getOrderMenuMessage)
        return input;
    }
}

export default InputView;
